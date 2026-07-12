export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string; // main thumbnail
  images: string[]; // detail gallery
  alt: string;
  category: 'outerwear' | 'trousers' | 'knitwear' | 'apparel' | 'accessories';
  collection: 'Silence' | 'Atelier' | 'Brutalist' | 'Machiya';
  materials: string;
  colorVariants: string[];
  sizing: string;
  details: string[];
  availability: boolean;
  story: string;
  sustainability: string;
}

export const products: Product[] = [
  // ==================== OUTERWEAR (9 Products) ====================
  {
    id: "01",
    name: "Structural Blazer",
    price: 340,
    category: "outerwear",
    collection: "Atelier",
    description: "Close-up architectural detail of a structural blazer in heavy black linen. The focus is on a single, perfectly executed lapel edge and the subtle texture of the sustainable fabric.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpRR5MSf6-XLJ--c6KlJyXPfa3287xxxCE7W6MmBUOB4G7fV-wwCTy4NkMacnsgl5xCsLKWPvqECO6o0uxE8aJp4lrKd-k-A52EMnsxTfDpXFNyCcoGIo18dU0EjiaUQ2z0i1yHwzqDsUo_LWkOMiePynOugq5pvdjnUIZAUmZZrJFaUD6QD7EJNduZlueaYeiNuf8u1p-0P7ghtciQiSkB0ziyd1CUUwRReakyETnzvq4tZanaF1EKHSnIH1AeTS8NZsuBVqfB0U",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpRR5MSf6-XLJ--c6KlJyXPfa3287xxxCE7W6MmBUOB4G7fV-wwCTy4NkMacnsgl5xCsLKWPvqECO6o0uxE8aJp4lrKd-k-A52EMnsxTfDpXFNyCcoGIo18dU0EjiaUQ2z0i1yHwzqDsUo_LWkOMiePynOugq5pvdjnUIZAUmZZrJFaUD6QD7EJNduZlueaYeiNuf8u1p-0P7ghtciQiSkB0ziyd1CUUwRReakyETnzvq4tZanaF1EKHSnIH1AeTS8NZsuBVqfB0U",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhn7Bp6y5lD4vqqH_jgvsGo9_gMjAssQBzNZHmfGfh6mz7DNHMsSUAg-AFkrz7Yf4Qy4bulq6PKgBOvovWne7w4aJov5LPDyqTo1zsY4XwH_GVo7XpjlJyYehncJ0-tNi7Y5Tm-GWf6j9es3Q1bCjhWI-uUvoKNq5Et4aWO20TCgg2OcbFEtBiCUKwCZqeONU5_J9SRiYAVCTPv7Y8gri00vp8SYpFq0YIKB2brSL8hZGdfGE4pGNTDNehNzAYOsdS6TwqY6kyxKE",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGiaSm0IoZouvs1zzSf6EVh7mWzqn7_NfyUOpcGqFgToolxUlyxYdohh0gXMg-dWoqtVbtjpcBgE5KP5SrQwDkYHb7lQ6cS6aGPr3_KrdFIRGnPlcAATKLmOueeu2raTj3YGMmTuhiv_rk_MiGIz1e4mDuCYBdYFDCRzysFqpsx52T5d2AlYTnrm3_q8qbQyn2d4FlXbU7BDGTJ1Nbnsap02FHdRHCsykrcmFZapG62YxjRvTsxEfos9afuiiGbr-ym11YMdz4dAI"
    ],
    alt: "Structural blazer detail",
    materials: "100% Belgian Organic Linen, treated with charcoal dye.",
    colorVariants: ["Charcoal", "Natural Off-White"],
    sizing: "Relaxed fit. Fits true to size.",
    details: ["Zero-waste layout", "Horn button details", "Kyoto atelier hand-stitched detailing"],
    availability: true,
    story: "Drafted with strict geometric layouts, this blazer highlights a clean lapel edge and raw linen texture.",
    sustainability: "Dyed locally using natural charcoal pigment wash, consuming 60% less water than average industrial runs."
  },
  {
    id: "07",
    name: "Brutalist Trench",
    price: 490,
    category: "outerwear",
    collection: "Brutalist",
    description: "An oversized double-breasted trench coat constructed from structured organic cotton canvas. Omits traditional straps for a clean, hard-edge profile.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Brutalist trench coat",
    materials: "100% Recycled Cotton Canvas, water-resistant starch coating.",
    colorVariants: ["Stone Grey", "Midnight Black"],
    sizing: "Oversized silhouette. Order one size down for a tailored look.",
    details: ["Double-breasted flat closure", "Storm flap detail", "Extra deep welt pockets"],
    availability: true,
    story: "Inspired by the architectural concrete forms of Kenzo Tange, this trench offers absolute structural protection.",
    sustainability: "Constructed using post-consumer recycled workwear canvas, preserving old materials."
  },
  {
    id: "08",
    name: "Machiya Cape",
    price: 520,
    category: "outerwear",
    collection: "Machiya",
    description: "A heavy raw wool cape coat inspired by traditional Kyoto winter silhouettes. Features single-seam origami folding overlays.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Machiya wool cape",
    materials: "80% Traceable Merino Wool, 20% Organic Flax Linen.",
    colorVariants: ["Ash", "Oatmeal"],
    sizing: "One size fits all. Fluid draped silhouette.",
    details: ["Folded neck overlay", "Hidden toggle closure", "Hand-spun edge stitching"],
    availability: true,
    story: "Paying tribute to Kyoto Machiyas, this cape wraps around the body with absolute geometric elegance.",
    sustainability: "Wool is sourced from certified regenerative family farms in Tasmania."
  },
  {
    id: "09",
    name: "Silence Shell Jacket",
    price: 360,
    category: "outerwear",
    collection: "Silence",
    description: "Ultra-light structural shell jacket engineered for wind resistance. Completely seamless assembly.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Silence shell jacket",
    materials: "100% Biodegradable Nylon derived from castor oil.",
    colorVariants: ["Off-Black", "Sage"],
    sizing: "Regular structural fit.",
    details: ["Taped seams", "Minimalist stand collar", "Laser-cut ventilation holes"],
    availability: true,
    story: "Designed to exist silently, omitting all zipper pulls and tags for an uninterrupted active lifestyle.",
    sustainability: "Constructed with castor oil biopolymers, fully avoiding petroleum-based synthetics."
  },
  {
    id: "10",
    name: "Atelier Work Jacket",
    price: 310,
    category: "outerwear",
    collection: "Atelier",
    description: "Boxy utilitarian coat inspired by classic work shirts. Highlighted by high-contrast top-stitching.",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Atelier work jacket",
    materials: "100% Organic Indigo Hemp Denim.",
    colorVariants: ["Indigo Wash", "Ash Wash"],
    sizing: "Relaxed boxy cut.",
    details: ["Reinforced patch pockets", "Flat collar", "Hand-hammered copper rivets"],
    availability: true,
    story: "Designed for artists and creators, built to carry brushes, notebooks, and tools with zero bulk.",
    sustainability: "Colored using natural indigo fermentation vats, free from chemical synthetic fixatives."
  },
  {
    id: "11",
    name: "Minimalist Windbreaker",
    price: 290,
    category: "outerwear",
    collection: "Silence",
    description: "Compressible water-resistant windbreaker featuring hidden closure compartments and raw edge lines.",
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Minimalist windbreaker",
    materials: "100% Recycled Polyester from ocean waste.",
    colorVariants: ["Sand", "Olive"],
    sizing: "Regular active fit.",
    details: ["Concealed hood panel", "Elastic internal tabs", "No visible branding"],
    availability: true,
    story: "A pure companion for rainy mornings, blending into city horizons without noise.",
    sustainability: "Diverts ocean plastics into long-lasting outerwear weaves."
  },
  {
    id: "12",
    name: "Brutalist Wool Overcoat",
    price: 580,
    category: "outerwear",
    collection: "Brutalist",
    description: "An ankle-length duster coat in heavy structured wool. Features an absolute straight drop shoulder line.",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Brutalist overcoat",
    materials: "100% Recycled Cashmere Wool blend.",
    colorVariants: ["Charcoal Noir", "Espresso"],
    sizing: "Extra long. Fits true to size.",
    details: ["Raw raw-cut lapel", "Rear central vent", "Internal passport slot"],
    availability: true,
    story: "Constructed to echo concrete columns, creating a dramatic, heavy profile on cold winter avenues.",
    sustainability: "Made from upcycled post-consumer cashmere knitwear fibers."
  },
  {
    id: "13",
    name: "Machiya Haori Coat",
    price: 380,
    category: "outerwear",
    collection: "Machiya",
    description: "A mid-length lightweight outerwear option modeled after Japanese Haori robes, featuring flat sleeve drapes.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Machiya haori coat",
    materials: "50% Hemp, 50% Organic Cotton.",
    colorVariants: ["Silt Brown", "Natural Cream"],
    sizing: "Relaxed open-front fit.",
    details: ["Open front construction", "Square sleeve drapes", "Atelier inner label"],
    availability: true,
    story: "An easy layering piece that captures the calm spirit of traditional tea ceremonies.",
    sustainability: "Constructed utilizing raw hemp yarn, requiring zero chemical pesticides during growth."
  },
  {
    id: "14",
    name: "Cocoon Duvet Coat",
    price: 460,
    category: "outerwear",
    collection: "Silence",
    description: "Insulated coat filled with natural kapok fibers, providing warm cocoon shelter with zero bulk.",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Cocoon duvet coat",
    materials: "100% Recycled Nylon, Kapok natural fiber fill.",
    colorVariants: ["Pumice", "Slate Black"],
    sizing: "Oversized fit. Cocoon shape.",
    details: ["Magnetic snap buttons", "Stitchless baffles", "Drawstring hemline"],
    availability: true,
    story: "Created as a sanctuary for freezing commutes. Quiet, warm, and highly breathable.",
    sustainability: "Fitted with Kapok seed pod fluff, completely replacing animal-derived feathers."
  },

  // ==================== TROUSERS (9 Products) ====================
  {
    id: "02",
    name: "Column Trouser",
    price: 280,
    category: "trousers",
    collection: "Atelier",
    description: "Minimalist trousers displayed as a geometric form, folded precisely against a light cream concrete backdrop. The fabric is a soft, organic cotton-hemp blend in a muted stone color.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdss5TBTALm25B5dPIonxKrtPCuDpHp1F74KU_BmCNw1XGJf2tDkPbs5VP5a-zIct5XfGljHCdDrveufgfbOkM8VG90agtoHJ4GX0v2gYoACSucvM6C6VOXt4p_8AfebRNFbnw4G6tHU0oZusfoP5l2ISX8gVHso93u211Xvel4DVZOb4zGB6cjgQ8yqX9eGtS_NJD9wUWGptSrDKvBsHeBkdaNSlYyGGZHfL54lQb-2ehBQpFOZ09P0CSR0B2VPErjYb95MJ625w",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdss5TBTALm25B5dPIonxKrtPCuDpHp1F74KU_BmCNw1XGJf2tDkPbs5VP5a-zIct5XfGljHCdDrveufgfbOkM8VG90agtoHJ4GX0v2gYoACSucvM6C6VOXt4p_8AfebRNFbnw4G6tHU0oZusfoP5l2ISX8gVHso93u211Xvel4DVZOb4zGB6cjgQ8yqX9eGtS_NJD9wUWGptSrDKvBsHeBkdaNSlYyGGZHfL54lQb-2ehBQpFOZ09P0CSR0B2VPErjYb95MJ625w"
    ],
    alt: "Column trouser folded precisely",
    materials: "60% Organic Cotton, 40% Raw Hemp, earth-derived pigment wash.",
    colorVariants: ["Stone Grey", "Ash Black"],
    sizing: "Straight structural cut. High-waisted profile. Fits true to size.",
    details: ["No-pleat flat front profile", "Concealed side seam pockets", "Adjustable internal waist tabs"],
    availability: true,
    story: "Designed as an architectural column, these pants hang with absolute vertical precision.",
    sustainability: "Dyed utilizing local silt mud pigments, minimizing chemical dyes."
  },
  {
    id: "15",
    name: "Atelier Cargo Trouser",
    price: 260,
    category: "trousers",
    collection: "Atelier",
    description: "Utilitarian cargo trousers featuring flat-stitched side pockets and structural knee paneling.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Atelier cargo trouser",
    materials: "100% Recycled Cotton Twill.",
    colorVariants: ["Sage Green", "Charcoal"],
    sizing: "Straight, slightly relaxed fit.",
    details: ["Concealed utility pockets", "Reinforced seat panel", "Button-fly closure"],
    availability: true,
    story: "Built to provide the durability needed in the design studio while maintaining a minimalist silhouette.",
    sustainability: "Made from pre-consumer cotton remnants processed at local Italian mills."
  },
  {
    id: "16",
    name: "Silence Wide Trousers",
    price: 310,
    category: "trousers",
    collection: "Silence",
    description: "Flowing trousers in lightweight linen-tencel, hanging with absolute fluidity for zero restriction.",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Silence wide trousers",
    materials: "50% Organic Flax Linen, 50% Tencel Lyocell.",
    colorVariants: ["Natural Linen", "Oatmeal"],
    sizing: "Wide-leg, loose fit. Elastic waist back.",
    details: ["Concealed front zip", "Wide hem cuff", "Breathable organic weave"],
    availability: true,
    story: "A study on negative space. The fabric drops cleanly, letting air move freely as you walk.",
    sustainability: "Tencel fibers are harvested from sustainably managed eucalyptus forests."
  },
  {
    id: "17",
    name: "Brutalist Denim Trouser",
    price: 240,
    category: "trousers",
    collection: "Brutalist",
    description: "Heavy raw denim jeans with a wide, straight-cut profile and a visual zero-wash finish.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Brutalist denim trouser",
    materials: "100% Selvedge Organic Cotton Denim.",
    colorVariants: ["Raw Indigo", "Dry White"],
    sizing: "Stiff, straight leg. Will soften over time.",
    details: ["Traditional selvedge detail", "Silver-alloy rivets", "Atelier back-patch"],
    availability: true,
    story: "An homage to raw concrete textures, intended to break in and patina uniquely with the wearer's movements.",
    sustainability: "Uses organic cotton dyed without hazardous synthetic sizing elements."
  },
  {
    id: "18",
    name: "Machiya Folded Trouser",
    price: 290,
    category: "trousers",
    collection: "Machiya",
    description: "Cropped, asymmetric wrap trousers featuring a folded front panel resembling traditional hakama pleats.",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Machiya folded trouser",
    materials: "70% Organic Cotton, 30% Mulberry Silk.",
    colorVariants: ["Sumy Black", "Earthy Sand"],
    sizing: "Relaxed cropped fit.",
    details: ["Asymmetrical front wrap", "Drawstring waist", "Hidden coin compartment"],
    availability: true,
    story: "Brings traditional Japanese patterns into modern tailoring for functional daily movements.",
    sustainability: "Stitched with zero synthetic threads, fully biodegradable at its end of life."
  },
  {
    id: "19",
    name: "Pleated Column Pant",
    price: 270,
    category: "trousers",
    collection: "Brutalist",
    description: "Trousers featuring sharp, structural heat-pressed vertical pleats that maintain their shape permanently.",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Pleated column pant",
    materials: "100% Recycled Polyester Pleat Weave.",
    colorVariants: ["Slate", "Off-White"],
    sizing: "Straight elasticized fit.",
    details: ["Permanent vertical pleats", "Concealed waistband", "Quick-dry structure"],
    availability: true,
    story: "Inspired by fluted stone columns, this garment offers geometric texture that never wrinkles.",
    sustainability: "Manufactured using clean post-industrial polyester, reducing global plastic waste."
  },
  {
    id: "20",
    name: "Sartorial Culotte",
    price: 280,
    category: "trousers",
    collection: "Atelier",
    description: "An elegant wide-leg cropped culotte pant in structured linen, designed for fluid studio wear.",
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Sartorial culotte",
    materials: "100% Belgian Flax Linen.",
    colorVariants: ["Black Walnut", "Wheat"],
    sizing: "Wide-leg, cropped length.",
    details: ["Double welt back pockets", "Hidden zip fly", "Flat front finish"],
    availability: true,
    story: "Crafted for the active designer, providing the comfort of a skirt with the utility of trousers.",
    sustainability: "Flax linen requires no irrigation and absorbs carbon dioxide during growth."
  },
  {
    id: "21",
    name: "Architectural Short",
    price: 180,
    category: "trousers",
    collection: "Silence",
    description: "Tailored minimalist shorts featuring clean raw edges and a structured organic hemp silhouette.",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Architectural short",
    materials: "100% Organic Raw Hemp.",
    colorVariants: ["Desert Clay", "Natural Grey"],
    sizing: "Mid-rise, sits above knee.",
    details: ["Seamless side silhouette", "Button tab waistband", "Linen pocket lining"],
    availability: true,
    story: "A summer staple stripped of all decorative stitching to focus on pure structural lines.",
    sustainability: "Hemp requires only rainwater to grow, preserving global groundwater reserves."
  },
  {
    id: "22",
    name: "Kyoto Tailored Trouser",
    price: 320,
    category: "trousers",
    collection: "Machiya",
    description: "Fine structured trousers constructed from a summer wool and silk blend, draped in traditional Kyoto cuts.",
    image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Kyoto tailored trouser",
    materials: "60% Organic Summer Wool, 40% Raw Silk.",
    colorVariants: ["Charcoal Noir", "Oat"],
    sizing: "Tailored slim-straight fit.",
    details: ["Belt-loop free clean waist", "Hand-stitched cuffs", "Real horn closures"],
    availability: true,
    story: "A quiet expression of tailoring excellence, blending raw silk textures with structured wool drapes.",
    sustainability: "Wool is certified organic and processed using local non-toxic cleaning washes."
  },

  // ==================== KNITWEAR (9 Products) ====================
  {
    id: "03",
    name: "Sculptural Knit",
    price: 410,
    category: "knitwear",
    collection: "Silence",
    description: "An oversized sculptural knit sweater in ivory wool, captured from a side profile to emphasize its architectural drape. The sweater is set against a dark ebony wood background, creating high contrast.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxY-2a09E3NVufAzWPgGXao70cl7XzXNXn83RBmGZl7OdKH8svZd60gk4kCQk5qmN5Ih07R9uSywEbATegQGZG1dJE-aIfkpw9ZNBf4fczsief5G_ZnuNRGLEDnSswVlduESKf4kxlpiHby_2slZNPWBys-zyIjc48V6_xMaXvKYhtA_P8vZxW5B6gitLUxYt5l7ZLB4AoEUoZDKz-IIylcvBCbp5aeA6XOxylV4E4CBZXcB6cGTqOtH3HlFFBHO9RpPjCpACQRwA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxY-2a09E3NVufAzWPgGXao70cl7XzXNXn83RBmGZl7OdKH8svZd60gk4kCQk5qmN5Ih07R9uSywEbATegQGZG1dJE-aIfkpw9ZNBf4fczsief5G_ZnuNRGLEDnSswVlduESKf4kxlpiHby_2slZNPWBys-zyIjc48V6_xMaXvKYhtA_P8vZxW5B6gitLUxYt5l7ZLB4AoEUoZDKz-IIylcvBCbp5aeA6XOxylV4E4CBZXcB6cGTqOtH3HlFFBHO9RpPjCpACQRwA"
    ],
    alt: "Sculptural knit sweater side profile",
    materials: "100% Traceable New Zealand Merino Wool.",
    colorVariants: ["Ivory Wool", "Silt Black"],
    sizing: "Oversized, cocoon silhouette. Take your normal size.",
    details: ["5-gauge knit construction", "Ribbed mock collar detailing", "Extended sleeve silhouette"],
    availability: true,
    story: "Designed with a heavy knit texture, this piece hangs like a cocoon around the wearer.",
    sustainability: "Manufactured using fully traceable and ethically sheared merino wool fibers."
  },
  {
    id: "23",
    name: "Grid Rib Sweater",
    price: 380,
    category: "knitwear",
    collection: "Brutalist",
    description: "A crewneck sweater featuring a raised, architectural grid texture pattern in a structured cotton-linen blend.",
    image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Grid rib sweater",
    materials: "55% Organic Cotton, 45% Organic Linen.",
    colorVariants: ["Cement", "Soot"],
    sizing: "Regular fit, boxy shoulders.",
    details: ["Architectural rib structure", "Clean seamless cuffs", "Structured mid-weight knit"],
    availability: true,
    story: "Echoes the rhythm of modernist architectural facade patterns, providing a heavy structural look.",
    sustainability: "Knit from organic agricultural plant fibers, fully omitting synthetic blends."
  },
  {
    id: "24",
    name: "Atelier Knit Vest",
    price: 290,
    category: "knitwear",
    collection: "Atelier",
    description: "A sleeveless, deep V-neck knit vest in raw carded wool, designed for versatile layering.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Atelier knit vest",
    materials: "100% Unrefined Carded Shetland Wool.",
    colorVariants: ["Oatmeal", "Moss Green"],
    sizing: "Relaxed layering fit.",
    details: ["Deep ribbed V-neckline", "Raw textured carded weave", "Stepped split hemline"],
    availability: true,
    story: "A study on simple layering utility, preserving the natural oils and smell of raw fleece wool.",
    sustainability: "Carded Shetland Wool is untreated, using zero toxic synthetic detergents."
  },
  {
    id: "25",
    name: "Machiya Knit Cardigan",
    price: 430,
    category: "knitwear",
    collection: "Machiya",
    description: "A heavy ribbed knit cardigan featuring a flat kimono collar and clean tie-wrap closure.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Machiya knit cardigan",
    materials: "70% Merino Wool, 30% Raw Organic Silk.",
    colorVariants: ["Ash Noir", "Sandstone"],
    sizing: "Relaxed open-front fit with waist belt.",
    details: ["Kimono collar line", "Waffle knit texture panels", "Detachable knit belt"],
    availability: true,
    story: "Inspired by traditional Kyoto robes, combining heavy Tasmanian wool warmth with natural silk luster.",
    sustainability: "Dyes are obtained from natural walnut husks and logwood woodbark."
  },
  {
    id: "26",
    name: "Silence Carded Crew",
    price: 370,
    category: "knitwear",
    collection: "Silence",
    description: "A lightweight, raw-edge carded sweater in fine alpaca fleece, offering absolute cloud-like soft warmth.",
    image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Silence carded crew",
    materials: "100% Baby Alpaca Wool.",
    colorVariants: ["Chalk White", "Mist Grey"],
    sizing: "Regular fit, slightly cropped hem.",
    details: ["Raw unfinished neckline", "Seamless circular knit", "Slightly sheer structure"],
    availability: true,
    story: "A representation of silence. The baby alpaca fibers are incredibly light, feeling like a warm second skin.",
    sustainability: "Alpacas are sheared humanely, preserving small traditional Peruvian herding communities."
  },
  {
    id: "27",
    name: "Brutalist Cable Knit",
    price: 450,
    category: "knitwear",
    collection: "Brutalist",
    description: "An extra-heavy turtleneck sweater featuring thick, structured geometrical block cable patterns.",
    image: "https://images.unsplash.com/photo-1608063615781-e5ef8b221d1d?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1608063615781-e5ef8b221d1d?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Brutalist cable knit",
    materials: "100% Peruvian Highland Wool.",
    colorVariants: ["Basalt Grey", "Slate Black"],
    sizing: "Boxy, structured fit. High neck.",
    details: ["Folded double turtleneck", "Block cable geometry", "Reinforced cuffs"],
    availability: true,
    story: "Brings structural concrete designs into knitwear. The heavy highland wool keeps its geometric shape.",
    sustainability: "Wool is spun in wind-powered Peruvian mills using organic practices."
  },
  {
    id: "28",
    name: "Atelier Waffle Pullover",
    price: 330,
    category: "knitwear",
    collection: "Atelier",
    description: "A mid-weight waffle knit pullover sweater in organic cotton, designed for easy daily wear in the workshop.",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Atelier waffle pullover",
    materials: "100% Organic GOTS Cotton.",
    colorVariants: ["Oatmeal", "Navy Slate"],
    sizing: "Regular boxy fit.",
    details: ["Tactile waffle weave", "Stitched shoulder panels", "Double-thick neck rib"],
    availability: true,
    story: "A clean utility knit that balances insulating waffle pockets with hard-wearing cotton threads.",
    sustainability: "Uses GOTS-certified cotton, guaranteeing fair labor and organic growing processes."
  },
  {
    id: "29",
    name: "Silence Silk Turtleneck",
    price: 390,
    category: "knitwear",
    collection: "Silence",
    description: "A fine-gauge rib knit turtleneck sweater in raw mulberry silk, offering a light insulating second skin.",
    image: "https://images.unsplash.com/photo-1616606103915-dea7be788566?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1616606103915-dea7be788566?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Silence silk turtleneck",
    materials: "100% Raw Mulberry Silk.",
    colorVariants: ["Off-White", "Onyx Black"],
    sizing: "Slim-fit. Highly elastic.",
    details: ["18-gauge fine knit", "Seamless flatlock joins", "Insulating high collar"],
    availability: true,
    story: "A minimalist base layer designed to layer under heavy blazers with zero visual friction.",
    sustainability: "Raw silk is sourced from family-run farms that avoid chemical pesticide exposures."
  },
  {
    id: "30",
    name: "Kyoto Indigo Cardigan",
    price: 460,
    category: "knitwear",
    collection: "Machiya",
    description: "A hand-knit buttoned cardigan in heavy organic cotton, dyed repeatedly in Japanese natural indigo vats.",
    image: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Kyoto indigo cardigan",
    materials: "100% Organic Cotton yarn, natural indigo dye.",
    colorVariants: ["Fermented Indigo"],
    sizing: "Regular tailored knit fit.",
    details: ["Real wood buttons", "Hand-knit seed stitch panels", "Deep blue indigo shade"],
    availability: true,
    story: "Each cardigan is hand-dipped 12 times in active indigo vats in Kyoto, resulting in a living, fading blue color.",
    sustainability: "Dyeing process is 100% natural, using traditional plant fermentation techniques."
  },

  // ==================== APPAREL (9 Products) ====================
  {
    id: "04",
    name: "Minimal Linen Shirt",
    price: 210,
    category: "apparel",
    collection: "Atelier",
    description: "A tailored, ultra-clean button-up shirt in organic cream linen. The collar is flat and minimal, omitting all breast pockets to achieve a pure architectural chest line.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Minimal linen shirt in organic cream",
    materials: "100% Organic Flax Linen.",
    colorVariants: ["Cream Linen", "Charcoal Slate"],
    sizing: "Regular fit. Fits true to size.",
    details: ["Hidden button placket", "Band collar construction", "Mother of pearl minimalist buttons"],
    availability: true,
    story: "Omits all pockets and collars for a pure, clean architectural silhouette.",
    sustainability: "Made from raw organic flax linen woven with zero water waste."
  },
  {
    id: "31",
    name: "Brutalist Poplin Shirt",
    price: 220,
    category: "apparel",
    collection: "Brutalist",
    description: "Crisp cotton poplin shirt featuring a hidden button placket, sharp angular cuffs, and a structured panel collar.",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Brutalist poplin shirt",
    materials: "100% Long-Staple Organic Cotton Poplin.",
    colorVariants: ["Paper White", "Steel Grey"],
    sizing: "Boxy structural fit.",
    details: ["Hidden front placket", "Asymmetrical hemline", "Extra-wide cuffs"],
    availability: true,
    story: "Designed with straight seams and sharp cuffs, referencing the geometric plans of Tadao Ando.",
    sustainability: "Processed using zero formaldehyde or chemical starches during weaving."
  },
  {
    id: "32",
    name: "Machiya Tunic",
    price: 260,
    category: "apparel",
    collection: "Machiya",
    description: "An elongated tunic shirt in light cotton-hemp featuring high side slits and a clean wrap collar.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Machiya tunic",
    materials: "60% Organic Cotton, 40% Raw Hemp.",
    colorVariants: ["Sand", "Ink Black"],
    sizing: "Longline relaxed fit.",
    details: ["High side ventilation slits", "Wrap kimono collar", "Concealed chest pocket"],
    availability: true,
    story: "Combines traditional Japanese workplace uniforms with a clean, modern longline drape.",
    sustainability: "Woven on small vintage shuttle looms, maintaining low-impact energy footprint."
  },
  {
    id: "33",
    name: "Silence Heavy Tee",
    price: 90,
    category: "apparel",
    collection: "Silence",
    description: "A heavyweight t-shirt constructed from dense organic cotton jersey, dropping with clean vertical lines.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Silence heavy tee",
    materials: "100% Organic GOTS Heavy Cotton (300gsm).",
    colorVariants: ["Oatmeal", "Off-Black", "Sage"],
    sizing: "Boxy, dropped shoulders.",
    details: ["Thick ribbed mock neck", "Blind-stitched hems", "Zero branding"],
    availability: true,
    story: "A study on structural t-shirts. The heavy cotton drops straight down, avoiding folding lines.",
    sustainability: "Certified GOTS organic cotton, manufactured using 100% wind energy."
  },
  {
    id: "34",
    name: "Atelier Smock Shirt",
    price: 240,
    category: "apparel",
    collection: "Atelier",
    description: "A pullover smock shirt in durable cotton canvas featuring deep storage compartments for atelier use.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Atelier smock shirt",
    materials: "100% Cotton Duck Canvas.",
    colorVariants: ["Tobacco", "Navy Slate"],
    sizing: "Relaxed boxy fit.",
    details: ["Pullover half-zip", "Front kangaroo pocket", "Reinforced elbow patches"],
    availability: true,
    story: "Inspired by French painters' shirts, offering hard-wearing protection for hands-on atelier crafts.",
    sustainability: "Colored using natural walnut peel solutions, free from chemical synthetic fixatives."
  },
  {
    id: "35",
    name: "Silence Silk Dress",
    price: 340,
    category: "apparel",
    collection: "Silence",
    description: "A flowing ankle-length slip dress in sand-washed mulberry silk, draped with clean minimal seams.",
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Silence silk dress",
    materials: "100% Sand-washed Mulberry Silk.",
    colorVariants: ["Pumice", "Midnight Black"],
    sizing: "Fluid straight fit.",
    details: ["Minimal spaghetti straps", "Subtle V-neckline", "Ankle length with side slits"],
    availability: true,
    story: "Designed to glide silently over the body, capturing soft light with a velvety sand-washed finish.",
    sustainability: "Mulberry silk cocoons are processed using local rainwater filtration systems."
  },
  {
    id: "36",
    name: "Brutalist Asymmetrical Dress",
    price: 320,
    category: "apparel",
    collection: "Brutalist",
    description: "A structured, geometric midi dress featuring asymmetrical draping and a sharp wrap panel design.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Brutalist dress",
    materials: "80% Organic Cotton, 20% Ramie.",
    colorVariants: ["Concrete Grey", "Charcoal Noir"],
    sizing: "Midi length. Tailored wrap.",
    details: ["Asymmetric wrap front", "Concealed side zipper", "Deep side slit"],
    availability: true,
    story: "A garment that forms structural angles, inspired by brutalist geometry and concrete architectural layers.",
    sustainability: "Fitted with organic ramie, a strong natural fiber requiring zero artificial watering."
  },
  {
    id: "37",
    name: "Machiya Wrap Dress",
    price: 290,
    category: "apparel",
    collection: "Machiya",
    description: "A kimono-style linen dress featuring wide sleeves and an adjustable waist tie, displaying clean drapes.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Machiya wrap dress",
    materials: "100% Organic Belgian Linen.",
    colorVariants: ["Logwood Grey", "Wheat"],
    sizing: "Relaxed wrap fit.",
    details: ["Kimono style wide sleeves", "Adjustable inner waist tie", "Deep patch pockets"],
    availability: true,
    story: "A simple, single-seam wrap dress designed to offer elegant breathing room for daily ceremonies.",
    sustainability: "Linen fibers are spun using traditional renewable energy looms in Flanders."
  },
  {
    id: "38",
    name: "Minimalist Utility Vest",
    price: 190,
    category: "apparel",
    collection: "Atelier",
    description: "A tailored utility vest in heavy hemp duck canvas featuring asymmetrical pockets for tools.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Minimalist utility vest",
    materials: "100% Organic Raw Hemp Canvas.",
    colorVariants: ["Tan", "Off-Black"],
    sizing: "Regular layering fit.",
    details: ["Asymmetrical pockets", "Brass alloy snap buttons", "Strap attachment loop"],
    availability: true,
    story: "A utility vest stripped of tactical noise, offering clean storage lines for architectural workflows.",
    sustainability: "Hemp canvas is untreated, allowing the natural color variations to shine."
  },

  // ==================== ACCESSORIES (9 Products) ====================
  {
    id: "05",
    name: "Atelier Slipper",
    price: 140,
    category: "accessories",
    collection: "Atelier",
    description: "Indoor atelier slippers constructed from raw vegetable-tanned leather. The design wraps around the foot in a single diagonal seam, matching the geometry of traditional origami folding.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Indoor atelier slippers constructed from raw vegetable-tanned leather",
    materials: "100% Organic Vegetable-Tanned Leather.",
    colorVariants: ["Raw Tan", "Charcoal Noir"],
    sizing: "Flexible sizing. Moulds to the shape of the foot.",
    details: ["Single-seam folded geometry", "Suede anti-slip sole", "Crafted by Kyoto artisans"],
    availability: true,
    story: "Modeled after origami folding structures, wrapping the foot in a single piece of leather.",
    sustainability: "Tanned using oak bark extract, completely avoiding chromium chemical baths."
  },
  {
    id: "06",
    name: "Studio Tote Bag",
    price: 190,
    category: "accessories",
    collection: "Atelier",
    description: "A large architectural carryall bag in heavy organic cotton canvas and raw leather detailing. Built to house portfolios, blueprints, and journals with zero sag.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Large architectural carryall bag in heavy organic cotton canvas",
    materials: "24oz Organic Cotton Canvas, Full-Grain Bridle Leather straps.",
    colorVariants: ["Off-White & Tan", "Slate Black & Black"],
    sizing: "45cm x 35cm x 15cm.",
    details: ["Structural reinforced base panel", "Internal padded sleeve for 16-inch laptops", "Bespoke copper hardware rivets"],
    availability: true,
    story: "Built to house portfolios and journals with absolute zero structural sag.",
    sustainability: "Constructed with GOTS organic cotton twill and copper rivets meant to endure generations."
  },
  {
    id: "39",
    name: "Silence Raw Scarf",
    price: 110,
    category: "accessories",
    collection: "Silence",
    description: "A wide, lightweight scarf in raw-cut merino wool gauze, offering warmth with zero weight.",
    image: "https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Silence raw scarf",
    materials: "100% Tasmanian Merino Wool Gauze.",
    colorVariants: ["Mist Grey", "Pumice"],
    sizing: "200cm x 80cm.",
    details: ["Fringed raw edge", "Lightweight gauze weave", "Atelier storage envelope"],
    availability: true,
    story: "A simple sheet of Tasmanian merino wool gauze, designed to wrap around the neck like morning mist.",
    sustainability: "TAS wool is sheared ethically, preserving animal-friendly practices."
  },
  {
    id: "40",
    name: "Brutalist Leather Belt",
    price: 90,
    category: "accessories",
    collection: "Brutalist",
    description: "A thick structural belt featuring a heavy, custom-cast raw brass square buckle, with zero visible seams.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Brutalist leather belt",
    materials: "Full-Grain English Bridle Leather, Sand-cast Brass buckle.",
    colorVariants: ["Black Walnut", "Saddle Tan"],
    sizing: "S, M, L options. 3.5cm width.",
    details: ["Square sand-cast buckle", "Hand-finished bevel edges", "Zero buckle stitching"],
    availability: true,
    story: "Constructed to reflect brutalist architectural fixings. Stiff, heavy, and extremely durable.",
    sustainability: "Tanned using oak extracts and finished with organic plant oils."
  },
  {
    id: "41",
    name: "Machiya Linen Hat",
    price: 80,
    category: "accessories",
    collection: "Machiya",
    description: "A minimal soft bucket hat constructed from heavy Belgian linen, offering breathable sun protection.",
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13ce35?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1534215754734-18e55d13ce35?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Machiya linen hat",
    materials: "100% Belgian Organic Linen.",
    colorVariants: ["Natural Linen", "Midnight Black"],
    sizing: "One size fits most.",
    details: ["Top-stitch detail brim", "Linen sweatband lining", "Fully compressible"],
    availability: true,
    story: "Inspired by Japanese agricultural field hats, refined into a clean bucket silhouette.",
    sustainability: "Belgian linen fibers are processed using zero chemical bleaches."
  },
  {
    id: "42",
    name: "Atelier Leather Journal",
    price: 70,
    category: "accessories",
    collection: "Atelier",
    description: "A refillable notebook cover in raw vegetable-tanned leather. Includes acid-free drawing paper pages.",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Atelier leather journal",
    materials: "Organic Leather, Acid-Free Recycled Paper.",
    colorVariants: ["Natural Leather", "Soot Black"],
    sizing: "A5 layout. 120 pages.",
    details: ["Refillable design", "Hand-stitched leather spine", "Acid-free drawing pages"],
    availability: true,
    story: "Designed to catalog sketch concepts, blueprints, and daily reflections in the design atelier.",
    sustainability: "Paper consists of 100% post-consumer recycled drawing fibers."
  },
  {
    id: "43",
    name: "Silence Silk Scarf",
    price: 130,
    category: "accessories",
    collection: "Silence",
    description: "A square silk scarf featuring a hand-rolled hem and a subtle geometric grid design print.",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Silence silk scarf",
    materials: "100% Habotai Mulberry Silk.",
    colorVariants: ["Natural Ivory", "Charcoal Grid"],
    sizing: "90cm x 90cm.",
    details: ["Hand-rolled edges", "Printed grid layout", "Velvety soft feel"],
    availability: true,
    story: "A soft, sheer silk square designed to protect the neck from breezes while keeping a clean drape.",
    sustainability: "Silks are colored utilizing mineral dyes and certified water-saving processes."
  },
  {
    id: "44",
    name: "Atelier Leather Sandal",
    price: 210,
    category: "accessories",
    collection: "Atelier",
    description: "Minimalist slide sandals constructed from thick vegetable-tanned bridle leather and raw wood soles.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Atelier leather sandal",
    materials: "Thick Bridle Leather, Natural Cedar Wood sole.",
    colorVariants: ["Raw Tan", "Soot Black"],
    sizing: "Fits true to size. Hard sole.",
    details: ["Cedar wood base", "Double strap leather wrap", "Rubber anti-slip panels"],
    availability: true,
    story: "Modeled after traditional Japanese Geta sandals, utilizing local cedar wood bases and bridle wraps.",
    sustainability: "Cedar wood consists of sustainable plantation wood scraps, preserving native forests."
  },
  {
    id: "45",
    name: "Silence Travel Pouches",
    price: 90,
    category: "accessories",
    collection: "Silence",
    description: "A set of three nesting utility pouches in lightweight, water-resistant recycled ripstop sailcloth.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
    ],
    alt: "Silence travel pouches",
    materials: "100% Recycled Ripstop Sailcloth.",
    colorVariants: ["White Ripstop", "Slate Grey"],
    sizing: "Three sizes: Small, Medium, Large.",
    details: ["Water-resistant zippers", "Nesting design", "Reinforced canvas loops"],
    availability: true,
    story: "Clean organizational pockets to store accessories and travel essentials with zero clutter.",
    sustainability: "Sailcloth consists of recycled yacht sails, diverting durable dacron from landfills."
  }
];
