import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  EN: {
    nav: {
      home: "Home",
      story: "Our Story",
      services: "Services",
      gallery: "Gallery",
      booking: "Book Now",
      contact: "Contact",
      whatsapp: "Book via WhatsApp",
      connect: "Connect with Philis",
      open: "Open menu",
      close: "Close menu",
      footer: "Philis Hair & Beauty Salon · Doha, Qatar",
      exploreServices: "Explore Services",
    },
    footer: {
      brand: "PHILIS",
      slogan: "I'm just a girl who loves making other girls feel awesome",
      follow: "Follow Philis",
      instagram: "Instagram",
      tiktok: "TikTok",
      facebook: "Facebook",
      bookWhatsapp: "Book on WhatsApp",
      navigate: "Navigate",
      beautyJournal: "Beauty Journal",
      visitUs: "Visit Us",
      address1: "Philis Hair Salon",
      address2: "Najma, Doha, Qatar",
      address3: "Al Khalidiya St",
      hoursTitle: "Hours",
      sunThu: "Sun – Thu",
      fri: "Friday",
      sat: "Saturday",
      time1: "9 AM – 8 PM",
      time2: "2 PM – 8 PM",
      lastBooking: "Last booking: 6:00 PM",
      rights: "© {year} Philis Hair & Beauty. All rights reserved.",
      locationStr: "Najma · Doha · Qatar",
      servicesTitle: "Services",
      services: ["Manicure", "Pedicure", "Makeup", "Lash Extensions", "Facial Treatment", "Waxing", "Massage", "Braiding", "Wig Installation"]
    },
    hero: {
      eyebrow: "Philis Hair & Beauty Salon",
      title1: "Beauty,",
      title2: "beautifully",
      title3: "expressed.",
      location: "Doha, Qatar",
      desc: "Hair, beauty, nails and lashes crafted with care, creativity and a touch of Philis elegance.",
      services: ["Hair", "Beauty", "Nails", "Lashes"],
      bookNow: "Book an Appointment",
      explore: "Explore Services",
      reassurance: "Your beauty. Your moment.",
      discover: "Discover Philis",
      imgAlt: "Beauty treatment at Philis Hair & Beauty Salon"
    },
    signature: {
      eyebrow: "What We Offer",
      title1: "Signature Beauty",
      title2: "Experiences",
      desc: "From head to toe, every service at Philis is designed to elevate your natural beauty. Discover treatments crafted with care and premium products.",
      viewAll: "View All Services & Pricing",
      items: [
        { name: "Hair Styling", desc: "Precision cuts, vibrant color, and expert styling tailored for every occasion." },
        { name: "Manicure", desc: "Flawless nails with gel, acrylic, and classic finishes for elegant hands." },
        { name: "Makeup", desc: "Bridal, editorial, and everyday glam created by our expert artists." },
        { name: "Lash Extensions", desc: "Custom lash lifts, full sets, and volume enhancements for a striking look." }
      ]
    },
    promise: {
      eyebrow: "What We Stand For",
      title1: "Our",
      title2: "Promise",
      desc: "We don't just want you to look good when you walk out — we want you to feel confident you made the right choice coming in.",
      items: [
        { title: "Safe & Hygienic", desc: "Every tool is sanitized, every product is sealed, and every surface is cleaned between clients. Your health is never compromised." },
        { title: "No Hard Selling", desc: "We'll recommend what you actually need — not what costs the most. Honest advice is part of the experience." },
        { title: "We Respect Your Time", desc: "Your appointment starts when you arrive — not after an hour of waiting. We manage our schedule so you don't have to stress." },
        { title: "You'll Leave Knowing More", desc: "We don't just do the service — we teach you how to maintain it at home. Better results, longer-lasting beauty." }
      ]
    },
    featuredGallery: {
      eyebrow: "Our Work",
      title1: "Beauty",
      title2: "Portfolio",
      desc1: "A glimpse into the artistry we create every day at our Al Khalidiya studio. From intricate nail art and flawless bridal makeup to transformative hair styling and custom wigs, each look tells a story of confidence, care, and uncompromising craftsmanship.",
      desc2: "Explore a curated selection of our recent masterpieces below, or visit our full gallery to see the full scope of what Philis can do for you.",
      viewFull: "View Full Portfolio",
      salonName: "Philis Salon"
    },
    salonExperience: {
      eyebrow: "Why Philis",
      title1: "The Philis",
      title2: "Experience",
      desc: "More than a salon visit — it's a beauty experience designed around you. Every detail, from our products to our ambiance, exists to make you feel extraordinary.",
      items: [
        { title: "Premium Products Only", desc: "We use only internationally recognized, high-end beauty products that nourish and protect your hair, skin, and nails." },
        { title: "Expert Beauty Specialists", desc: "Our team of trained professionals brings years of experience and a genuine passion for helping you look and feel your best." },
        { title: "Personalized Approach", desc: "No cookie-cutter treatments. Every service is tailored to your unique features, preferences, and lifestyle for results that feel authentically you." },
        { title: "Welcoming Space", desc: "Our Al Khalidiya salon was designed to feel like a retreat — calm, clean, and comfortable from the moment you walk through the door." }
      ],
      stats: [
        { value: "9+", label: "Beauty Services" },
        { value: "500+", label: "Happy Clients" },
        { value: "5+", label: "Years Experience" },
        { value: "100%", label: "Premium Products" }
      ]
    },
    bookingCTA: {
      eyebrow: "Book Your Visit",
      title1: "Reserve Your",
      title2: "Beauty Experience",
      desc: "Booking at Philis is simple and personal. No complicated online forms — just browse our services, send us a quick WhatsApp message, and we'll take care of the rest.",
      bookBtn: "Book via WhatsApp",
      available: "Available daily · Last appointment at 6:00 PM",
      videoText1: "Inside Philis Salon",
      videoText2: "Al Khalidiya, Doha",
      videoText3: "Open Daily"
    },
    location: {
      eyebrow: "Find Us",
      title1: "Visit",
      title2: "Philis",
      desc: "Find Philis Hair Salon in Najma, Doha, along Al Khalidiya St. Contact us on WhatsApp to arrange your appointment and parking.",
      info: [
        { label: "Location", value: "Najma, Doha, Qatar", secondary: "Al Khalidiya St" },
        { label: "WhatsApp", value: "+974 5525 7237" },
        { label: "Parking", value: "Free parking available upon booking" }
      ],
      hoursTitle: "Opening Hours",
      hours: [
        { day: "Sunday – Thursday", time: "9:00 AM – 8:00 PM" },
        { day: "Friday", time: "2:00 PM – 8:00 PM" },
        { day: "Saturday", time: "9:00 AM – 8:00 PM" }
      ],
      lastAppt: "Last appointment accepted at 6:00 PM",
      mapTitle: "Philis Hair Salon in Najma, Doha, Qatar",
      getDirections: "Get Directions"
    },
    faq: {
      eyebrow: "Common Questions",
      title1: "Frequently",
      title2: "Asked",
      desc: "Everything you need to know before your visit. Can't find your answer? Message us on WhatsApp.",
      items: [
        { q: "How do I book an appointment at Philis?", a: "Booking is easy — simply send us a message on WhatsApp at +974 5525 7237 with your preferred service, date, and time. Our team will confirm your appointment within minutes during business hours." },
        { q: "What services do you offer?", a: "We offer a full range of ladies' beauty services including hair styling, manicure, pedicure, makeup, lash extensions, facial treatments, waxing, massage, braiding, and wig installation. Each service is performed using premium products by trained specialists." },
        { q: "Where is Philis located?", a: "Philis Hair & Beauty Salon is located in Al Khalidiya, Doha, Qatar. Free parking is available for all confirmed bookings. We'll share exact directions when you book your appointment." },
        { q: "What are your opening hours?", a: "We're open Sunday through Thursday and Saturday from 9:00 AM to 8:00 PM, and Friday from 2:00 PM to 8:00 PM. Please note that the last appointment is accepted at 6:00 PM to ensure every client receives our full attention." },
        { q: "Do I need to book in advance?", a: "We highly recommend booking in advance, especially for weekends and special occasions like weddings or events. Walk-ins are welcome when availability permits, but a WhatsApp booking guarantees your spot and parking." },
        { q: "What products do you use?", a: "We exclusively use internationally recognized, premium beauty products that are safe and effective. Our team carefully selects each product to ensure the best results for your hair, skin, and nails." },
        { q: "Is Philis a ladies-only salon?", a: "Yes, Philis is a ladies' beauty salon. We've created a comfortable, private environment where women can relax and enjoy their beauty treatments with complete peace of mind." },
        { q: "Can I get bridal or event makeup?", a: "Absolutely. Our makeup artists specialize in bridal, event, and special occasion makeup. We recommend booking a trial session before your big day so we can perfect your look together." }
      ],
      still: "Still have questions?",
      askWhatsapp: "Ask us on WhatsApp"
    },
    about: {
      eyebrow: "Our Story",
      title1: "More Than Beauty.",
      title2: "It's Philis.",
      desc: "A beauty space in Al Khalidiya, Doha, created for women who want exceptional beauty services without losing the warmth of a personal experience.",
      beginning: "The Beginning",
      title3: "A Space Created",
      title4: "With Women in Mind",
      p1: "Philis was created from a simple idea: a beauty appointment should leave you feeling cared for, confident, and completely yourself.",
      p2: "Based in Al Khalidiya, Doha, Philis brings together hair, nails, makeup, lashes, skincare, waxing, wigs, and other beauty experiences in one welcoming space.",
      p3: "We believe great beauty work is about more than following a trend. It is about listening, understanding your style, and paying attention to the details that make your experience personal.",
      p4: "Whether you are preparing for a special occasion or simply making time for yourself, Philis is a place to slow down, feel comfortable, and enjoy being looked after.",
      discoverMore: "Discover our services",
      experienceEyebrow: "The Philis Experience",
      title5: "Come As You Are.",
      title6: "Leave Feeling Amazing.",
      experienceDesc: "We don't believe luxury needs to be complicated. At Philis, it's found in the little things — thoughtful service, careful work, a comfortable atmosphere, and the confidence you feel when everything comes together.",
      experienceSub: "Every appointment is approached with discretion, attention, and respect for each client's personal comfort.",
      philosophy: [
        { number: "01", title: "Beauty With Intention", description: "Every service begins with understanding what you want and ends with attention to the details that make the result feel truly yours." },
        { number: "02", title: "A Warm Experience", description: "Luxury should never feel cold or intimidating. Philis is designed to feel welcoming, comfortable, personal, and genuinely caring." },
        { number: "03", title: "Quality You Can Trust", description: "From our techniques to the products we choose, we focus on quality, consistency, and results that make you want to come back." },
        { number: "04", title: "You Come First", description: "Your time, comfort, preferences, and confidence matter. We listen first, recommend honestly, and never believe in unnecessary pressure." }
      ],
      privacyTitle: "Beauty, comfort & discretion",
      privacyDesc: "Not every Philis experience needs to be photographed. Some services are intentionally kept private so our clients can enjoy their appointment with complete comfort and discretion.",
      closingTitle1: "Beauty should feel",
      closingTitle2: "personal.",
      closingDesc: "That's the heart of Philis.",
      ctaTitle1: "Ready to Experience",
      ctaTitle2: "Philis?",
      ctaDesc: "Your next beauty experience is only a WhatsApp message away.",
      ctaBtn1: "Book via WhatsApp",
      ctaBtn2: "Explore Services"
    },
    booking: {
      eyebrow: "Reservations",
      title1: "Book Your",
      title2: "Moment.",
      desc: "Securing your time at Philis is intentionally simple. Skip the complicated forms—just send us a quick message, and we’ll handle the details for you.",
      ctaTitle: "Ready to secure your spot?",
      ctaDesc: "Tap below to open WhatsApp. It only takes a few seconds to lock in your preferred time.",
      ctaBtn: "Open WhatsApp to Book",
      phone: "+974 5525 7237",
      howTitle1: "How It",
      howTitle2: "Works",
      steps: [
        { number: "01", title: "Explore Services", description: "Take a moment to browse our treatments and find the experience that feels right for you.", linkText: "View Services" },
        { number: "02", title: "Send a Message", description: "Reach out on WhatsApp with your preferred service, date, and time. Feel free to ask any questions beforehand.", linkText: "Open WhatsApp" },
        { number: "03", title: "Receive Confirmation", description: "Our team will reply promptly during business hours to secure your slot and share any preparation details." },
        { number: "04", title: "Arrive & Unwind", description: "Show up at your booked time, settle in, and let our specialists take care of the rest." }
      ],
      tipsTitle: "Before Your Visit",
      tips: [
        "For the best availability, we recommend booking at least 24 hours in advance",
        "Weekends and evening slots are our busiest—planning ahead ensures your preferred time",
        "Please let us know of any skin sensitivities or allergies when you message us",
        "Arriving just 5 minutes early gives you time to settle in before we begin",
        "Bridal and special event styling begins with a brief consultation"
      ]
    },
    contact: {
      eyebrow: "Your Visit",
      title1: "We'd love to",
      title2: "see you.",
      desc: "Finding your moment of calm should be easy. We're nestled in Al Khalidiya with complimentary parking arranged for every confirmed appointment. For the quickest response regarding availability or inquiries, reach out to us directly via WhatsApp.",
      cards: [
        { title: "Our Location", lines: ["Al Khalidiya", "Doha, Qatar"] },
        { title: "Direct Message", lines: ["+974 5525 7237"] },
        { title: "Complimentary Parking", lines: ["Reserved for your convenience", "With every confirmed booking"] }
      ],
      hoursTitle: "Salon",
      hoursSub: "Hours",
      hours: [
        { day: "Sunday – Thursday", time: "9:00 AM – 8:00 PM" },
        { day: "Friday", time: "2:00 PM – 8:00 PM" },
        { day: "Saturday", time: "9:00 AM – 8:00 PM" }
      ],
      lastApptNote: "To ensure a relaxed experience, our last appointment is accepted at 6:00 PM",
      quickTitle: "Need a quick answer?",
      quickDesc: "Whether you have a question about a specific service or want to check our next available slot, send us a WhatsApp. It's the most direct line to our team.",
      quickBtn: "Message Us on WhatsApp"
    },
    gallery: {
      eyebrow: "The Philis Portfolio",
      title1: "Crafted with",
      title2: "intention.",
      desc: "Every style we create is a reflection of the person wearing it. Browse through a curated collection of our hair transformations, intricate nail art, and flawless wig installations. While this gallery showcases some of our favorite visual work, it represents just a portion of the full beauty experience waiting for you at our Al Khalidiya studio.",
      filters: ["All", "Hair", "Nails", "Wigs"],
      privacyTitle: "Discretion is part of the experience.",
      privacyDesc: "We believe true beauty should be enjoyed in the moment. While we love sharing our hair, nail, and wig artistry, services like facials, massages, and body treatments are intentionally kept off-camera. This ensures every guest can completely unwind, knowing their personal experience remains entirely private.",
      lightboxLabel: "Philis Hair & Beauty Salon",
      closeImg: "Close image"
    },
    notFound: {
      label: "Page not found",
      title1: "Even our best stylists",
      title2: "can't find this page.",
      desc: "It looks like this page has left the building — kind of like your split ends after a good trim. Let's get you back somewhere beautiful.",
      btn1: "Back to Home",
      btn2: "Browse Services",
      slogan: "I'm just a girl who loves making other girls feel awesome"
    },
    services: {
      eyebrow: "Beauty, hair & care",
      title1: "Beauty made",
      title2: "personal.",
      desc: "Discover hair, beauty and self-care services designed to help you look beautiful, feel confident and leave Philis feeling completely refreshed.",
      bookBtn: "Book an Appointment",
      exploreBtn: "Explore Our Work",
      introEyebrow: "Our services",
      introTitle1: "More than a",
      introTitle2: "salon visit.",
      introDesc: "At Philis Hair & Beauty, every appointment is an opportunity to take a little time for yourself. From carefully styled hair to beautiful nails, makeup, lashes and relaxing treatments, our services are created around the way you want to look and feel.",
      highlights: ["Hair styling", "Nails & beauty", "Makeup", "Skin care", "Lashes", "Wig services"],
      gridEyebrow: "What we offer",
      gridTitle1: "Find your",
      gridTitle2: "perfect service.",
      gridDesc: "Explore our beauty services and choose the experience that feels right for you.",
      items: [
        { number: "01", title: "Manicure", description: "Beautifully finished nails with careful attention to shape, detail and a polished finish." },
        { number: "02", title: "Pedicure", description: "A relaxing foot-care experience designed to leave your feet refreshed, cared for and beautifully finished." },
        { number: "03", title: "Makeup", description: "Elegant makeup looks tailored to your occasion, style and the finish you want to achieve." },
        { number: "04", title: "Braiding", description: "Beautiful braiding styles created with precision, creativity and attention to your natural hair." },
        { number: "05", title: "Facial Treatment", description: "A soothing facial experience focused on cleansing, refreshing and giving your skin a cared-for appearance." },
        { number: "06", title: "Weaving", description: "Versatile weave styles created to complement your look while giving you the freedom to express yourself." },
        { number: "07", title: "Waxing", description: "Professional waxing services performed with care for a smooth and clean finish." },
        { number: "08", title: "Lash Extensions", description: "Enhance your eyes with beautifully styled lash extensions designed to complement your features." },
        { number: "09", title: "Massage", description: "Take a moment to unwind with a relaxing massage experience in a calm salon environment." },
        { number: "10", title: "Wig Installation", description: "Professional wig installation with attention to placement, styling and a natural-looking finish." }
      ],
      expEyebrow: "The Philis experience",
      expTitle1: "Come for the",
      expTitle2: "beauty.",
      expTitle3: "Stay for the feeling.",
      expDesc: "We believe beauty is personal. That's why our approach is centered around listening to what you want, understanding your style and giving attention to the details that matter.",
      exp1Title: "Your style",
      exp1Desc: "Bring your inspiration, your ideas or simply tell us what you need.",
      exp2Title: "Our expertise",
      exp2Desc: "We'll help turn your vision into a finished look you'll love.",
      ctaEyebrow: "Your beauty moment",
      ctaTitle1: "Ready for your",
      ctaTitle2: "next look?",
      ctaDesc: "From beautiful braids and flawless wigs to nails, makeup, facials, lashes and more, let Philis Hair & Beauty create a look made for you.",
      ctaWhatsapp: "WhatsApp Us"
    }
  },

  AR: {
    nav: {
      home: "الرئيسية",
      story: "قصتنا",
      services: "الخدمات",
      gallery: "المعرض",
      booking: "احجزي الآن",
      contact: "تواصلي معنا",
      whatsapp: "احجزي عبر واتساب",
      connect: "تواصلي مع فيليس",
      open: "فتح القائمة",
      close: "إغلاق القائمة",
      footer: "صالون فيليس للشعر والجمال · الدوحة، قطر",
      exploreServices: "استكشفي الخدمات",
    },
    footer: {
      brand: "فيليس",
      slogan: "أنا مجرد فتاة تحب أن تجعل الفتيات الأخريات يشعرن بالرائعة",
      follow: "تابعي فيليس",
      instagram: "إنستغرام",
      tiktok: "تيك توك",
      facebook: "فيسبوك",
      bookWhatsapp: "احجزي عبر واتساب",
      navigate: "تصفح",
      beautyJournal: "يوميات الجمال",
      visitUs: "زورينا",
      address1: "صالون فيليس للشعر",
      address2: "النجمة، الدوحة، قطر",
      address3: "شارع الخالدية",
      hoursTitle: "ساعات العمل",
      sunThu: "الأحد - الخميس",
      fri: "الجمعة",
      sat: "السبت",
      time1: "9 ص - 8 م",
      time2: "2 م - 8 م",
      lastBooking: "آخر موعد: 6:00 م",
      rights: "© {year} صالون فيليس للشعر والجمال. جميع الحقوق محفوظة.",
      locationStr: "النجمة · الدوحة · قطر",
      servicesTitle: "الخدمات",
      services: ["مانيكير", "باديكير", "مكياج", "تركيب رموش", "علاجات بشرة", "إزالة الشعر", "مساج", "ضفائر", "تركيب باروكة"]
    },
    hero: {
      eyebrow: "صالون فيليس للشعر والجمال",
      title1: "الجمال،",
      title2: "يُعبّر عنه",
      title3: "بجمال.",
      location: "الدوحة، قطر",
      desc: "شعر، وجمال، وأظافر، ورموش مصممة بعناية وإبداع ولمسة من أناقة فيليس.",
      services: ["شعر", "جمال", "أظافر", "رموش"],
      bookNow: "احجزي موعداً",
      explore: "استكشفي الخدمات",
      reassurance: "جمالك. لحظتك.",
      discover: "اكتشفي فيليس",
      imgAlt: "علاج تجميل في صالون فيليس للشعر والجمال"
    },
    signature: {
      eyebrow: "ما نقدمه",
      title1: "تجارب جمال",
      title2: "مميزة",
      desc: "من الرأس إلى القدم، كل خدمة في فيليس مصممة لتعزيز جمالك الطبيعي. اكتشفي علاجات مصنوعة بعناية ومنتجات فاخرة.",
      viewAll: "عرض جميع الخدمات والأسعار",
      items: [
        { name: "تصفيف الشعر", desc: "قصات دقيقة، ألوان نابضة، وتصفيف احترافي يناسب كل مناسبة." },
        { name: "مانيكير", desc: "أظافر مثالية بلمسات جل وأكريليك وكلاسيكية ليدين أنيقتين." },
        { name: "مكياج", desc: "مكياج العرائس، والمجلات، والإطلالات اليومية المميزة من قبل فنانينا الخبراء." },
        { name: "تركيب رموش", desc: "رفع الرموش، المجموعات الكاملة، وتكثيف الرموش لإطلالة آسرة." }
      ]
    },
    promise: {
      eyebrow: "ما نؤمن به",
      title1: "وعدنا",
      title2: "",
      desc: "نحن لا نريدك أن تبدين جيدة فحسب عند خروجك — نريدك أن تشعري بالثقة بأنك اتخذتِ الخيار الصحيح بالمجيء إلينا.",
      items: [
        { title: "آمن ونظيف", desc: "كل أداة معقمة، وكل منتج مغلف، وكل سطح نظيف بين العملاء. صحتك لا تُمس أبداً." },
        { title: "لا بيع بإلحاح", desc: "سنوصي بما تحتاجينه فعلاً — وليس بما يكلف أكثر. النصيحة الصادقة جزء من التجربة." },
        { title: "نحترم وقتك", desc: "يبدأ موعدك عند وصولك — وليس بعد ساعة من الانتظار. ندير جدولنا لتجنب أي توتر لك." },
        { title: "ستغادرين وأنتِ تعرفين أكثر", desc: "نحن لا نقوم بالخدمة فحسب — بل نعلمك كيفية العناية بها في المنزل. نتائج أفضل، وجمال يدوم أطول." }
      ]
    },
    featuredGallery: {
      eyebrow: "أعمالنا",
      title1: "معرض",
      title2: "الأعمال",
      desc1: "لمحة عن الفن الذي نبدعه كل يوم في استوديو الخالدية. من فنون الأظافر المعقدة ومكياج العرائس المثالي إلى تصفيف الشعر التحويلي والباروكات المخصصة، كل إطلالة تروي قصة ثقة وعناية وحرفية لا تتنازل.",
      desc2: "استكشفي مجموعة منتقاة من أحدث تحفنا الفنية أدناه، أو زوري معرضنا الكامل لرؤية النطاق الكامل لما يمكن لفيليس تقديمه لك.",
      viewFull: "عرض المعرض الكامل",
      salonName: "صالون فيليس"
    },
    salonExperience: {
      eyebrow: "لماذا فيليس",
      title1: "تجربة",
      title2: "فيليس",
      desc: "أكثر من مجرد زيارة لصالون — إنها تجربة جمال مصممة حولك. كل تفصيل، من منتجاتنا إلى أجوائنا، موجود لجعلك تشعرين بالتميز.",
      items: [
        { title: "منتجات فاخرة فقط", desc: "نستخدم فقط منتجات التجميل الفاخرة المعترف بها دوليًا والتي تغذي وتحمي شعرك وبشرتك وأظافرك." },
        { title: "خبراء تجميل", desc: "يجلب فريقنا من المحترفين المدربين سنوات من الخبرة وشغفًا حقيقيًا لمساعدتك على الظهور والشعور بأفضل حال." },
        { title: "نهج شخصي", desc: "لا علاجات نمطية. كل خدمة مصممة لملامحك وتفضيلاتك وأسلوب حياتك لتحقيق نتائج تشعرك بأنها أنتِ حقًا." },
        { title: "مساحة ترحيبية", desc: "تم تصميم صالوننا في الخالدية ليكون ملاذًا — هادئًا ونظيفًا ومريحًا من اللحظة التي تدخلين فيها الباب." }
      ],
      stats: [
        { value: "+9", label: "خدمات تجميل" },
        { value: "+500", label: "عميلة سعيدة" },
        { value: "+5", label: "سنوات خبرة" },
        { value: "100%", label: "منتجات فاخرة" }
      ]
    },
    bookingCTA: {
      eyebrow: "احجزي زيارتك",
      title1: "احجزي تجربة",
      title2: "جمالك",
      desc: "الحجز في فيليس بسيط وشخصي. لا نماذج معقدة عبر الإنترنت — فقط تصفحي خدماتنا، أرسلي لنا رسالة واتساب سريعة، وسنتكلف بالباقي.",
      bookBtn: "احجزي عبر واتساب",
      available: "متاح يومياً · آخر موعد الساعة 6:00 م",
      videoText1: "داخل صالون فيليس",
      videoText2: "الخالدية، الدوحة",
      videoText3: "مفتوح يومياً"
    },
    location: {
      eyebrow: "جدينا",
      title1: "زوري",
      title2: "فيليس",
      desc: "جدي صالون فيليس للشعر في النجمة، الدوحة، على شارع الخالدية. تواصلي معنا عبر واتساب لترتيب موعدك ومواقف السيارات.",
      info: [
        { label: "الموقع", value: "النجمة، الدوحة، قطر", secondary: "شارع الخالدية" },
        { label: "واتساب", value: "+974 5525 7237" },
        { label: "المواقف", value: "موقف مجاني متاح عند الحجز" }
      ],
      hoursTitle: "ساعات العمل",
      hours: [
        { day: "الأحد - الخميس", time: "9:00 ص - 8:00 م" },
        { day: "الجمعة", time: "2:00 م - 8:00 م" },
        { day: "السبت", time: "9:00 ص - 8:00 م" }
      ],
      lastAppt: "آخر موعد مقبول الساعة 6:00 م",
      mapTitle: "صالون فيليس للشعر في النجمة، الدوحة، قطر",
      getDirections: "احصلي على الاتجاهات"
    },
    faq: {
      eyebrow: "أسئلة شائعة",
      title1: "أسئلة",
      title2: "شائعة",
      desc: "كل ما تحتاجين معرفته قبل زيارتك. لم تجدي إجابتك؟ راسلينا على واتساب.",
      items: [
        { q: "كيف أحجز موعداً في فيليس؟", a: "الحجز سهل — أرسلي لنا رسالة على واتساب عبر الرقم +974 5525 7237 مع الخدمة المفضلة لديك، التاريخ، والوقت. سيؤكد فريقنا موعدك في غضون دقائق خلال ساعات العمل." },
        { q: "ما الخدمات التي تقدمونها؟", a: "نقدم مجموعة كاملة من خدمات التجميل للسيدات بما في ذلك تصفيف الشعر، المانيكير، الباديكير، المكياج، تركيب الرموش، علاجات البشرة، إزالة الشعر، المساج، الضفائر، وتركيب الباروكات. يتم تنفيذ كل خدمة باستخدام منتجات فاخرة من قبل متخصصين مدربين." },
        { q: "أين تقع فيليس؟", a: "يقع صالون فيليس للشعر والجمال في الخالدية، الدوحة، قطر. يتوفر موقف سيارات مجاني لجميع الحجوزات المؤكدة. سنشاركك الاتجاهات الدقيقة عند حجز موعدك." },
        { q: "ما هي ساعات العمل لديكم؟", a: "نحن نفتح من الأحد إلى الخميس والسبت من 9:00 صباحاً حتى 8:00 مساءً، والجمعة من 2:00 مساءً حتى 8:00 مساءً. يرجى ملاحظة أن آخر موعد يتم قبوله في الساعة 6:00 مساءً لضمان حصول كل عميلة على كامل انتباهنا." },
        { q: "هل أحتاج للحجز مسبقاً؟", a: "نوصي بشدة بالحجز المسبق، خاصة في عطلات نهاية الأسبوع والمناسبات الخاصة مثل حفلات الزفاف أو الفعاليات. الزيارات بدون موعد مرحب بها عندما يسمح التوافر، ولكن الحجز عبر واتساب يضمن مكانك ومواقف السيارات." },
        { q: "ما المنتجات التي تستخدمونها؟", a: "نستخدم حصرياً منتجات تجميل فاخرة ومعترف بها دولياً وآمنة وفعالة. يختار فريقنا كل منتج بعناية لضمان أفضل النتائج لشعرك وبشرتك وأظافرك." },
        { q: "هل فيليس صالون مخصص للسيدات فقط؟", a: "نعم، فيليس هو صالون تجميل للسيدات. لقد أنشأنا بيئة مريحة وخاصة حيث يمكن للنساء الاسترخاء والاستمتاع بعلاجات التجميل بسلام تام." },
        { q: "هل يمكنني الحصول على مكياج للعرائس أو الفعاليات؟", a: "بالتأكيد. متخصصو المكياج لدينا متخصصون في مكياج العرائس والفعاليات والمناسبات الخاصة. نوصي بحجز جلسة تجريبية قبل يومك الكبير حتى نتمكن من إتقان إطلالتك معاً." }
      ],
      still: "لا تزال لديك أسئلة؟",
      askWhatsapp: "اسألينا على واتساب"
    },
    about: {
      eyebrow: "قصتنا",
      title1: "أكثر من جمال.",
      title2: "إنها فيليس.",
      desc: "مساحة تجميل في الخالدية، الدوحة، أُنشئت للنساء اللواتي يرغبن في خدمات تجميل استثنائية دون فقدان دفء التجربة الشخصية.",
      beginning: "البداية",
      title3: "مساحة أُنشئت",
      title4: "مع وضع النساء في الاعتبار",
      p1: "نشأت فيليس من فكرة بسيطة: يجب أن يتركك موعد التجميل وأنتِ تشعرين بالرعاية والثقة وبتكوني على طبيعتك تماماً.",
      p2: "بناً على ذلك في الخالدية، الدوحة، تجمع فيليس بين الشعر والأظافر والمكياج والرموش والعناية بالبشرة وإزالة الشعر والباروكات وتجارب تجميل أخرى في مساحة ترحيبية.",
      p3: "نحن نؤمن أن العمل الجميل العظيم يتعلق بأكثر من مجرد اتباع الصيحات. يتعلق بالاستماع وفهم أسلوبك والاهتمام بالتفاصيل التي تجعل تجربتك شخصية.",
      p4: "سواء كنتِ تستعدين لمناسبة خاصة أو ببساطة تخصصين وقتاً لنفسك، فيليس هي مكان لإبطاء الوتيرة، والشعور بالراحة، والاستمتاع بالاهتمام.",
      discoverMore: "اكتشفي خدماتنا",
      experienceEyebrow: "تجربة فيليس",
      title5: "تعالي كما أنت.",
      title6: "غادري وأنت تشعرين بالرائعة.",
      experienceDesc: "نحن لا نؤمن بأن الفخامة تحتاج إلى أن تكون معقدة. في فيليس، توجد في الأشياء الصغيرة — خدمة مدروسة، عمل دقيق، أجواء مريحة، والثقة التي تشعرين بها عندما ينجمل كل شيء معاً.",
      experienceSub: "يتم التعامل مع كل موعد بسرية واهتمام واحترام لراحة كل عميلة.",
      philosophy: [
        { number: "01", title: "جمال بنية", description: "كل خدمة تبدأ بفهم ما تريدين وتنتهي بالاهتمام بالتفاصيل التي تجعل النتيجة تبدو ملكاً لكِ حقاً." },
        { number: "02", title: "تجربة دافئة", description: "يجب ألا تشعر الفخامة بالبرودة أو الترهيب أبداً. صُممت فيليس لتشعرك بالترحيب والراحة والشخصية والاهتمام الحقيقي." },
        { number: "03", title: "جودة يمكنك الوثوق بها", description: "من تقنياتنا إلى المنتجات التي نختارها، نحن نركز على الجودة والاتساق والنتائج التي تجعلك ترغبين في العودة." },
        { number: "04", title: "أنتِ أولاً", description: "وقتك وراحتك وتفضيلاتك وثقتك تهم. نستمع أولاً، ونوصي بصدق، ولا نؤمن أبداً بالضغط غير الضروري." }
      ],
      privacyTitle: "الجمال، الراحة والخصوصية",
      privacyDesc: "ليست كل تجربة في فيليس تحتاج إلى أن تُصور. تُحتفظ ببعض الخدمات عمداً خاصة حتى تتمكن عميلاتنا من الاستمتاع بمواعدهن براحة وخصوصية تامة.",
      closingTitle1: "يجب أن يكون الجمال",
      closingTitle2: "شخصياً.",
      closingDesc: "هذا هو جوهر فيليس.",
      ctaTitle1: "هل أنت مستعدة لتجربة",
      ctaTitle2: "فيليس؟",
      ctaDesc: "تجربة الجمال القادمة على بُعد رسالة واتساب فقط.",
      ctaBtn1: "احجزي عبر واتساب",
      ctaBtn2: "استكشفي الخدمات"
    },
    booking: {
      eyebrow: "الحجوزات",
      title1: "احجزي",
      title2: "لحظتك.",
      desc: "تأمين وقتك في فيليس أمر بسيط عمداً. تخطي النماذج المعقدة — فقط أرسلي لنا رسالة سريعة، وسنتولى التفاصيل من أجلك.",
      ctaTitle: "هل أنت مستعدة لتأمين مكانك؟",
      ctaDesc: "اضغطي أدناه لفتح واتساب. يستغرق الأمر بضع ثوانٍ فقط لتثبيت الوقت المفضل لديك.",
      ctaBtn: "افتحي واتساب للحجز",
      phone: "+974 5525 7237",
      howTitle1: "كيف",
      howTitle2: "يعمل",
      steps: [
        { number: "01", title: "استكشفي الخدمات", description: "خذي لحظة لتصفح علاجاتنا والعثور على التجربة التي تناسبك.", linkText: "عرض الخدمات" },
        { number: "02", title: "أرسلي رسالة", description: "تواصلي عبر واتساب مع خدمتك المفضلة والتاريخ والوقت. لا تترددي في طرح أي أسئلة مسبقاً.", linkText: "افتحي واتساب" },
        { number: "03", title: "تلقي التأكيد", description: "سيرد فريقنا بسرعة خلال ساعات العمل لتأمين موعدك ومشاركة أي تفاصيل تحضيرية." },
        { number: "04", title: "احضري واسترخي", description: "احضري في وقتك المحجوز، واستقري، ودعي متخصصينا يتولون الباقي." }
      ],
      tipsTitle: "قبل زيارتك",
      tips: [
        "لأفضل توافر، نوصي بالحجز قبل 24 ساعة على الأقل",
        "عطلات نهاية الأسبوع والمواقع المسائية هي أكثر أوقاتنا ازدحاماً — التخطيط المسبق يضمن وقتك المفضل",
        "يرجى إبلاغنا بأي حساسية جلدية عند مراسلتنا",
        "الوصول قبل 5 دقائق فقط يمنحك وقتاً للاستقرار قبل أن نبدأ",
        "تصفيف الأعراس والمناسبات الخاصة يبدأ باستشارة قصيرة"
      ]
    },
    contact: {
      eyebrow: "زيارتك",
      title1: "نحب أن",
      title2: "نراك.",
      desc: "إيجاد لحظة من الهدوء يجب أن يكون سهلاً. نحن في الخالدية مع مواقف سيارات مجانية مرتبة لكل موعد مؤكد. للحصول على أسرع رد بخصوص التوافر أو الاستفسارات، تواصلي معنا مباشرة عبر واتساب.",
      cards: [
        { title: "موقعنا", lines: ["الخالدية", "الدوحة، قطر"] },
        { title: "رسالة مباشرة", lines: ["+974 5525 7237"] },
        { title: "مواقف مجانية", lines: ["محجوزة لراحتك", "مع كل حجز مؤكد"] }
      ],
      hoursTitle: "ساعات",
      hoursSub: "عمل الصالون",
      hours: [
        { day: "الأحد - الخميس", time: "9:00 ص - 8:00 م" },
        { day: "الجمعة", time: "2:00 م - 8:00 م" },
        { day: "السبت", time: "9:00 ص - 8:00 م" }
      ],
      lastApptNote: "لضمان تجربة مريحة، يتم قبول آخر موعد الساعة 6:00 مساءً",
      quickTitle: "هل تحتاجين إجابة سريعة؟",
      quickDesc: "سواء كان لديك سؤال حول خدمة معينة أو تريدين التحقق من الموعد المتاح التالي، أرسلي لنا رسالة على واتساب. إنه الخط الأكثر مباشرة لفريقنا.",
      quickBtn: "راسلينا على واتساب"
    },
    gallery: {
      eyebrow: "أعمال فيليس",
      title1: "صُمم بـ",
      title2: "نية.",
      desc: "كل أسلوب نبتكره هو انعكاس للشخص الذي يرتديه. تصفحي مجموعة منتقاة من تحويلات الشعر، فن الأظافر المعقد، وتركيب الباروكات المثالي. بينما يعرض هذا المعرض بعض أعمالنا المرئية المفضلة، إلا أنه يمثل جزءاً فقط من تجربة الجمال الكاملة التي تنتظرك في استوديو الخالدية.",
      filters: ["الكل", "شعر", "أظافر", "باروكات"],
      privacyTitle: "الخصوصية جزء من التجربة.",
      privacyDesc: "نحن نؤمن بأن الجمال الحقيقي يجب أن يُستمتع به في اللحظة. بينما نحب مشاركة فنوننا في الشعر والأظافر والباروكات، يتم إبقاء خدمات مثل العناية بالوجه والتدليك وعلاجات الجسم بعيدة عن الكاميرا عمداً. هذا يضمن أن كل ضيفة يمكنها الاسترخاء تماماً، مع العلم أن تجربتها الشخصية تبقى خاصة تماماً.",
      lightboxLabel: "صالون فيليس للشعر والجمال",
      closeImg: "إغلاق الصورة"
    },
    notFound: {
      label: "الصفحة غير موجودة",
      title1: "حتى أفضل مصففي الشعر لدينا",
      title2: "لا يمكنهم العثور على هذه الصفحة.",
      desc: "يبدو أن هذه الصفحة غادرت المبنى - تماماً مثل أطرافك المتقصفة بعد قصة جيدة. دعينا نعيدك إلى مكان جميل.",
      btn1: "العودة للرئيسية",
      btn2: "تصفح الخدمات",
      slogan: "أنا مجرد فتاة تحب أن تجعل الفتيات الأخريات يشعرن بالرائعة"
    },
    services: {
      eyebrow: "الجمال، الشعر والعناية",
      title1: "جمال مصنوع",
      title2: "شخصي.",
      desc: "اكتشفي خدمات الشعر والجمال والعناية الشخصية المصممة لمساعدتك على الظهور بجمال والشعور بالثقة والمغادرة من فيليس وأنت تشعرين بانتعاش كامل.",
      bookBtn: "احجزي موعداً",
      exploreBtn: "استكشفي أعمالنا",
      introEyebrow: "خدماتنا",
      introTitle1: "أكثر من زيارة",
      introTitle2: "لصالون.",
      introDesc: "في صالون فيليس للشعر والجمال، كل موعد هو فرصة لتأخذ بعض الوقت لنفسك. من الشعر المصفف بعناية إلى الأظافر الجميلة والمكياج والرموش والعلاجات المريحة، خدماتنا مصممة حول الطريقة التي ترغبين في الظهور والشعور بها.",
      highlights: ["تصفيف الشعر", "الأظافر والجمال", "مكياج", "العناية بالبشرة", "رموش", "خدمات الباروكات"],
      gridEyebrow: "ما نقدمه",
      gridTitle1: "جدي",
      gridTitle2: "خدمتك المثالية.",
      gridDesc: "استكشفي خدمات الجمال لدينا واختاري التجربة التي تناسبك.",
      items: [
        { number: "01", title: "مانيكير", description: "أظافر منتهية بجمال مع اهتمام دقيق بالشكل والتفاصيل ولمسة مصقولة." },
        { number: "02", title: "باديكير", description: "تجربة العناية بالقدمين مصممة لترك قدميك منتعشتين ومعتنى بهما وجميلة." },
        { number: "03", title: "مكياج", description: "إطلالات مكياج أنيقة مصممة لمناسبتك وأسلوبك واللمسة التي ترغبين في تحقيقها." },
        { number: "04", title: "ضفائر", description: "أساليب ضفائر جميلة يتم إنشاؤها بدقة وإبداع واهتمام بشعرك الطبيعي." },
        { number: "05", title: "علاج الوجه", description: "تجربة وجه مهدئة تركز على التنظيف والانتعاش وإعطاء بشرتك مظهراً معتنى به." },
        { number: "06", title: "تجميل بالنسج", description: "أساليب نسج متعددة الاستخدامات تم إنشاؤها لتكمل إطلالتك مع منحك الحرية للتعبير عن نفسك." },
        { number: "07", title: "إزالة الشعر", description: "خدمات إزالة الشعر الاحترافية التي تتم بعناية للمس الناعم والنظيف." },
        { number: "08", title: "تركيب رموش", description: "عززي عينيك برموش مصممة beautifully لتكمل ملامحك." },
        { number: "09", title: "مساج", description: "خذي لحظة للاسترخاء مع تجربة مساج مريحة في بيئة صالون هادئة." },
        { number: "10", title: "تركيب باروكة", description: "تركيب باروكة احترافي مع الاهتمام بالوضع والتصفيف ولمسة طبيعية المظهر." }
      ],
      expEyebrow: "تجربة فيليس",
      expTitle1: "تعالي من أجل",
      expTitle2: "الجمال.",
      expTitle3: "ابقِ للشعور.",
      expDesc: "نحن نؤمن بأن الجمال شخصي. لهذا يتركز نهجنا حول الاستماع لما تريدينه، وفهم أسلوبك وإعطاء اهتمام للتفاصيل التي تهمك.",
      exp1Title: "أسلوبك",
      exp1Desc: "أحضري إلهامك أو أفكارك أو ببساطة أخبرينا بما تحتاجينه.",
      exp2Title: "خبرتنا",
      exp2Desc: "سنساعد في تحويل رؤيتك إلى إطلالة نهائية ستحبينها.",
      ctaEyebrow: "لحظة جمالك",
      ctaTitle1: "مستعدة لـ",
      ctaTitle2: "إطلالتك القادمة؟",
      ctaDesc: "من الضفائر الجميلة والباروكات المثالية إلى الأظافر والمكياج والعناية بالوجه والرموش والمزيد، دعي فيليس للشعر والجمال تخلق إطلالة مصممة لك.",
      ctaWhatsapp: "راسلينا على واتساب"
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("philis-language");
    return savedLanguage === "AR" ? "AR" : "EN";
  });

  useEffect(() => {
    localStorage.setItem("philis-language", language);
    document.documentElement.lang = language === "AR" ? "ar" : "en";
    document.documentElement.dir = language === "AR" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      t: translations[language],
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider.");
  }
  return context;
}
