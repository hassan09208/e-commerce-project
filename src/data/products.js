export const products = [
  // LUXURY WATCHES (20 products)
  {
    id: 1,
    name: "Chronos Elite Watch",
    category: "watches",
    price: 2000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    originalPrice: 3000,
    rating: 4.9,
    reviews: 284,
    description: "A masterpiece of Swiss engineering, featuring a 42mm titanium case with sapphire crystal and automatic movement.",
    specifications: {
      material: "Titanium",
      movement: "Automatic",
      waterResistance: "100m",
      warranty: "5 years"
    },
    variants: [
      { name: "Midnight Black", color: "#1a1a1a", price: 3000 },
      { name: "Silver Platinum", color: "#e5e4e2", price: 4909 },
      { name: "Rose Gold", color: "#b76e79", price: 699 }
    ],
    stock: 15,
    featured: true,
    trending: true
  },
  {
    id: 2,
    name: "Royal Oak Perpetual",
    category: "watches",
    price: 999,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
    originalPrice: 1299,
    rating: 5.0,
    reviews: 89,
    description: "Iconic luxury sports watch with integrated bracelet and perpetual calendar complication.",
    specifications: {
      material: "18K Rose Gold",
      movement: "Self-winding",
      waterResistance: "50m",
      warranty: "5 years"
    },
    variants: [
      { name: "Rose Gold", color: "#b76e79", price: 1099 },
      { name: "Steel", color: "#c0c0c0", price: 1199 }
    ],
    stock: 5,
    featured: true,
    trending: false
  },
  {
    id: 3,
    name: "Nautilus 5711",
    category: "watches",
    price: 1599,
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
    originalPrice: 1899,
    rating: 5.0,
    reviews: 42,
    description: "The legendary Nautilus with its distinctive porthole design and horizontal embossing.",
    specifications: {
      material: "Stainless Steel",
      movement: "Automatic",
      waterResistance: "120m",
      warranty: "5 years"
    },
    variants: [
      { name: "Steel Blue", color: "#4a90a4", price: 1899 },
      { name: "Steel Silver", color: "#c0c0c0", price: 1899 }
    ],
    stock: 3,
    featured: true,
    trending: true
  },
  {
    id: 4,
    name: "Submariner Date",
    category: "watches",
    price: 1999,
    image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80",
    originalPrice: 2500,
    rating: 4.8,
    reviews: 567,
    description: "The quintessential diver's watch with Cerachrom bezel and Chromalight display.",
    specifications: {
      material: "Oystersteel",
      movement: "Perpetual",
      waterResistance: "300m",
      warranty: "5 years"
    },
    variants: [
      { name: "Black Dial", color: "#1a1a1a", price: 2499 },
      { name: "Green Dial", color: "#2d5a27", price: 2599 }
    ],
    stock: 22,
    featured: false,
    trending: true
  },
  {
    id: 5,
    name: "Speedmaster Moonwatch",
    category: "watches",
    price: 2999,
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
    originalPrice: 3299,
    rating: 4.9,
    reviews: 892,
    description: "The legendary chronograph that went to the moon, featuring Hesalite crystal and manual movement.",
    specifications: {
      material: "Stainless Steel",
      movement: "Manual-winding",
      waterResistance: "50m",
      warranty: "3 years"
    },
    variants: [
      { name: "Hesalite", color: "#1a1a1a", price: 3500 },
      { name: "Sapphire", color: "#1a1a1a", price: 4000 }
    ],
    stock: 35,
    featured: true,
    trending: false
  },
  {
    id: 6,
    name: "Daytona Cosmograph",
    category: "watches",
    price: 1699,
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    originalPrice: 1799,
    rating: 4.9,
    reviews: 234,
    description: "The ultimate racing chronograph with tachymetric bezel and column-wheel mechanism.",
    specifications: {
      material: "18K Yellow Gold",
      movement: "Automatic",
      waterResistance: "100m",
      warranty: "5 years"
    },
    variants: [
      { name: "Yellow Gold", color: "#d4af37", price: 1999 },
      { name: "White Gold", color: "#e5e4e2", price: 1899 }
    ],
    stock: 8,
    featured: true,
    trending: true
  },
  {
    id: 7,
    name: "Reverso Tribute",
    category: "watches",
    price: 1299,
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80",
    originalPrice: 1500,
    rating: 4.7,
    reviews: 156,
    description: "Art Deco icon with reversible case, featuring guilloché dial and blue hands.",
    specifications: {
      material: "Stainless Steel",
      movement: "Manual",
      waterResistance: "30m",
      warranty: "3 years"
    },
    variants: [
      { name: "Silver Dial", color: "#c0c0c0", price: 1500 },
      { name: "Black Dial", color: "#1a1a1a", price: 1400 }
    ],
    stock: 18,
    featured: false,
    trending: false
  },
  {
    id: 8,
    name: "Big Bang Unico",
    category: "watches",
    price: 1399,
    image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80",
    originalPrice: 1599,
    rating: 4.6,
    reviews: 98,
    description: "Bold and contemporary design with in-house flyback chronograph movement.",
    specifications: {
      material: "Ceramic & Titanium",
      movement: "Automatic",
      waterResistance: "100m",
      warranty: "3 years"
    },
    variants: [
      { name: "Black Magic", color: "#1a1a1a", price: 1600 },
      { name: "All Black", color: "#0a0a0a", price: 1700 }
    ],
    stock: 12,
    featured: false,
    trending: true
  },
  {
    id: 9,
    name: "Lange 1",
    category: "watches",
    price: 999,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
    originalPrice: 1199,
    rating: 5.0,
    reviews: 67,
    description: "German precision at its finest with asymmetric dial and patented outsize date.",
    specifications: {
      material: "18K Pink Gold",
      movement: "Manual",
      waterResistance: "30m",
      warranty: "5 years"
    },
    variants: [
      { name: "Pink Gold", color: "#b76e79", price: 1499 },
      { name: "White Gold", color: "#e5e4e2", price: 1399 }
    ],
    stock: 6,
    featured: true,
    trending: false
  },
  {
    id: 10,
    name: "Alpine Eagle",
    category: "watches",
    price: 1800,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
    originalPrice: 2300,
    rating: 4.7,
    reviews: 112,
    description: "Inspired by the Alps, featuring integrated bracelet and sunburst dial.",
    specifications: {
      material: "Lucent Steel A223",
      movement: "Automatic",
      waterResistance: "100m",
      warranty: "5 years"
    },
    variants: [
      { name: "Blue", color: "#1e3a5f", price: 3000 },
      { name: "Black", color: "#1a1a1a", price: 2500 }
    ],
    stock: 20,
    featured: false,
    trending: true
  },
  {
    id: 11,
    name: "Octo Finissimo",
    category: "watches",
    price: 6000,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&q=80",
    originalPrice: 9000,
    rating: 4.8,
    reviews: 89,
    description: "Ultra-thin masterpiece at just 5.15mm, featuring geometric design and titanium case.",
    specifications: {
      material: "Titanium",
      movement: "Ultra-thin Automatic",
      waterResistance: "50m",
      warranty: "3 years"
    },
    variants: [
      { name: "Titanium", color: "#8a8a8a", price: 12000 },
      { name: "Rose Gold", color: "#b76e79", price: 14099 }
    ],
    stock: 14,
    featured: true,
    trending: false
  },
  {
    id: 12,
    name: "Portugieser Perpetual",
    category: "watches",
    price: 2200,
    image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&q=80",
    originalPrice: 2500,
    rating: 4.8,
    reviews: 78,
    description: "Elegant perpetual calendar with moon phase display and 7-day power reserve.",
    specifications: {
      material: "18K White Gold",
      movement: "Automatic",
      waterResistance: "50m",
      warranty: "5 years"
    },
    variants: [
      { name: "White Gold", color: "#e5e4e2", price: 2500 },
      { name: "Platinum", color: "#e5e4e2", price: 5000 }
    ],
    stock: 9,
    featured: false,
    trending: true
  },
  {
    id: 13,
    name: "Pilot Type 20",
    category: "watches",
    price: 5500,
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80",
    originalPrice: 6200,
    rating: 4.6,
    reviews: 234,
    description: "Vintage-inspired pilot watch with oversized crown and high-frequency movement.",
    specifications: {
      material: "Bronze",
      movement: "Automatic",
      waterResistance: "100m",
      warranty: "3 years"
    },
    variants: [
      { name: "Bronze", color: "#cd7f32", price: 5500 },
      { name: "Steel", color: "#c0c0c0", price: 4800 }
    ],
    stock: 28,
    featured: false,
    trending: false
  },
  {
    id: 14,
    name: "Clifton Baumatic",
    category: "watches",
    price: 3200,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    originalPrice: 3600,
    rating: 4.5,
    reviews: 345,
    description: "Contemporary dress watch with 5-day power reserve and silicon balance spring.",
    specifications: {
      material: "Stainless Steel",
      movement: "Automatic",
      waterResistance: "50m",
      warranty: "3 years"
    },
    variants: [
      { name: "Silver", color: "#c0c0c0", price: 3200 },
      { name: "Blue", color: "#1e3a5f", price: 3200 }
    ],
    stock: 45,
    featured: false,
    trending: true
  },
  {
    id: 15,
    name: "Captain Cook",
    category: "watches",
    price: 2800,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
    originalPrice: 3200,
    rating: 4.6,
    reviews: 412,
    description: "Vintage diver reimagined with modern materials and ceramic bezel.",
    specifications: {
      material: "Bronze",
      movement: "Automatic",
      waterResistance: "300m",
      warranty: "3 years"
    },
    variants: [
      { name: "Bronze", color: "#cd7f32", price: 2800 },
      { name: "Steel", color: "#c0c0c0", price: 2500 }
    ],
    stock: 38,
    featured: false,
    trending: false
  },
  {
    id: 16,
    name: "Traditionnelle",
    category: "watches",
    price: 3200,
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80",
    originalPrice: 4200,
    rating: 4.9,
    reviews: 56,
    description: "Haute horlogerie with hand-engraved movement and classic design language.",
    specifications: {
      material: "18K Pink Gold",
      movement: "Manual",
      waterResistance: "30m",
      warranty: "5 years"
    },
    variants: [
      { name: "Pink Gold", color: "#b76e79", price: 3200 },
      { name: "Platinum", color: "#e5e4e2", price: 5000 }
    ],
    stock: 7,
    featured: true,
    trending: false
  },
  {
    id: 17,
    name: "Royal Oak Offshore",
    category: "watches",
    price: 2000,
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80",
    originalPrice: 3000,
    rating: 4.7,
    reviews: 123,
    description: "Bold and rugged version of the iconic Royal Oak with rubber accents.",
    specifications: {
      material: "Forged Carbon",
      movement: "Automatic",
      waterResistance: "100m",
      warranty: "5 years"
    },
    variants: [
      { name: "Carbon", color: "#1a1a1a", price: 2000 },
      { name: "Ceramic", color: "#1a1a1a", price: 5000 }
    ],
    stock: 11,
    featured: false,
    trending: true
  },
  {
    id: 18,
    name: "Master Ultra Thin",
    category: "watches",
    price: 500,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
    originalPrice: 200,
    rating: 4.6,
    reviews: 189,
    description: "Exceptionally thin dress watch with sunburst dial and minimalist design.",
    specifications: {
      material: "Stainless Steel",
      movement: "Ultra-thin Automatic",
      waterResistance: "50m",
      warranty: "3 years"
    },
    variants: [
      { name: "Silver", color: "#c0c0c0", price: 500 },
      { name: "Black", color: "#1a1a1a", price: 300 }
    ],
    stock: 32,
    featured: false,
    trending: false
  },
  {
    id: 19,
    name: "Polo S",
    category: "watches",
    price: 1000,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
    originalPrice: 1500,
    rating: 4.5,
    reviews: 167,
    description: "Sporty elegance with cushion-shaped case and horizontal gadroons.",
    specifications: {
      material: "Stainless Steel",
      movement: "Automatic",
      waterResistance: "100m",
      warranty: "3 years"
    },
    variants: [
      { name: "Silver Dial", color: "#c0c0c0", price: 1000 },
      { name: "Blue Dial", color: "#1e3a5f", price: 1100 }
    ],
    stock: 24,
    featured: false,
    trending: true
  },
  {
    id: 20,
    name: "Classique 5177",
    category: "watches",
    price: 1500,
    image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&q=80",
    originalPrice: 2000,
    rating: 4.8,
    reviews: 94,
    description: "Traditional elegance with hand-engraved dial and fluted caseband.",
    specifications: {
      material: "18K Yellow Gold",
      movement: "Automatic",
      waterResistance: "30m",
      warranty: "5 years"
    },
    variants: [
      { name: "Yellow Gold", color: "#d4af37", price: 9500 },
      { name: "White Gold", color: "#e5e4e2", price: 2500 }
    ],
    stock: 16,
    featured: true,
    trending: false
  },

  // HIGH-END TECH (20 products)
  {
    id: 21,
    name: "Nexus Smart Hub",
    category: "tech",
    price: 2499,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    originalPrice: 2999,
    rating: 4.7,
    reviews: 892,
    description: "Next-generation smart home hub with AI assistant, 8K display, and seamless device integration.",
    specifications: {
      display: "8K OLED",
      processor: "Quantum Chip",
      storage: "2TB SSD",
      connectivity: "Wi-Fi 7"
    },
    variants: [
      { name: "Obsidian", color: "#0a0a0a", price: 2499 },
      { name: "Frost", color: "#e8e8e8", price: 2699 }
    ],
    stock: 28,
    featured: true,
    trending: false
  },
  {
    id: 22,
    name: "Spectra Camera Lens",
    category: "tech",
    price: 3200,
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&q=80",
    originalPrice: 3800,
    rating: 4.8,
    reviews: 423,
    description: "Professional-grade 85mm f/1.4 lens with nano-coating and weather sealing.",
    specifications: {
      focalLength: "85mm",
      aperture: "f/1.4",
      mount: "Universal",
      weight: "920g"
    },
    variants: [
      { name: "Standard", color: "#2d2d2d", price: 3200 },
      { name: "Limited Edition", color: "#d4af37", price: 4500 }
    ],
    stock: 8,
    featured: true,
    trending: false
  },
  {
    id: 23,
    name: "Quantum Smart Ring",
    category: "tech",
    price: 799,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    originalPrice: 999,
    rating: 4.5,
    reviews: 312,
    description: "Health-tracking smart ring with heart variability monitoring and sleep analysis.",
    specifications: {
      material: "Titanium",
      battery: "7 days",
      sensors: "Advanced Biometric",
      waterResistance: "50m"
    },
    variants: [
      { name: "Stealth Black", color: "#1a1a1a", price: 799 },
      { name: "Silver", color: "#c0c0c0", price: 799 },
      { name: "Gold", color: "#d4af37", price: 899 }
    ],
    stock: 55,
    featured: false,
    trending: true
  },
  {
    id: 24,
    name: "ProMax Studio Display",
    category: "tech",
    price: 5999,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    originalPrice: 6499,
    rating: 4.9,
    reviews: 567,
    description: "32-inch 6K Retina display with ProMotion, nanotexture, and advanced color accuracy.",
    specifications: {
      display: "32-inch 6K",
      panel: "IPS",
      refreshRate: "120Hz",
      connectivity: "Thunderbolt 4"
    },
    variants: [
      { name: "Standard Glass", color: "#1a1a1a", price: 5999 },
      { name: "Nano-texture", color: "#1a1a1a", price: 6499 }
    ],
    stock: 35,
    featured: true,
    trending: true
  },
  {
    id: 25,
    name: "UltraBook Pro X",
    category: "tech",
    price: 3299,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    originalPrice: 3699,
    rating: 4.8,
    reviews: 1234,
    description: "Ultra-thin laptop with M3 Pro chip, 32GB RAM, and 1TB SSD storage.",
    specifications: {
      processor: "M3 Pro",
      memory: "32GB",
      storage: "1TB SSD",
      display: "14-inch Liquid Retina XDR"
    },
    variants: [
      { name: "Space Gray", color: "#2d2d2d", price: 3299 },
      { name: "Silver", color: "#c0c0c0", price: 3299 }
    ],
    stock: 42,
    featured: true,
    trending: false
  },
  {
    id: 26,
    name: "Gaming Tower Elite",
    category: "tech",
    price: 4500,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=80",
    originalPrice: 4999,
    rating: 4.7,
    reviews: 876,
    description: "High-performance gaming PC with RTX 4090, i9 processor, and liquid cooling.",
    specifications: {
      processor: "Intel i9-14900K",
      gpu: "RTX 4090 24GB",
      memory: "64GB DDR5",
      storage: "2TB NVMe SSD"
    },
    variants: [
      { name: "Standard", color: "#1a1a1a", price: 4500 },
      { name: "RGB Edition", color: "#1a1a1a", price: 4999 }
    ],
    stock: 18,
    featured: false,
    trending: true
  },
  {
    id: 27,
    name: "Drone Phantom X",
    category: "tech",
    price: 1899,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    originalPrice: 2199,
    rating: 4.6,
    reviews: 543,
    description: "Professional drone with 8K camera, 45-minute flight time, and obstacle avoidance.",
    specifications: {
      camera: "8K Hasselblad",
      flightTime: "45 minutes",
      range: "15km",
      sensors: "360° Obstacle Avoidance"
    },
    variants: [
      { name: "Standard", color: "#2d2d2d", price: 1899 },
      { name: "Pro Bundle", color: "#2d2d2d", price: 2499 }
    ],
    stock: 25,
    featured: false,
    trending: false
  },
  {
    id: 28,
    name: "Smart Home Hub Max",
    category: "tech",
    price: 449,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80",
    originalPrice: 499,
    rating: 4.5,
    reviews: 1567,
    description: "10-inch smart display with built-in camera, speakers, and full smart home integration.",
    specifications: {
      display: "10-inch HD",
      camera: "13MP with auto-framing",
      speakers: "Stereo 10W",
      assistant: "Built-in AI"
    },
    variants: [
      { name: "Chalk", color: "#e8e8e8", price: 449 },
      { name: "Charcoal", color: "#2d2d2d", price: 449 }
    ],
    stock: 67,
    featured: false,
    trending: true
  },
  {
    id: 29,
    name: "Mechanical Keyboard Pro",
    category: "tech",
    price: 299,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
    originalPrice: 349,
    rating: 4.7,
    reviews: 892,
    description: "Premium mechanical keyboard with Cherry MX switches, aluminum frame, and RGB lighting.",
    specifications: {
      switches: "Cherry MX Red",
      layout: "75%",
      frame: "Aircraft Aluminum",
      lighting: "Per-key RGB"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 299 },
      { name: "White", color: "#f5f5f5", price: 299 }
    ],
    stock: 89,
    featured: false,
    trending: false
  },
  {
    id: 30,
    name: "Wireless Mouse Elite",
    category: "tech",
    price: 149,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    originalPrice: 179,
    rating: 4.6,
    reviews: 1234,
    description: "Ergonomic wireless mouse with 25K DPI sensor, 90-hour battery, and customizable buttons.",
    specifications: {
      sensor: "25K Optical",
      battery: "90 hours",
      buttons: "8 programmable",
      wireless: "2.4GHz + Bluetooth"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 149 },
      { name: "White", color: "#f5f5f5", price: 149 }
    ],
    stock: 156,
    featured: false,
    trending: true
  },
  {
    id: 31,
    name: "4K Webcam Pro",
    category: "tech",
    price: 199,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=800&q=80",
    originalPrice: 249,
    rating: 4.5,
    reviews: 678,
    description: "Professional 4K webcam with auto-focus, noise-canceling mic, and HDR support.",
    specifications: {
      resolution: "4K @ 60fps",
      autofocus: "Yes",
      microphone: "Stereo noise-canceling",
      fieldOfView: "90°"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 199 },
      { name: "Silver", color: "#c0c0c0", price: 199 }
    ],
    stock: 78,
    featured: false,
    trending: false
  },
  {
    id: 32,
    name: "External SSD 4TB",
    category: "tech",
    price: 449,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80",
    originalPrice: 499,
    rating: 4.8,
    reviews: 2345,
    description: "Ultra-fast portable SSD with 2000MB/s transfer speed and rugged design.",
    specifications: {
      capacity: "4TB",
      speed: "2000MB/s",
      interface: "USB-C 3.2 Gen 2",
      protection: "IP67 water/dust"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 449 },
      { name: "Silver", color: "#c0c0c0", price: 449 }
    ],
    stock: 134,
    featured: false,
    trending: true
  },
  {
    id: 33,
    name: "Smart Watch Ultra",
    category: "tech",
    price: 899,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    originalPrice: 999,
    rating: 4.7,
    reviews: 3456,
    description: "Rugged smartwatch with dual-frequency GPS, 36-hour battery, and advanced health features.",
    specifications: {
      display: "1.92-inch Always-On Retina",
      battery: "36 hours",
      gps: "Dual-frequency",
      waterResistance: "100m"
    },
    variants: [
      { name: "Orange", color: "#ff6b35", price: 899 },
      { name: "Green", color: "#2d5a27", price: 899 },
      { name: "Black", color: "#1a1a1a", price: 899 }
    ],
    stock: 89,
    featured: true,
    trending: true
  },
  {
    id: 34,
    name: "Tablet Pro 12.9",
    category: "tech",
    price: 1299,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    originalPrice: 1499,
    rating: 4.9,
    reviews: 2345,
    description: "12.9-inch tablet with M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
    specifications: {
      display: "12.9-inch Liquid Retina XDR",
      processor: "M2",
      storage: "256GB",
      connectivity: "Wi-Fi 6E + 5G"
    },
    variants: [
      { name: "Space Gray", color: "#2d2d2d", price: 1299 },
      { name: "Silver", color: "#c0c0c0", price: 1299 }
    ],
    stock: 67,
    featured: true,
    trending: false
  },
  {
    id: 35,
    name: "Wireless Earbuds Pro",
    category: "tech",
    price: 249,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    originalPrice: 299,
    rating: 4.6,
    reviews: 4567,
    description: "Premium true wireless earbuds with active noise cancellation and spatial audio.",
    specifications: {
      driver: "Custom 11mm",
      anc: "Active Noise Cancellation",
      battery: "6 hours + 24 hours case",
      waterResistance: "IPX4"
    },
    variants: [
      { name: "White", color: "#f5f5f5", price: 249 },
      { name: "Black", color: "#1a1a1a", price: 249 }
    ],
    stock: 234,
    featured: false,
    trending: true
  },
  {
    id: 36,
    name: "Portable Power Station",
    category: "tech",
    price: 699,
    image: "https://images.unsplash.com/photo-1608226368901-47a7e08b0b56?w=800&q=80",
    originalPrice: 799,
    rating: 4.5,
    reviews: 567,
    description: "1000Wh portable power station with AC outlets, USB-C PD, and solar charging support.",
    specifications: {
      capacity: "1000Wh",
      acOutput: "600W pure sine",
      usbC: "100W PD",
      solar: "MPPT controller"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 699 },
      { name: "Orange", color: "#ff6b35", price: 699 }
    ],
    stock: 45,
    featured: false,
    trending: false
  },
  {
    id: 37,
    name: "Smart Doorbell Pro",
    category: "tech",
    price: 229,
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?w=800&q=80",
    originalPrice: 279,
    rating: 4.4,
    reviews: 1234,
    description: "Video doorbell with 4K camera, two-way audio, and smart home integration.",
    specifications: {
      camera: "4K HDR",
      fieldOfView: "180°",
      power: "Wired or Battery",
      storage: "Cloud + Local"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 229 },
      { name: "White", color: "#f5f5f5", price: 229 }
    ],
    stock: 89,
    featured: false,
    trending: true
  },
  {
    id: 38,
    name: "VR Headset Pro",
    category: "tech",
    price: 499,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
    originalPrice: 599,
    rating: 4.6,
    reviews: 890,
    description: "Standalone VR headset with 4K+ display, 120Hz refresh, and hand tracking.",
    specifications: {
      display: "4K+ per eye",
      refreshRate: "120Hz",
      tracking: "6DOF inside-out",
      processor: "Snapdragon XR2"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 499 },
      { name: "White", color: "#f5f5f5", price: 499 }
    ],
    stock: 56,
    featured: false,
    trending: false
  },
  {
    id: 39,
    name: "Smart Thermostat Elite",
    category: "tech",
    price: 279,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    originalPrice: 329,
    rating: 4.5,
    reviews: 678,
    description: "Learning thermostat with geofencing, energy reports, and voice control.",
    specifications: {
      display: "3.5-inch color",
      compatibility: "Most HVAC systems",
      learning: "AI-powered",
      sensors: "Motion + Humidity"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 279 },
      { name: "White", color: "#f5f5f5", price: 279 }
    ],
    stock: 78,
    featured: false,
    trending: true
  },
  {
    id: 40,
    name: "Gaming Monitor 27\"",
    category: "tech",
    price: 799,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    originalPrice: 899,
    rating: 4.7,
    reviews: 1234,
    description: "27-inch 4K gaming monitor with 144Hz refresh, 1ms response, and G-Sync.",
    specifications: {
      display: "27-inch 4K IPS",
      refreshRate: "144Hz",
      responseTime: "1ms",
      sync: "G-Sync Compatible"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 799 },
      { name: "White", color: "#f5f5f5", price: 799 }
    ],
    stock: 67,
    featured: false,
    trending: false
  },

  // DESIGNER WEAR (20 products)
  {
    id: 41,
    name: "Velvet Silk Blazer",
    category: "fashion",
    price: 1850,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    originalPrice: 2200,
    rating: 4.9,
    reviews: 156,
    description: "Handcrafted Italian silk blazer with modern cut, perfect for executive elegance.",
    specifications: {
      material: "100% Italian Silk",
      fit: "Slim",
      lining: "Bemberg",
      origin: "Made in Italy"
    },
    variants: [
      { name: "Navy Blue", color: "#1e3a5f", price: 1850 },
      { name: "Charcoal", color: "#36454f", price: 1850 },
      { name: "Burgundy", color: "#800020", price: 1950 }
    ],
    stock: 12,
    featured: false,
    trending: true
  },
  {
    id: 42,
    name: "Ethereal Perfume",
    category: "fashion",
    price: 450,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
    originalPrice: 550,
    rating: 4.6,
    reviews: 789,
    description: "Exclusive fragrance with notes of oud, rose, and ambergris in a crystal bottle.",
    specifications: {
      volume: "100ml",
      concentration: "Eau de Parfum",
      notes: "Oud, Rose, Ambergris",
      longevity: "12+ hours"
    },
    variants: [
      { name: "Original", color: "#d4af37", price: 450 },
      { name: "Intense", color: "#8b0000", price: 550 }
    ],
    stock: 65,
    featured: false,
    trending: true
  },
  {
    id: 43,
    name: "Heritage Leather Bag",
    category: "fashion",
    price: 2800,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    originalPrice: 3500,
    rating: 4.9,
    reviews: 198,
    description: "Hand-stitched full-grain leather briefcase with brass hardware and laptop compartment.",
    specifications: {
      material: "Full-Grain Leather",
      dimensions: "40x30x10cm",
      hardware: "Solid Brass",
      origin: "Handcrafted in Spain"
    },
    variants: [
      { name: "Cognac", color: "#955f3d", price: 2800 },
      { name: "Black", color: "#1a1a1a", price: 2800 },
      { name: "Tan", color: "#d2b48c", price: 3000 }
    ],
    stock: 18,
    featured: true,
    trending: false
  },
  {
    id: 44,
    name: "Cashmere Overcoat",
    category: "fashion",
    price: 3200,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    originalPrice: 3800,
    rating: 4.8,
    reviews: 89,
    description: "Luxurious Mongolian cashmere overcoat with silk lining and horn buttons.",
    specifications: {
      material: "100% Mongolian Cashmere",
      lining: "100% Silk",
      buttons: "Horn",
      origin: "Made in Scotland"
    },
    variants: [
      { name: "Camel", color: "#c19a6b", price: 3200 },
      { name: "Navy", color: "#1e3a5f", price: 3200 },
      { name: "Black", color: "#1a1a1a", price: 3200 }
    ],
    stock: 15,
    featured: true,
    trending: false
  },
  {
    id: 45,
    name: "Italian Leather Shoes",
    category: "fashion",
    price: 890,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80",
    originalPrice: 1100,
    rating: 4.7,
    reviews: 234,
    description: "Hand-burnished Italian leather Oxford shoes with Goodyear welt construction.",
    specifications: {
      material: "Italian Calf Leather",
      sole: "Leather Goodyear Welt",
      last: "Classic Oxford",
      origin: "Made in Italy"
    },
    variants: [
      { name: "Brown", color: "#8b4513", price: 890 },
      { name: "Black", color: "#1a1a1a", price: 890 },
      { name: "Burgundy", color: "#800020", price: 950 }
    ],
    stock: 28,
    featured: false,
    trending: true
  },
  {
    id: 46,
    name: "Silk Dress Shirt",
    category: "fashion",
    price: 450,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    originalPrice: 550,
    rating: 4.6,
    reviews: 345,
    description: "Egyptian cotton dress shirt with mother-of-pearl buttons and French cuffs.",
    specifications: {
      material: "Egyptian Cotton",
      weave: "120s 2-ply",
      buttons: "Mother-of-Pearl",
      fit: "Slim"
    },
    variants: [
      { name: "White", color: "#ffffff", price: 450 },
      { name: "Light Blue", color: "#add8e6", price: 450 },
      { name: "Pink", color: "#ffb6c1", price: 450 }
    ],
    stock: 56,
    featured: false,
    trending: false
  },
  {
    id: 47,
    name: "Designer Sunglasses",
    category: "fashion",
    price: 550,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    originalPrice: 650,
    rating: 4.5,
    reviews: 567,
    description: "Acetate frame sunglasses with polarized CR-39 lenses and UV400 protection.",
    specifications: {
      frame: "Italian Acetate",
      lenses: "Polarized CR-39",
      protection: "UV400",
      origin: "Made in Japan"
    },
    variants: [
      { name: "Black/Tortoise", color: "#2d2d2d", price: 550 },
      { name: "Tortoise/Brown", color: "#8b4513", price: 550 },
      { name: "Clear/Grey", color: "#c0c0c0", price: 550 }
    ],
    stock: 89,
    featured: false,
    trending: true
  },
  {
    id: 48,
    name: "Leather Belt",
    category: "fashion",
    price: 289,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    originalPrice: 350,
    rating: 4.7,
    reviews: 234,
    description: "Full-grain leather belt with solid brass buckle and hand-stitched edge.",
    specifications: {
      material: "Full-Grain Leather",
      buckle: "Solid Brass",
      width: "1.5 inches",
      origin: "Handcrafted in USA"
    },
    variants: [
      { name: "Brown", color: "#8b4513", price: 289 },
      { name: "Black", color: "#1a1a1a", price: 289 },
      { name: "Tan", color: "#d2b48c", price: 289 }
    ],
    stock: 67,
    featured: false,
    trending: false
  },
  {
    id: 49,
    name: "Wool Trousers",
    category: "fashion",
    price: 380,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    originalPrice: 450,
    rating: 4.6,
    reviews: 189,
    description: "Super 120s wool trousers with unfinished hem and classic fit.",
    specifications: {
      material: "Super 120s Wool",
      rise: "Mid-rise",
      fit: "Classic",
      origin: "Made in Italy"
    },
    variants: [
      { name: "Charcoal", color: "#36454f", price: 380 },
      { name: "Navy", color: "#1e3a5f", price: 380 },
      { name: "Tan", color: "#d2b48c", price: 380 }
    ],
    stock: 45,
    featured: false,
    trending: true
  },
  {
    id: 50,
    name: "Cashmere Sweater",
    category: "fashion",
    price: 650,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    originalPrice: 750,
    rating: 4.8,
    reviews: 123,
    description: "Mongolian cashmere crewneck sweater with ribbed cuffs and hem.",
    specifications: {
      material: "100% Mongolian Cashmere",
      gauge: "12-gauge",
      weight: "Medium",
      origin: "Made in Scotland"
    },
    variants: [
      { name: "Navy", color: "#1e3a5f", price: 650 },
      { name: "Grey", color: "#808080", price: 650 },
      { name: "Cream", color: "#fffdd0", price: 650 }
    ],
    stock: 34,
    featured: false,
    trending: false
  },
  {
    id: 51,
    name: "Silk Tie",
    category: "fashion",
    price: 195,
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=800&q=80",
    originalPrice: 250,
    rating: 4.5,
    reviews: 456,
    description: "Hand-rolled silk tie with classic paisley pattern and self-tipped blade.",
    specifications: {
      material: "100% Silk",
      width: "3.5 inches",
      length: "58 inches",
      lining: "100% Wool"
    },
    variants: [
      { name: "Burgundy", color: "#800020", price: 195 },
      { name: "Navy", color: "#1e3a5f", price: 195 },
      { name: "Forest Green", color: "#228b22", price: 195 }
    ],
    stock: 78,
    featured: false,
    trending: true
  },
  {
    id: 52,
    name: "Leather Wallet",
    category: "fashion",
    price: 189,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    originalPrice: 225,
    rating: 4.6,
    reviews: 567,
    description: "Bifold leather wallet with RFID protection and card slots.",
    specifications: {
      material: "Full-Grain Leather",
      capacity: "8 cards + cash",
      protection: "RFID blocking",
      origin: "Handcrafted in USA"
    },
    variants: [
      { name: "Cognac", color: "#955f3d", price: 189 },
      { name: "Black", color: "#1a1a1a", price: 189 },
      { name: "Brown", color: "#8b4513", price: 189 }
    ],
    stock: 123,
    featured: false,
    trending: false
  },
  {
    id: 53,
    name: "Linen Summer Suit",
    category: "fashion",
    price: 1200,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    originalPrice: 1500,
    rating: 4.7,
    reviews: 89,
    description: "Italian linen suit with unstructured jacket and flat-front trousers.",
    specifications: {
      material: "100% Italian Linen",
      jacket: "Unstructured",
      trousers: "Flat-front",
      origin: "Made in Italy"
    },
    variants: [
      { name: "Beige", color: "#f5f5dc", price: 1200 },
      { name: "Light Blue", color: "#add8e6", price: 1200 },
      { name: "White", color: "#ffffff", price: 1200 }
    ],
    stock: 22,
    featured: true,
    trending: true
  },
  {
    id: 54,
    name: "Leather Gloves",
    category: "fashion",
    price: 165,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    originalPrice: 200,
    rating: 4.5,
    reviews: 234,
    description: "Hair sheep leather gloves with cashmere lining and touchscreen compatibility.",
    specifications: {
      material: "Hair Sheep Leather",
      lining: "100% Cashmere",
      touchscreen: "Compatible",
      origin: "Made in Austria"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 165 },
      { name: "Brown", color: "#8b4513", price: 165 },
      { name: "Grey", color: "#808080", price: 165 }
    ],
    stock: 56,
    featured: false,
    trending: false
  },
  {
    id: 55,
    name: "Silk Pocket Square",
    category: "fashion",
    price: 85,
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=800&q=80",
    originalPrice: 110,
    rating: 4.4,
    reviews: 345,
    description: "Hand-rolled silk pocket square with geometric pattern.",
    specifications: {
      material: "100% Silk",
      size: "16x16 inches",
      edges: "Hand-rolled",
      origin: "Made in Italy"
    },
    variants: [
      { name: "Navy/Red", color: "#1e3a5f", price: 85 },
      { name: "Burgundy/Gold", color: "#800020", price: 85 },
      { name: "Grey/Silver", color: "#808080", price: 85 }
    ],
    stock: 89,
    featured: false,
    trending: true
  },
  {
    id: 56,
    name: "Leather Weekender",
    category: "fashion",
    price: 850,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    originalPrice: 1000,
    rating: 4.8,
    reviews: 123,
    description: "Full-grain leather weekender bag with brass hardware and shoe compartment.",
    specifications: {
      material: "Full-Grain Leather",
      dimensions: "22x12x10 inches",
      hardware: "Solid Brass",
      origin: "Handcrafted in Spain"
    },
    variants: [
      { name: "Cognac", color: "#955f3d", price: 850 },
      { name: "Black", color: "#1a1a1a", price: 850 },
      { name: "Tan", color: "#d2b48c", price: 850 }
    ],
    stock: 18,
    featured: true,
    trending: false
  },
  {
    id: 57,
    name: "Wool Overcoat",
    category: "fashion",
    price: 1800,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    originalPrice: 2200,
    rating: 4.7,
    reviews: 67,
    description: "British wool overcoat with velvet collar and horn buttons.",
    specifications: {
      material: "British Wool",
      lining: "Bemberg",
      collar: "Velvet",
      origin: "Made in England"
    },
    variants: [
      { name: "Camel", color: "#c19a6b", price: 1800 },
      { name: "Navy", color: "#1e3a5f", price: 1800 },
      { name: "Black", color: "#1a1a1a", price: 1800 }
    ],
    stock: 14,
    featured: false,
    trending: true
  },
  {
    id: 58,
    name: "Leather Backpack",
    category: "fashion",
    price: 650,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    originalPrice: 750,
    rating: 4.6,
    reviews: 189,
    description: "Full-grain leather backpack with laptop sleeve and brass hardware.",
    specifications: {
      material: "Full-Grain Leather",
      capacity: "15-inch laptop",
      hardware: "Solid Brass",
      origin: "Handcrafted in USA"
    },
    variants: [
      { name: "Cognac", color: "#955f3d", price: 650 },
      { name: "Black", color: "#1a1a1a", price: 650 },
      { name: "Brown", color: "#8b4513", price: 650 }
    ],
    stock: 32,
    featured: false,
    trending: false
  },
  {
    id: 59,
    name: "Silk Scarf",
    category: "fashion",
    price: 225,
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=800&q=80",
    originalPrice: 275,
    rating: 4.5,
    reviews: 234,
    description: "Hand-rolled silk scarf with geometric pattern and hand-stitched edges.",
    specifications: {
      material: "100% Silk",
      size: "70x20 inches",
      edges: "Hand-stitched",
      origin: "Made in Italy"
    },
    variants: [
      { name: "Multi-color", color: "#d4af37", price: 225 },
      { name: "Navy/White", color: "#1e3a5f", price: 225 },
      { name: "Black/Grey", color: "#1a1a1a", price: 225 }
    ],
    stock: 67,
    featured: false,
    trending: true
  },
  {
    id: 60,
    name: "Cufflinks Set",
    category: "fashion",
    price: 350,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    originalPrice: 425,
    rating: 4.7,
    reviews: 156,
    description: "Sterling silver cufflinks with onyx inlay and polished finish.",
    specifications: {
      material: "Sterling Silver",
      inlay: "Onyx",
      finish: "Polished",
      origin: "Made in England"
    },
    variants: [
      { name: "Silver/Onyx", color: "#c0c0c0", price: 350 },
      { name: "Gold/Mother-of-Pearl", color: "#d4af37", price: 450 },
      { name: "Rose Gold/Tiger Eye", color: "#b76e79", price: 450 }
    ],
    stock: 45,
    featured: false,
    trending: false
  },

  // PREMIUM AUDIO (20 products)
  {
    id: 61,
    name: "Aurora Headphones Pro",
    category: "audio",
    price: 899,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    originalPrice: 1099,
    rating: 4.8,
    reviews: 1523,
    description: "Premium wireless headphones with active noise cancellation, 40-hour battery life, and studio-quality sound.",
    specifications: {
      driverSize: "40mm",
      batteryLife: "40 hours",
      connectivity: "Bluetooth 5.3",
      weight: "250g"
    },
    variants: [
      { name: "Matte Black", color: "#1a1a1a", price: 899 },
      { name: "Pearl White", color: "#f5f5f5", price: 899 },
      { name: "Champagne Gold", color: "#d4af37", price: 999 }
    ],
    stock: 42,
    featured: true,
    trending: true
  },
  {
    id: 62,
    name: "Studio Monitor Speakers",
    category: "audio",
    price: 2499,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 2799,
    rating: 4.9,
    reviews: 456,
    description: "Professional studio monitors with 8-inch woofers and silk dome tweeters.",
    specifications: {
      woofer: "8-inch Kevlar",
      tweeter: "1-inch Silk Dome",
      power: "150W bi-amped",
      frequency: "38Hz - 22kHz"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 2499 },
      { name: "White", color: "#f5f5f5", price: 2499 }
    ],
    stock: 18,
    featured: true,
    trending: false
  },
  {
    id: 63,
    name: "Turntable Elite",
    category: "audio",
    price: 1299,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
    originalPrice: 1499,
    rating: 4.7,
    reviews: 789,
    description: "High-end belt-drive turntable with carbon fiber tonearm and built-in phono preamp.",
    specifications: {
      drive: "Belt-drive",
      tonearm: "Carbon Fiber",
      speed: "33/45/78 RPM",
      cartridge: "Moving Magnet"
    },
    variants: [
      { name: "Walnut", color: "#8b4513", price: 1299 },
      { name: "Piano Black", color: "#1a1a1a", price: 1299 },
      { name: "White", color: "#f5f5f5", price: 1299 }
    ],
    stock: 28,
    featured: true,
    trending: true
  },
  {
    id: 64,
    name: "Tube Amplifier",
    category: "audio",
    price: 1899,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 2199,
    rating: 4.8,
    reviews: 234,
    description: "Class A tube amplifier with EL34 tubes and hand-wound transformers.",
    specifications: {
      tubes: "4x EL34, 2x 12AX7",
      power: "30W per channel",
      impedance: "4-8 ohms",
      inputs: "3 RCA + 1 XLR"
    },
    variants: [
      { name: "Chrome", color: "#c0c0c0", price: 1899 },
      { name: "Black", color: "#1a1a1a", price: 1899 }
    ],
    stock: 15,
    featured: false,
    trending: false
  },
  {
    id: 65,
    name: "Wireless Speaker",
    category: "audio",
    price: 599,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 699,
    rating: 4.6,
    reviews: 1234,
    description: "Portable wireless speaker with 360-degree sound and 24-hour battery life.",
    specifications: {
      drivers: "4 full-range + 1 tweeter",
      battery: "24 hours",
      connectivity: "Wi-Fi + Bluetooth",
      waterResistance: "IPX7"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 599 },
      { name: "White", color: "#f5f5f5", price: 599 },
      { name: "Blue", color: "#1e3a5f", price: 599 }
    ],
    stock: 67,
    featured: false,
    trending: true
  },
  {
    id: 66,
    name: "In-Ear Monitors",
    category: "audio",
    price: 1299,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    originalPrice: 1499,
    rating: 4.7,
    reviews: 567,
    description: "Custom-fit in-ear monitors with dual drivers and detachable cable.",
    specifications: {
      drivers: "2 balanced armature",
      impedance: "16 ohms",
      cable: "Detachable MMCX",
      isolation: "-26dB"
    },
    variants: [
      { name: "Clear", color: "#f5f5f5", price: 1299 },
      { name: "Black", color: "#1a1a1a", price: 1299 },
      { name: "Blue", color: "#1e3a5f", price: 1299 }
    ],
    stock: 34,
    featured: false,
    trending: false
  },
  {
    id: 67,
    name: "DAC/Amp Combo",
    category: "audio",
    price: 899,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 999,
    rating: 4.8,
    reviews: 345,
    description: "Desktop DAC and headphone amplifier with ESS Sabre chip and balanced output.",
    specifications: {
      dac: "ESS Sabre ES9038",
      power: "4W balanced",
      inputs: "USB, Optical, Coaxial",
      outputs: "3.5mm, 4.4mm balanced"
    },
    variants: [
      { name: "Silver", color: "#c0c0c0", price: 899 },
      { name: "Black", color: "#1a1a1a", price: 899 }
    ],
    stock: 28,
    featured: false,
    trending: true
  },
  {
    id: 68,
    name: "Subwoofer Pro",
    category: "audio",
    price: 1499,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 1699,
    rating: 4.7,
    reviews: 234,
    description: "12-inch powered subwoofer with 500W amplifier and wireless connection.",
    specifications: {
      driver: "12-inch",
      power: "500W RMS",
      frequency: "20Hz - 200Hz",
      wireless: "Subwoofer Link"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 1499 },
      { name: "White", color: "#f5f5f5", price: 1499 }
    ],
    stock: 22,
    featured: false,
    trending: false
  },
  {
    id: 69,
    name: "Microphone Studio",
    category: "audio",
    price: 449,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80",
    originalPrice: 499,
    rating: 4.6,
    reviews: 678,
    description: "Large-diaphragm condenser microphone with shock mount and pop filter.",
    specifications: {
      type: "Condenser",
      pattern: "Cardioid",
      frequency: "20Hz - 20kHz",
      connection: "XLR"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 449 },
      { name: "Silver", color: "#c0c0c0", price: 449 }
    ],
    stock: 45,
    featured: false,
    trending: true
  },
  {
    id: 70,
    name: "Headphone Amp",
    category: "audio",
    price: 349,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 399,
    rating: 4.5,
    reviews: 456,
    description: "Desktop headphone amplifier with gain switch and multiple impedance settings.",
    specifications: {
      power: "2W @ 32 ohms",
      gain: "Low/High",
      inputs: "3.5mm, RCA",
      outputs: "3.5mm, 6.35mm"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 349 },
      { name: "Silver", color: "#c0c0c0", price: 349 }
    ],
    stock: 56,
    featured: false,
    trending: false
  },
  {
    id: 71,
    name: "Soundbar Cinema",
    category: "audio",
    price: 1299,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 1499,
    rating: 4.7,
    reviews: 890,
    description: "Dolby Atmos soundbar with wireless subwoofer and rear speakers.",
    specifications: {
      channels: "5.1.2 Dolby Atmos",
      power: "500W total",
      connectivity: "HDMI eARC, Wi-Fi",
      subwoofer: "Wireless 10-inch"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 1299 },
      { name: "White", color: "#f5f5f5", price: 1299 }
    ],
    stock: 38,
    featured: true,
    trending: true
  },
  {
    id: 72,
    name: "Portable Recorder",
    category: "audio",
    price: 599,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80",
    originalPrice: 699,
    rating: 4.6,
    reviews: 234,
    description: "Professional field recorder with 32-bit float recording and XY stereo mics.",
    specifications: {
      format: "32-bit float WAV",
      mics: "XY stereo condenser",
      inputs: "2 XLR/TRS combo",
      storage: "SDXC card"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 599 },
      { name: "Silver", color: "#c0c0c0", price: 599 }
    ],
    stock: 24,
    featured: false,
    trending: false
  },
  {
    id: 73,
    name: "Guitar Pedal Board",
    category: "audio",
    price: 299,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 349,
    rating: 4.5,
    reviews: 345,
    description: "Aluminum pedal board with power supply and cable management.",
    specifications: {
      size: "18x12 inches",
      material: "Aircraft Aluminum",
      power: "Isolated 9V outputs",
      capacity: "8 pedals"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 299 },
      { name: "Silver", color: "#c0c0c0", price: 299 }
    ],
    stock: 45,
    featured: false,
    trending: true
  },
  {
    id: 74,
    name: "DJ Controller",
    category: "audio",
    price: 899,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 999,
    rating: 4.7,
    reviews: 567,
    description: "Professional DJ controller with motorized jog wheels and Serato integration.",
    specifications: {
      jogWheels: "Motorized 6-inch",
      mixer: "4-channel",
      software: "Serato DJ Pro",
      connectivity: "USB-C"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 899 },
      { name: "Silver", color: "#c0c0c0", price: 899 }
    ],
    stock: 28,
    featured: false,
    trending: false
  },
  {
    id: 75,
    name: "Karaoke System",
    category: "audio",
    price: 449,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80",
    originalPrice: 499,
    rating: 4.4,
    reviews: 234,
    description: "All-in-one karaoke system with wireless microphones and LED display.",
    specifications: {
      speakers: "2x 10-inch",
      microphones: "2 wireless UHF",
      display: "7-inch LED",
      effects: "Echo, Reverb"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 449 },
      { name: "Silver", color: "#c0c0c0", price: 449 }
    ],
    stock: 34,
    featured: false,
    trending: true
  },
  {
    id: 76,
    name: "Audio Interface",
    category: "audio",
    price: 399,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80",
    originalPrice: 449,
    rating: 4.6,
    reviews: 456,
    description: "USB audio interface with 4 inputs and MIDI I/O for home recording.",
    specifications: {
      inputs: "2 mic/line + 2 line",
      preamps: "4 Class-A",
      resolution: "24-bit/192kHz",
      midi: "In/Out/Thru"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 399 },
      { name: "Silver", color: "#c0c0c0", price: 399 }
    ],
    stock: 56,
    featured: false,
    trending: false
  },
  {
    id: 77,
    name: "Wireless Earbuds Elite",
    category: "audio",
    price: 349,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    originalPrice: 399,
    rating: 4.7,
    reviews: 1234,
    description: "Premium true wireless earbuds with adaptive ANC and hi-res audio support.",
    specifications: {
      driver: "11mm dynamic",
      anc: "Adaptive",
      codec: "LDAC, aptX HD",
      battery: "8 hours + 24 hours case"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 349 },
      { name: "Silver", color: "#c0c0c0", price: 349 },
      { name: "Gold", color: "#d4af37", price: 349 }
    ],
    stock: 89,
    featured: true,
    trending: true
  },
  {
    id: 78,
    name: "Bookshelf Speakers",
    category: "audio",
    price: 799,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 899,
    rating: 4.8,
    reviews: 567,
    description: "High-performance bookshelf speakers with aluminum woofers and silk tweeters.",
    specifications: {
      woofer: "5.25-inch Aluminum",
      tweeter: "1-inch Silk Dome",
      power: "100W",
      frequency: "45Hz - 25kHz"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 799 },
      { name: "White", color: "#f5f5f5", price: 799 },
      { name: "Walnut", color: "#8b4513", price: 899 }
    ],
    stock: 42,
    featured: false,
    trending: false
  },
  {
    id: 79,
    name: "Guitar Amp Tube",
    category: "audio",
    price: 1299,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 1499,
    rating: 4.7,
    reviews: 234,
    description: "All-tube guitar amplifier with spring reverb and effects loop.",
    specifications: {
      tubes: "4x EL84, 3x 12AX7",
      power: "30W",
      channels: "2",
      effects: "Spring Reverb"
    },
    variants: [
      { name: "Tweed", color: "#d2b48c", price: 1299 },
      { name: "Black", color: "#1a1a1a", price: 1299 }
    ],
    stock: 18,
    featured: false,
    trending: true
  },
  {
    id: 80,
    name: "Portable PA System",
    category: "audio",
    price: 799,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    originalPrice: 899,
    rating: 4.5,
    reviews: 345,
    description: "Battery-powered PA system with Bluetooth and built-in mixer.",
    specifications: {
      speakers: "2x 8-inch",
      power: "200W",
      battery: "8 hours",
      mixer: "4-channel"
    },
    variants: [
      { name: "Black", color: "#1a1a1a", price: 799 },
      { name: "White", color: "#f5f5f5", price: 799 }
    ],
    stock: 28,
    featured: false,
    trending: false
  }
];

export const categories = [
  {
    id: "watches",
    name: "Luxury Watches",
    description: "Timepieces of exceptional craftsmanship",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    productCount: 20
  },
  {
    id: "tech",
    name: "High-End Tech",
    description: "Cutting-edge technology and innovation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    productCount: 20
  },
  {
    id: "fashion",
    name: "Designer Wear",
    description: "Exclusive fashion and accessories",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
    productCount: 20
  },
  {
    id: "audio",
    name: "Premium Audio",
    description: "Studio-quality sound equipment",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    productCount: 20
  }
];
