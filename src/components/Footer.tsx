import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to La Forêt reflections.');
  };

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="w-full py-24 px-margin-mobile md:px-margin-desktop bg-tertiary text-on-tertiary font-light">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-gutter font-light">
        {/* Brand & Newsletter */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <button
              onClick={(e) => handleNavClick('', e)}
              className="font-headline-lg text-headline-lg mb-8 text-white flex items-center justify-start border-0 bg-transparent p-0 cursor-pointer outline-none"
            >
              <Logo className="h-9 w-9 mr-2" invert={true} />
              <span>La Forêt</span>
            </button>
            <p className="font-body-md text-on-tertiary/60 mb-10 max-w-sm font-light leading-relaxed">
              Join our quiet community. Receive occasional reflections on design, architecture, and new object releases.
            </p>
            <form onSubmit={handleSubmit} className="flex items-end gap-0 max-w-md group">
              <input
                className="bg-transparent border-0 border-b border-on-tertiary/40 focus:ring-0 focus:border-on-tertiary text-on-tertiary w-full pb-3 font-body-md placeholder:text-on-tertiary/30 transition-all outline-none"
                placeholder="Email Address"
                type="email"
                required
              />
              <button
                type="submit"
                className="border-b border-on-tertiary/40 px-6 pb-3 font-label-md text-label-md uppercase tracking-widest hover:text-white hover:border-on-tertiary transition-all font-semibold"
              >
                Join
              </button>
            </form>
          </div>
          <div className="mt-16 md:mt-0 space-y-1.5">
            <p className="font-label-sm text-label-sm text-on-tertiary/40">© 2026 La Forêt. All rights reserved.</p>
            <p className="font-label-sm text-label-sm text-on-tertiary/30">© 2026 AADHITYA S</p>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 md:col-start-8">
          <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-white mb-8">Navigation</h4>
          <ul className="space-y-4">
            <li>
              <button onClick={(e) => handleNavClick('', e)} className="font-body-md text-on-tertiary/60 hover:text-white transition-colors text-left border-0 bg-transparent p-0 cursor-pointer outline-none">
                Collection
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick('objects', e)} className="font-body-md text-on-tertiary/60 hover:text-white transition-colors text-left border-0 bg-transparent p-0 cursor-pointer outline-none">
                Objects
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick('about', e)} className="font-body-md text-on-tertiary/60 hover:text-white transition-colors text-left border-0 bg-transparent p-0 cursor-pointer outline-none">
                About
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick('journal', e)} className="font-body-md text-on-tertiary/60 hover:text-white transition-colors text-left border-0 bg-transparent p-0 cursor-pointer outline-none">
                Journal
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick('case-study', e)} className="font-body-md text-on-tertiary/60 hover:text-white transition-colors text-left border-0 bg-transparent p-0 cursor-pointer outline-none">
                Case Study
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick('design-system', e)} className="font-body-md text-on-tertiary/60 hover:text-white transition-colors text-left border-0 bg-transparent p-0 cursor-pointer outline-none">
                Design System
              </button>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-3">
          <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-white mb-8">Service</h4>
          <ul className="space-y-4">
            <li>
              <button onClick={(e) => handleNavClick('privacy', e)} className="font-body-md text-on-tertiary/60 hover:text-white transition-colors text-left border-0 bg-transparent p-0 cursor-pointer outline-none">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick('terms', e)} className="font-body-md text-on-tertiary/60 hover:text-white transition-colors text-left border-0 bg-transparent p-0 cursor-pointer outline-none">
                Terms of Service
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick('shipping', e)} className="font-body-md text-on-tertiary/60 hover:text-white transition-colors text-left border-0 bg-transparent p-0 cursor-pointer outline-none">
                Shipping &amp; Returns
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick('contact', e)} className="font-body-md text-on-tertiary/60 hover:text-white transition-colors text-left border-0 bg-transparent p-0 cursor-pointer outline-none">
                Contact
              </button>
            </li>
          </ul>
          <div className="mt-12 flex gap-6">
            <button
              onClick={(e) => handleNavClick('instagram', e)}
              className="text-on-tertiary/40 hover:text-white border-0 bg-transparent p-0 cursor-pointer outline-none"
            >
              <span className="font-label-sm text-label-sm uppercase tracking-widest">Instagram</span>
            </button>
            <button
              onClick={(e) => handleNavClick('pinterest', e)}
              className="text-on-tertiary/40 hover:text-white border-0 bg-transparent p-0 cursor-pointer outline-none"
            >
              <span className="font-label-sm text-label-sm uppercase tracking-widest">Pinterest</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
