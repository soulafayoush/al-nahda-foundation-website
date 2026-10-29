export type Lang = "ar" | "en";

export interface Dict {
  dir: "rtl" | "ltr";
  nav: {
    home: string;
    about: string;
    projects: string;
    structure: string;
    contact: string;
    goals: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaAbout: string;
    ctaContact: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
    scroll: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    founded: string;
    foundedDate: string;
    license: string;
    licenseDesc: string;
    areas: string;
    areasList: string[];
    features: { title: string; desc: string }[];
  };
  mission: {
    badge: string;
    title: string;
    missionTitle: string;
    visionTitle: string;
    missionPoints: string[];
    visionPoints: string[];
  };
  goals: {
    badge: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string; icon: string }[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      community: { title: string; desc: string };
      relief: { title: string; desc: string };
      awareness: { title: string; desc: string };
    };
    ongoing: string;
    beneficiaries: string;
    viewAll: string;
    gallery: string;
  };
  structure: {
    badge: string;
    title: string;
    subtitle: string;
    generalAssembly: string;
    board: string;
    departments: string;
    president: string;
    vicePresident: string;
    secretary: string;
    treasurer: string;
    roles: Record<string, string>;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    locationValue: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    followUs: string;
    rights: string;
    quickLinks: string;
  };
}

