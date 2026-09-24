/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Oak Bistro",
    suffix: ".",
    tagline: "Contemporary Dining & Restobar",
    description: "Oak Bistro - Contemporary dining restobar located at Hotel Ascent Biz, Sector 62, Noida. Offering artisanal pizzas, bruschetta, North Indian delicacies, and handcrafted mocktails & beverages.",
    keywords: "Oak Bistro, Noida cafe, Sector 62 restaurant, restobar, artisanal pizza, bruschetta, Hotel Ascent Biz, fine dining Noida",
    themeColor: "#1e1b18",
    domain: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida",
    ogImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnvaHfaLBjACPLR6kmM2tOf7Y1VpRkNh7LSSmMKByduLyyNVWP4-93FxPSZ3AryCpi0dihOquYKMjlwz-bmRTOqXJKaQD_O1Z724hkgYouhd8tUBAWbOtXE22Uai_KxtHa3gBCJBY1dHFOc=s680-w680-h510-rw",
    faviconEmoji: "🌳",
    whatsappNumber: "919599299085"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#181512",          // Warm dark wood background
      bgCard: "#231f1a",      // Deep oak wood card background
      bgLight: "#2e2923",     // Warm slate contrast color
      primary: "#c89d66",     // Warm oak golden-amber primary accent
      primaryHover: "#e5bf88",// Light oak amber hover state
      text: "#f2ece4",         // Soft cream text
      textMuted: "#a89f91",    // Warm muted gray-brown
      accent: "#3a322b"       // Subtle wood contrast border
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Welcome to Oak Bistro",
    title: "Savor Exceptional Flavors in a Refined Atmosphere",
    description: "Experience artisanal pizzas, gourmet bruschettas, and exquisite multi-cuisine delicacies right in the heart of Sector 62, Noida.",
    bgImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnvaHfaLBjACPLR6kmM2tOf7Y1VpRkNh7LSSmMKByduLyyNVWP4-93FxPSZ3AryCpi0dihOquYKMjlwz-bmRTOqXJKaQD_O1Z724hkgYouhd8tUBAWbOtXE22Uai_KxtHa3gBCJBY1dHFOc=s680-w680-h510-rw",
    stats: [
      { value: "7 AM - 12 AM", label: "Open Daily" },
      { value: "4.8 ★", label: "Guest Satisfaction" },
      { value: "100%", label: "Fresh Ingredients" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "Crafting Culinary Delights with Elegance",
    paragraphs: [
      "Located on the Ground Floor of Hotel Ascent Biz in Sector 62, Noida, Oak Bistro is a sanctuary for food lovers and travelers alike. We combine minimalist interior design with a warm, inviting ambiance to create an unforgettable dining experience.",
      "From rich breakfast buffets featuring live counters to hand-crafted Italian pizzas, authentic North Indian specialties, and savory Thai entrees, our kitchen balances comfort and sophistication."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkmy81TrdyfyaWjAQ7xDsxnQlOsitWUgPYnwvwzFbFt4SD3BkS-WtaZggbeoXYJb0R1EM1EBX_vpXxyU9jgzSB17Snbv6Fqp36gJzFaM4msZedzIbj0BPb0Nk35B6wFNnFj5zFl7mLNDy_C=s680-w680-h510-rw",
    imageAlt: "Interior view of Oak Bistro dining area",
    experienceValue: "7 Days",
    experienceLabel: "Weekly Service"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Chef's Recommendations",
    title: "Signature Bistro Specials",
    badge: "Must Try",
    description: "Handcrafted Italian and fusion specialties prepared fresh daily in our kitchen.",
    items: [
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
        alt: "VIP Margherita Pizza",
        diet: "veg",
        title: "VIP Margherita Pizza",
        price: "₹545",
        desc: "Italian-inspired fresh dough oven pizza with perfectly melted cheese, fresh basil, and ripe tomatoes."
      },
      {
        badge: "Bestseller",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        alt: "Chicken Tikka BBQ & Onion Pizza",
        diet: "nonveg",
        title: "Chicken Tikka BBQ & Onion Pizza",
        price: "₹625",
        desc: "Cheesy artisan pizza topped with delicious chicken tikka, tangy BBQ sauce, and charred onions."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=600",
        alt: "Chicken Pesto Bruschetta",
        diet: "nonveg",
        title: "Chicken Pesto Bruschetta",
        price: "₹475",
        desc: "Cooked to perfection, topped with fresh mozzarella and juicy, garlicky fresh chopped tomatoes."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Dining Deals",
    title: "Special Offers",
    items: [
      {
        tag: "DINEOUT SPECIAL",
        title: "Reserve via Swiggy Dineout",
        desc: "Book your table online for exclusive dining discounts and seamless seat reservations.",
        code: "OAKDINEOUT",
        highlight: false
      },
      {
        tag: "MORNING BUFFET",
        title: "Live Breakfast Buffet",
        desc: "Enjoy fresh fruits, live dosa & omelette counters, pastries, and authentic North & South Indian dishes.",
        code: "OAKBREAKFAST",
        highlight: true
      },
      {
        tag: "DIRECT ORDER",
        title: "Order via WhatsApp",
        desc: "Place direct orders or table reservations conveniently over WhatsApp.",
        code: "OAKDIRECT",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Menu",
    title: "Artisanal Pizzas & Bruschetta",
    pdfUrl: "assets/oak-bistro-menu.pdf",
    pdfFilename: "Oak_Bistro_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "pizzas", label: "Fresh Dough Pizzas", active: false },
      { id: "bruschetta", label: "Choice of Bruschetta", active: false }
    ],
    items: [
      // Pizzas Section (From Menu Image)
      {
        category: "pizzas",
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600",
        title: "VIP Margherita",
        price: "₹545",
        diet: "veg",
        desc: "Italian-inspired fresh dough oven pizza with perfectly melted cheese and fresh basil & tomato.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-62/oak-bistro-597451/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1"
      },
      {
        category: "pizzas",
        img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=600",
        title: "Veggie Extravaganza",
        price: "₹575",
        diet: "veg",
        desc: "Overload of golden corn, exotic vegetables with extra cheese to go all around.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-62/oak-bistro-597451/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1"
      },
      {
        category: "pizzas",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
        title: "Corn Capsicum Pizza",
        price: "₹575",
        diet: "veg",
        desc: "Classic Italian style pizza with a delicious twist, topped with bell peppers, sweet corn, and melted mozzarella cheese.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-62/oak-bistro-597451/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1"
      },
      {
        category: "pizzas",
        img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=600",
        title: "Paneer Chilli Pizza",
        price: "₹595",
        diet: "veg",
        desc: "Fusion delicacy: spicy chilli paneer, capsicum, and layered cheese oven finished to perfection.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-62/oak-bistro-597451/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1"
      },
      {
        category: "pizzas",
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Salami & Red Pepper",
        price: "₹625",
        diet: "nonveg",
        desc: "Chicken salami, red pepper, and cheese baked until golden and bubbly.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-62/oak-bistro-597451/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1"
      },
      {
        category: "pizzas",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        title: "Chilli Chicken Pizza",
        price: "₹625",
        diet: "nonveg",
        desc: "Loaded with crispy chilli chicken. This pizza is a treat for all the chicken lovers.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-62/oak-bistro-597451/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1"
      },
      {
        category: "pizzas",
        img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Tikka BBQ & Onion",
        price: "₹625",
        diet: "nonveg",
        desc: "Cheesy pizza topped with delicious chicken tikka & BBQ onion.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-62/oak-bistro-597451/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1"
      },

      // Bruschetta Section (From Menu Image)
      {
        category: "bruschetta",
        img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=600",
        title: "Cheese & Tomato Bruschetta",
        price: "₹395",
        diet: "veg",
        desc: "Sliced bread toasted to perfection topped with fresh tomatoes, olive oil, herbs, and onion.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-62/oak-bistro-597451/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1"
      },
      {
        category: "bruschetta",
        img: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?auto=format&fit=crop&q=80&w=600",
        title: "Mushroom & Olives Bruschetta",
        price: "₹425",
        diet: "veg",
        desc: "Mushrooms, olives, capers, and garlic make a great crisp topping.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-62/oak-bistro-597451/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1"
      },
      {
        category: "bruschetta",
        img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Pesto Bruschetta",
        price: "₹475",
        diet: "nonveg",
        desc: "Cooked to perfection, topped with fresh mozzarella and juicy, garlicky fresh chopped tomatoes.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-62/oak-bistro-597451/dineout",
        zomatoUrl: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Guest Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"This restobar is located at the ground floor inside the premises of Ascent Biz Hotel at Noida... The ambiance is decent with minimalist interior design. The staffs are very much courteous, professional and helpful. The complementary breakfast spread had fresh fruits, good choice of bread, pastries, cold cuts and popular preparations... Overall verdict- definitely recommended.\"",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
        name: "Sourav Chakraborty",
        role: "Local Guide · 300 reviews"
      },
      {
        stars: 5,
        text: "\"Food is really very tasty, services are on time, staffs are very friendly and I like the atmosphere as well. In breakfast they serves buffet and we can choose whatever we want to eat they serves instant dosa omlette as well. Rooms are also very nice we can choose it for long stay as well.\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Jyoti Saroj",
        role: "Local Guide · 95 reviews"
      },
      {
        stars: 5,
        text: "\"The food was awesome. Service is top notch. Kajal is a very good host. Will try buffet next time for sure.\"",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100",
        name: "Mohit Kumar",
        role: "Local Guide · 44 reviews"
      }
    ],
    googleCta: {
      title: "Enjoyed your time at Oak Bistro?",
      desc: "Help others discover us by leaving a review on Google Maps!",
      url: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Moments at Oak Bistro",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnyW-xsNAKmZVDcGEx7GSWOZoXoiaZhEPRUtiWY54_Jv_HZitxkuq-bQFlzL6O34UTIkSUb5A9Yf7-kjNjU-y6zie03t5F2pUGEZ1btQ_qmV7V810Dp8UzjMdMO6MQlCK5ymzrDDZ9neLCF=w141-h236-n-k-no-nu", alt: "Oak Bistro Ambiance 1" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmzQhmZFUPlSunFm8ni9Iary0cLyiem_CbGZjNwktZUAw8nGcBTszXEoxZJdWewIsEP-44vxFcUGXLCDw-hHuxLMs74XDrEitV_tHoALVamK1e2qi8deGN3iIgl1bPuvN_tJvT4=s680-w680-h510-rw", alt: "Oak Bistro Dining Experience 2" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkCDoajHjpDNUo5nt2S5ODUrO8-pCytQ0Wpw8_sT8S4ApBlf1QjqoqrrkGu8yiRGjUXnR7spu_6aL9hlR7V3r-EIX9hWxgnza8VD1OJAkR8i8wyDxm_KYNPpp8MilOEl5tRUIvd_-J7nzCU=w141-h236-n-k-no-nu", alt: "Oak Bistro Food Presentation 3" },
      { src: "https://lh5.googleusercontent.com/proxy/SLQywjTC2RhvSZseZNZFTuWd2uEsCWWqPRmSuNfKJLGDe0edafv261eQ86BTPb_W1WhexrOEjugjSuEeKN851D6e_DLMDu7lOvuOz0YX4DtbG1KMrlfcEAFG-kg2p7U_EWUg0uohjn3X6I3sNEGlCnXDac_2rA=w160-h160-k-no", alt: "Oak Bistro Drinks & Hospitality 4" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Location & Hours",
    title: "Visit Oak Bistro",
    description: "Conveniently located on the Ground Floor inside Hotel Ascent Biz. Stop by for breakfast, lunch, or a cozy evening meal.",
    address: "Ground Floor, Hotel Ascent Biz Noida - Khoda Road, Sector 62, Noida, Uttar Pradesh 201020",
    hours: [
      "Monday - Sunday: 7:00 AM - 12:00 AM"
    ],
    email: "info@ascentbizhotel.com",
    phone: "+91 9599299085",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562916892497!2d77.367098!3d28.612885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56214555555%3A0x6b801a238475822b!2sHotel%20Ascent%20Biz!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Oak Bistro at Hotel Ascent Biz — Delivering exquisite flavors, friendly hospitality, and relaxed dining in Sector 62, Noida.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/oakbistro.restaurant?stkn=MTNyc2N6enp1OXE1cg==", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/ncr/oak-bistro-sector-62-noida?amp=1", iconClass: "ph-fork-knife" },
      { platform: "swiggy", url: "https://www.swiggy.com/restaurants/noida/sector-62/oak-bistro-597451/dineout", iconClass: "ph-shopping-bag" }
    ],
    copyright: "© 2026 Oak Bistro. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "OakBistro_Guest_WiFi",
    password: "oakbistronoida"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
