import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

type LocalStep = 'shipping' | 'payment' | 'processing' | 'success';

export const CheckoutModal: React.FC = () => {
  const { checkoutStep, setCheckoutStep, clearCart, cartItems, subtotal } = useCart();
  
  // Local checkout step tracking
  const [localStep, setLocalStep] = useState<LocalStep>('shipping');
  const [progressWidth, setProgressWidth] = useState(0);

  // Form Fields - Shipping
  const [shippingName, setShippingName] = useState('');
  const [shippingEmail, setShippingEmail] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingZip, setShippingZip] = useState('');
  const [shippingErrors, setShippingErrors] = useState<Record<string, string>>({});
  const [isValidatingZip, setIsValidatingZip] = useState(false);

  // Form Fields - Payment
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>({});

  // Reset steps when checkout is initialized
  useEffect(() => {
    if (checkoutStep === 'processing') {
      setLocalStep('shipping');
      setProgressWidth(0);
    }
  }, [checkoutStep]);

  // Payment simulated loader effect
  useEffect(() => {
    if (localStep !== 'processing') return;

    setProgressWidth(10);
    const timer1 = setTimeout(() => {
      setProgressWidth(60);
    }, 1000);

    const timer2 = setTimeout(() => {
      setProgressWidth(100);
      setLocalStep('success');
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [localStep]);

  if (checkoutStep === 'idle') return null;

  // Shipping Form Submit
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!shippingName) errors.name = 'Full name is required.';
    if (!shippingEmail.includes('@')) errors.email = 'Please enter a valid email.';
    if (!shippingAddress) errors.address = 'Street address is required.';
    if (!shippingCity) errors.city = 'City is required.';
    if (!/^\d{5}$/.test(shippingZip)) errors.zip = 'ZIP code must be exactly 5 digits.';

    if (Object.keys(errors).length > 0) {
      setShippingErrors(errors);
      return;
    }

    setShippingErrors({});
    setIsValidatingZip(true);
    // Simulate address validation loader
    setTimeout(() => {
      setIsValidatingZip(false);
      setLocalStep('payment');
    }, 1200);
  };

  // Payment Form Submit
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    const cleanCard = cardNumber.replace(/\s+/g, '');

    if (!cardName) errors.cardName = 'Cardholder name is required.';
    if (!/^\d{16}$/.test(cleanCard)) errors.cardNumber = 'Card number must be 16 digits.';
    if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) errors.expiry = 'Expiry must be in MM/YY format.';
    if (!/^\d{3}$/.test(cardCvv)) errors.cvv = 'CVV must be 3 digits.';

    if (Object.keys(errors).length > 0) {
      setPaymentErrors(errors);
      return;
    }

    setPaymentErrors({});
    setLocalStep('processing');
  };

  // Auto-format card number as 1111 2222 3333 4444
  const handleCardNumberChange = (val: string) => {
    const clean = val.replace(/\D/g, '').slice(0, 16);
    const matches = clean.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      setCardNumber(parts.join(' '));
    } else {
      setCardNumber(clean);
    }
  };

  // Auto-format expiry as MM/YY
  const handleExpiryChange = (val: string) => {
    const clean = val.replace(/\D/g, '').slice(0, 4);
    if (clean.length >= 2) {
      setCardExpiry(`${clean.slice(0, 2)}/${clean.slice(2, 4)}`);
    } else {
      setCardExpiry(clean);
    }
  };

  const handleCloseCheckout = () => {
    if (localStep === 'success') {
      clearCart();
    }
    setCheckoutStep('idle');
    setLocalStep('shipping');
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[#000000]/40 backdrop-blur-sm"
        onClick={localStep !== 'processing' ? handleCloseCheckout : undefined}
      />

      {/* Main Dialog Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="relative bg-[#FBFBF9] border border-primary text-primary w-full max-w-2xl overflow-hidden flex flex-col md:flex-row z-10 h-[560px]"
        style={{ borderRadius: '0px' }}
      >
        {/* Close Button */}
        {localStep !== 'processing' && (
          <button
            onClick={handleCloseCheckout}
            className="absolute right-4 top-4 z-20 flex items-center justify-center w-8 h-8 bg-[#FBFBF9] border border-primary/20 hover:border-primary text-secondary hover:text-primary transition-colors focus-visible:outline-none"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        )}

        {/* Left Panel: Invoice Details (40%) */}
        <div className="w-full md:w-[40%] bg-[#F2F1ED] p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-primary/10">
          <div>
            <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-[0.2em] font-semibold block mb-6">
              Order Summary
            </span>
            <div className="space-y-4 max-h-[280px] overflow-y-auto no-scrollbar">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-3 justify-between items-center text-xs">
                  <span className="font-body-md text-primary truncate max-w-[120px]">
                    {item.product.name} (x{item.quantity})
                  </span>
                  <span className="font-label-sm text-secondary">
                    ${item.product.price * item.quantity} USD
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-primary/10 pt-6">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-label-sm text-[11px] uppercase text-secondary">Total Due</span>
              <span className="font-headline-md text-xl text-primary font-normal">
                ${subtotal} USD
              </span>
            </div>
            <span className="font-label-sm text-[9px] text-secondary tracking-normal">
              Secure payments audited by La Forêt Atelier.
            </span>
          </div>
        </div>

        {/* Right Panel: Interactive Forms (60%) */}
        <div className="w-full md:w-[60%] p-8 flex flex-col justify-center h-full relative overflow-y-auto no-scrollbar">
          
          <AnimatePresence mode="wait">
            
            {/* Step 1: Shipping Form */}
            {localStep === 'shipping' && (
              <motion.form
                key="shipping"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleShippingSubmit}
                className="space-y-4"
              >
                <div>
                  <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest block mb-1">
                    Step 1 of 2
                  </span>
                  <h3 className="font-headline-md text-xl font-normal text-primary">Shipping Information</h3>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="font-label-sm text-[9px] text-secondary uppercase tracking-wider block font-bold">Full Name</label>
                    <input
                      type="text"
                      value={shippingName}
                      onChange={(e) => setShippingName(e.target.value)}
                      className={`w-full bg-transparent border-0 border-b ${shippingErrors.name ? 'border-red-600' : 'border-primary/20 focus:border-accent-sage'} pb-1 font-body-md text-sm outline-none`}
                      placeholder="Jean Tange"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-label-sm text-[9px] text-secondary uppercase tracking-wider block font-bold">Email Address</label>
                    <input
                      type="email"
                      value={shippingEmail}
                      onChange={(e) => setShippingEmail(e.target.value)}
                      className={`w-full bg-transparent border-0 border-b ${shippingErrors.email ? 'border-red-600' : 'border-primary/20 focus:border-accent-sage'} pb-1 font-body-md text-sm outline-none`}
                      placeholder="tange@atelier.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-label-sm text-[9px] text-secondary uppercase tracking-wider block font-bold">Delivery Address</label>
                    <input
                      type="text"
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      className={`w-full bg-transparent border-0 border-b ${shippingErrors.address ? 'border-red-600' : 'border-primary/20 focus:border-accent-sage'} pb-1 font-body-md text-sm outline-none`}
                      placeholder="102 Woodcraft Ave"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-label-sm text-[9px] text-secondary uppercase tracking-wider block font-bold">City</label>
                      <input
                        type="text"
                        value={shippingCity}
                        onChange={(e) => setShippingCity(e.target.value)}
                        className={`w-full bg-transparent border-0 border-b ${shippingErrors.city ? 'border-red-600' : 'border-primary/20 focus:border-accent-sage'} pb-1 font-body-md text-sm outline-none`}
                        placeholder="Kyoto"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-label-sm text-[9px] text-secondary uppercase tracking-wider block font-bold">ZIP Code</label>
                      <input
                        type="text"
                        value={shippingZip}
                        onChange={(e) => setShippingZip(e.target.value)}
                        className={`w-full bg-transparent border-0 border-b ${shippingErrors.zip ? 'border-red-600' : 'border-primary/20 focus:border-accent-sage'} pb-1 font-body-md text-sm outline-none`}
                        placeholder="60481"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isValidatingZip}
                  className="w-full bg-[#1A1A1A] hover:bg-[#7A827A] text-[#FBFBF9] py-3.5 font-label-md text-xs uppercase tracking-widest transition-colors duration-300 border-0 flex items-center justify-center gap-2 focus-visible:outline-none"
                  style={{ borderRadius: '0px' }}
                >
                  {isValidatingZip ? (
                    <>
                      <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>
                      <span>Validating Address...</span>
                    </>
                  ) : (
                    <span>Continue to Payment →</span>
                  )}
                </button>
              </motion.form>
            )}

            {/* Step 2: Payment details & Live Card Mockup */}
            {localStep === 'payment' && (
              <motion.form
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handlePaymentSubmit}
                className="space-y-6"
              >
                <div>
                  <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest block mb-1">
                    Step 2 of 2
                  </span>
                  <h3 className="font-headline-md text-xl font-normal text-primary">Payment Details</h3>
                </div>

                {/* Minimalist credit card representation */}
                <div className="bg-[#1A1A1A] text-[#F2F1ED] p-5 border border-primary/20 space-y-4 shadow-sm" style={{ borderRadius: '0px' }}>
                  <div className="flex justify-between items-center text-xs opacity-50 uppercase tracking-widest">
                    <span>LA FORÊT ATELIER</span>
                    <span className="material-symbols-outlined text-[20px]">credit_card</span>
                  </div>
                  <div className="font-headline-md text-lg tracking-[0.15em] py-2">
                    {cardNumber || '•••• •••• •••• ••••'}
                  </div>
                  <div className="flex justify-between text-[11px] uppercase tracking-wider opacity-60">
                    <div className="truncate max-w-[160px]">{cardName || 'CARDHOLDER NAME'}</div>
                    <div>{cardExpiry || 'MM/YY'}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="font-label-sm text-[9px] text-secondary uppercase tracking-wider block font-bold">Cardholder Name</label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className={`w-full bg-transparent border-0 border-b ${paymentErrors.cardName ? 'border-red-600' : 'border-primary/20 focus:border-accent-sage'} pb-1 font-body-md text-sm outline-none`}
                      placeholder="Jean Tange"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-label-sm text-[9px] text-secondary uppercase tracking-wider block font-bold">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => handleCardNumberChange(e.target.value)}
                      className={`w-full bg-transparent border-0 border-b ${paymentErrors.cardNumber ? 'border-red-600' : 'border-primary/20 focus:border-accent-sage'} pb-1 font-body-md text-sm outline-none`}
                      placeholder="4000 1234 5678 9010"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-label-sm text-[9px] text-secondary uppercase tracking-wider block font-bold">Expiration Date</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => handleExpiryChange(e.target.value)}
                        className={`w-full bg-transparent border-0 border-b ${paymentErrors.expiry ? 'border-red-600' : 'border-primary/20 focus:border-accent-sage'} pb-1 font-body-md text-sm outline-none`}
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-label-sm text-[9px] text-secondary uppercase tracking-wider block font-bold">CVV</label>
                      <input
                        type="password"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                        className={`w-full bg-transparent border-0 border-b ${paymentErrors.cvv ? 'border-red-600' : 'border-primary/20 focus:border-accent-sage'} pb-1 font-body-md text-sm outline-none`}
                        placeholder="•••"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setLocalStep('shipping')}
                    className="flex-1 border border-primary text-primary py-3.5 font-label-md text-xs uppercase tracking-widest transition-all focus-visible:outline-none"
                    style={{ borderRadius: '0px' }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-2 w-full bg-[#1A1A1A] hover:bg-[#7A827A] text-[#FBFBF9] py-3.5 font-label-md text-xs uppercase tracking-widest transition-colors duration-300 border-0 focus-visible:outline-none"
                    style={{ borderRadius: '0px' }}
                  >
                    Complete Purchase
                  </button>
                </div>
              </motion.form>
            )}

            {/* Step 3: Transaction Processing Loader */}
            {localStep === 'processing' && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center space-y-6"
              >
                <span className="material-symbols-outlined text-[48px] text-primary animate-spin">
                  progress_activity
                </span>
                <div className="space-y-2">
                  <h3 className="font-headline-md text-lg font-normal text-primary">Authorizing Transaction</h3>
                  <p className="font-body-md text-xs text-secondary font-light">
                    Securing payment protocols with single-source token gateways...
                  </p>
                </div>
                <div className="w-40 h-[1px] bg-primary/10 relative overflow-hidden">
                  <div
                    className="h-full bg-[#7A827A] transition-all duration-[2000ms] ease-out"
                    style={{ width: `${progressWidth}%` }}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Purchase Successful Invoice summary */}
            {localStep === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 20 }}
                className="flex flex-col items-center justify-center text-center space-y-6"
              >
                <span className="material-symbols-outlined text-[52px] text-accent-sage animate-bounce block">
                  check_circle
                </span>
                
                <div className="space-y-2">
                  <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-[0.2em] font-semibold block">
                    Transaction Complete
                  </span>
                  <h3 className="font-headline-md text-xl font-normal text-primary">Thank you for your order.</h3>
                  <p className="font-body-md text-xs text-secondary max-w-xs font-light leading-relaxed">
                    Your objects have been registered at Kyoto Atelier. An invoice key has been transmitted.
                  </p>
                </div>

                <div className="border border-primary/10 p-4 bg-[#F2F1ED] w-full text-left space-y-1 font-mono text-[10px] text-secondary">
                  <div>KEY: LF-{Math.floor(Math.random() * 900000) + 100000}</div>
                  <div>SHIP TO: {shippingName}</div>
                  <div>EST. DELIVERY: 4-6 Atelier Days</div>
                </div>

                <button
                  onClick={handleCloseCheckout}
                  className="w-full bg-[#1A1A1A] hover:bg-[#7A827A] text-[#FBFBF9] py-3.5 font-label-md text-xs uppercase tracking-widest transition-colors duration-300 border-0 focus-visible:outline-none"
                  style={{ borderRadius: '0px' }}
                >
                  Continue Shopping →
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