export const translations: Record<Lang, Dict> = {
  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      projects: "أعمالنا",
      structure: "الهيكلية",
      contact: "تواصل معنا",
      goals: "أهدافنا",
    },
    hero: {
      badge: "مؤسسة النهضة للتنمية",
      title: "أثرٌ نحو النهضة",
      titleAccent: "نصنع نهضة مستدامة تبدأ بالإنسان وتقاس بالأثر",
      subtitle:
        "مؤسسة غير ربحية تعنى بخدمة الإنسان وتنمية المجتمع عبر مبادرات إغاثية وتنموية، تعمل على نشر الوعي وتعزيز التماسك المجتمعي والتركيز على التعليم والتمكين ودعم الفئات الهشة.",
      ctaAbout: "من نحن",
      ctaContact: "تواصل معنا",
      stat1Label: "مشروع ومبادرة",
      stat1Value: "+35",
      stat2Label: "مستفيد مباشر",
      stat2Value: "+2900",
      stat3Label: "شجرة وشتلة",
      stat3Value: "+1400",
      scroll: "اكتشف المزيد",
    },
    about: {
      badge: "من نحن",
      title: "مؤسسة النهضة للتنمية",
      p1: "مؤسسة النهضة للتنمية هي مؤسسة غير ربحية تعنى بخدمة الإنسان وتنمية المجتمع عبر مبادرات إغاثية وتنموية. تعمل على نشر الوعي وتعزيز التماسك المجتمعي، مع التركيز على التعليم والتمكين ودعم الفئات الهشة والخدمات الاجتماعية، إضافة إلى الاهتمام بالقضايا البيئية والمبادرات الخضراء، بهدف تحقيق تنمية مستدامة وأثر مجتمعي فعّال.",
      p2: "بدأت المؤسسة أعمالها بعد تحرير سوريا، وحصلت على الترخيص الرسمي من وزارة الشؤون الاجتماعية والعمل، وتعمل حالياً في منطقة القصير وريفها، إضافة إلى تنفيذ بعض الأنشطة في المخرم بريف حمص ودير عطية بريف دمشق، ضمن جهودها لتوسيع نطاق أثرها التنموي.",
      founded: "تاريخ التأسيس",
      foundedDate: "1 يناير 2025",
      license: "الترخيص الرسمي",
      licenseDesc: "وزارة الشؤون الاجتماعية والعمل",
      areas: "مناطق العمل",
      areasList: ["القصير وريفها", "المخرم - ريف حمص", "دير عطية - ريف دمشق"],
      features: [
        { title: "تنمية مستدامة", desc: "مبادرات بيئية وخضراء تحقق أثراً طويل الأمد" },
        { title: "تمكين المجتمع", desc: "تعليم وتدريب وبناء قدرات الأفراد والفئات الهشة" },
        { title: "إغاثة وتماسك", desc: "برامج إغاثية تعزز التماسك الاجتماعي والتضامن" },
      ],
    },
    mission: {
      badge: "الرسالة والرؤية",
      title: "نحو نهضة مستدامة",
      missionTitle: "رسالتنا",
      visionTitle: "رؤيتنا",
      missionPoints: [
        "تنفيذ مبادرات إغاثية وتنموية",
        "تعزيز التعليم والوعي",
        "دعم الفئات الهشة والأكثر احتياجاً",
        "المساهمة في تطوير المجتمع",
        "تحقيق أثر مستدام",
      ],
      visionPoints: [
        "تحقيق تنمية مستدامة",
        "بناء مجتمع متماسك",
        "وضع الإنسان في صميم عملية التنمية",
        "صناعة أثر إيجابي طويل الأمد",
      ],
    },
    goals: {
      badge: "أهدافنا",
      title: "نحو مجتمع أفضل",
      subtitle: "نسعى لتحقيق تنمية مستدامة وأثر إيجابي طويل الأمد يدعم الإنسان والمجتمع",
      items: [
        { title: "التماسك المجتمعي", desc: "نشر الوعي وتعزيز التماسك المجتمعي وتقوية روابط التضامن بين الأفراد.", icon: "users" },
        { title: "البيئة والاستدامة", desc: "دعم المبادرات البيئية والمساهمة في زيادة المساحات الخضراء وحماية البيئة.", icon: "leaf" },
        { title: "التعليم وبناء القدرات", desc: "تعزيز التعليم وبناء قدرات الأفراد عبر برامج تدريبية وتأهيلية متخصصة.", icon: "graduation" },
        { title: "دعم الفئات الهشة", desc: "دعم الفئات الهشة والأكثر احتياجاً وتوفير الخدمات الأساسية لتحسين جودة الحياة.", icon: "heart" },
        { title: "التمكين الاقتصادي والاجتماعي", desc: "تمكين الأفراد اقتصادياً واجتماعياً عبر مشاريع مدرة للدخل وفرص التشغيل.", icon: "trending" },
        { title: "تحسين الخدمات الاجتماعية", desc: "تطوير الخدمات الاجتماعية بما يحسن جودة الحياة ويلبي احتياجات المجتمع.", icon: "building" },
      ],
    },
    projects: {
      badge: "أعمالنا السابقة",
      title: "مشاريع ومبادرات",
      subtitle: "مجموعة من المشاريع والمبادرات التي نفذناها خدمةً للمجتمع والإنسان",
      categories: {
        community: { title: "المبادرات المجتمعية والبيئية", desc: "مشاريع تأهيل وتجميل وزراعة ونظافة مجتمعية" },
        relief: { title: "الإغاثة والتمكين والتعليم", desc: "برامج إغاثية وتمكين وتعليم ودعم للفئات الهشة" },
        awareness: { title: "التوعية والأنشطة المجتمعية", desc: "حملات توعوية وأنشطة ترفيهية ومجتمعية" },
      },
      ongoing: "قائم",
      beneficiaries: "مستفيد",
      viewAll: "عرض كل المشاريع",
      gallery: "معرض الصور",
    },
    structure: {
      badge: "الهيكلية الإدارية",
      title: "هيكلنا التنظيمي",
      subtitle: "نعمل ضمن هيكل تنظيمي مرن يعزز الكفاءة والشفافية، ويضمن التكامل بين الإدارات لتحقيق أهداف المؤسسة ورسالتها",
      generalAssembly: "الهيئة العامة",
      board: "مجلس الأمناء",
      departments: "الأقسام والإدارات",
      president: "رئيس مجلس الأمناء",
      vicePresident: "نائب الرئيس",
      secretary: "أمين السر",
      treasurer: "أمين الصندوق",
      roles: {
        pr: "إدارة العلاقات العامة",
        info: "إدارة المعلومات",
        hr: "إدارة الموارد البشرية",
        projects: "إدارة المشاريع",
        media: "المكتب الإعلامي",
        finance: "الحماية المالية والمساءلة",
        child: "حماية الطفل",
        psychosocial: "الدعم النفسي والتعلم",
        financial: "المسؤول المالي",
        warehouse: "أمين المستودع",
        mne: "المراقبة والتقييم",
      },
    },
    contact: {
      badge: "تواصل معنا",
      title: "نحن هنا لخدمتكم",
      subtitle: "للتواصل والاستفسار أو الشراكة في المشاريع التنموية، يسعدنا تواصلكم معنا",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      locationValue: "مدينة القصير - طريق الغيضة، حمص، سوريا",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formSubject: "الموضوع",
      formMessage: "رسالتك",
      formSubmit: "إرسال الرسالة",
      formSuccess: "تم إرسال رسالتك بنجاح! سنتواصل معكم قريباً.",
      followUs: "تابعنا",
      rights: "جميع الحقوق محفوظة",
      quickLinks: "روابط سريعة",
    },
  },
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About Us",
      projects: "Our Work",
      structure: "Structure",
      contact: "Contact",
      goals: "Goals",
    },
    hero: {
      badge: "Al-Nahda Foundation for Development",
      title: "Impact Toward Renaissance",
      titleAccent: "Building sustainable development that starts with people and is measured by impact",
      subtitle:
        "A non-profit organization dedicated to serving people and developing communities through relief and development initiatives, spreading awareness, strengthening social cohesion, and focusing on education, empowerment, and support for vulnerable groups.",
      ctaAbout: "About Us",
      ctaContact: "Contact Us",
      stat1Label: "Projects & Initiatives",
      stat1Value: "+35",
      stat2Label: "Direct Beneficiaries",
      stat2Value: "+2,900",
      stat3Label: "Trees & Saplings",
      stat3Value: "+1,400",
      scroll: "Discover More",
    },
    about: {
      badge: "About Us",
      title: "Al-Nahda Foundation for Development",
      p1: "Al-Nahda Foundation for Development is a non-profit organization dedicated to serving people and developing communities through relief and development initiatives. It works to spread awareness and strengthen social cohesion, focusing on education, empowerment, supporting vulnerable groups and social services, as well as environmental issues and green initiatives, aiming to achieve sustainable development and effective social impact.",
      p2: "The Foundation began its work following the liberation of Syria, and obtained official licensing from the Ministry of Social Affairs and Labor. It currently operates in the Al-Qusayr area and its countryside, in addition to implementing some activities in Al-Mukhram (Homs countryside) and Deir Atiyah (Damascus countryside), as part of its efforts to expand the scope of its developmental impact.",
      founded: "Founded",
      foundedDate: "January 1, 2025",
      license: "Official License",
      licenseDesc: "Ministry of Social Affairs & Labor",
      areas: "Areas of Operation",
      areasList: ["Al-Qusayr & its countryside", "Al-Mukhram — Homs countryside", "Deir Atiyah — Damascus countryside"],
      features: [
        { title: "Sustainable Development", desc: "Environmental and green initiatives with lasting impact" },
        { title: "Community Empowerment", desc: "Education, training and capacity building for individuals" },
        { title: "Relief & Cohesion", desc: "Relief programs that strengthen social cohesion and solidarity" },
      ],
    },
    mission: {
      badge: "Mission & Vision",
      title: "Toward Sustainable Renaissance",
      missionTitle: "Our Mission",
      visionTitle: "Our Vision",
      missionPoints: [
        "Implementing relief and development initiatives",
        "Enhancing education and awareness",
        "Supporting vulnerable and most-needy groups",
        "Contributing to community development",
        "Achieving sustainable impact",
      ],
      visionPoints: [
        "Achieving sustainable development",
        "Building a cohesive society",
        "Putting humans at the center of development",
        "Creating long-term positive impact",
      ],
    },
    goals: {
      badge: "Our Goals",
      title: "Toward a Better Society",
      subtitle: "We strive to achieve sustainable development and long-term positive impact that supports people and society",
      items: [
        { title: "Social Cohesion", desc: "Spreading awareness and strengthening social cohesion and solidarity among individuals.", icon: "users" },
        { title: "Environment & Sustainability", desc: "Supporting environmental initiatives and increasing green spaces to protect the environment.", icon: "leaf" },
        { title: "Education & Capacity Building", desc: "Enhancing education and building individual capacities through specialized training programs.", icon: "graduation" },
        { title: "Supporting Vulnerable Groups", desc: "Supporting vulnerable and most-needy groups and providing essential services to improve quality of life.", icon: "heart" },
        { title: "Economic & Social Empowerment", desc: "Empowering individuals economically and socially through income-generating projects and employment opportunities.", icon: "trending" },
        { title: "Improving Social Services", desc: "Developing social services to improve quality of life and meet community needs.", icon: "building" },
      ],
    },
    projects: {
      badge: "Our Previous Work",
      title: "Projects & Initiatives",
      subtitle: "A selection of projects and initiatives we have implemented in service of the community",
      categories: {
        community: { title: "Community & Environmental Initiatives", desc: "Rehabilitation, beautification, planting and community cleanliness projects" },
        relief: { title: "Relief, Empowerment & Education", desc: "Relief, empowerment, education and support programs for vulnerable groups" },
        awareness: { title: "Awareness & Community Activities", desc: "Awareness campaigns, recreational and community activities" },
      },
      ongoing: "Ongoing",
      beneficiaries: "beneficiaries",
      viewAll: "View All Projects",
      gallery: "Photo Gallery",
    },
    structure: {
      badge: "Organizational Structure",
      title: "Our Organizational Structure",
      subtitle: "We work within a flexible structure that promotes efficiency and transparency, ensuring integration between departments to achieve the Foundation's goals and mission",
      generalAssembly: "General Assembly",
      board: "Board of Trustees",
      departments: "Departments & Management",
      president: "Board President",
      vicePresident: "Vice President",
      secretary: "Secretary",
      treasurer: "Treasurer",
      roles: {
        pr: "Public Relations",
        info: "Information Management",
        hr: "Human Resources",
        projects: "Project Management",
        media: "Media Office",
        finance: "Financial Protection & Accountability",
        child: "Child Protection",
        psychosocial: "Psychosocial Support & Learning",
        financial: "Financial Officer",
        warehouse: "Warehouse Keeper",
        mne: "Monitoring & Evaluation",
      },
    },
    contact: {
      badge: "Contact Us",
      title: "We Are Here to Serve You",
      subtitle: "For contact, inquiries, or partnership in development projects, we are happy to hear from you",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Al-Qusayr City - Al-Ghaydah Road, Homs, Syria",
      formName: "Full Name",
      formEmail: "Email Address",
      formSubject: "Subject",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      formSuccess: "Your message has been sent successfully! We will contact you soon.",
      followUs: "Follow Us",
      rights: "All Rights Reserved",
      quickLinks: "Quick Links",
    },
  },
};
