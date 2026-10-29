import type { Lang } from "./i18n";

export type ProjectCategory = "community" | "relief" | "awareness";

export interface Project {
  id: string;
  category: ProjectCategory;
  image?: string;
  startDate: string;
  endDate: string;
  ongoing?: boolean;
  stats?: { value: string; label: { ar: string; en: string } }[];
  title: { ar: string; en: string };
  desc: { ar: string; en: string };
}

const IMG = "/images/alnahda/pdf";

/**
 * Projects extracted verbatim from the Al-Nahda profile PDF (pages 6–8).
 * Photos are real images extracted from the PDF and converted to WebP.
 * Projects marked without `image` have no matching photo in the PDF.
 *
 * English translations are professional (not literal) adaptations.
 */
export const projects: Project[] = [
  // ===== Community & Environmental Initiatives (Page 6) =====
  {
    id: "my-city",
    category: "community",
    image: `${IMG}/street-cleanup.webp`,
    startDate: "2025-01-19",
    endDate: "2025-02-18",
    stats: [
      { value: "+1400", label: { ar: "شجرة وشتلة", en: "Trees & saplings" } },
      { value: "+300", label: { ar: "وردة بلدية", en: "Municipal flowers" } },
    ],
    title: { ar: "مدينتي أجمل", en: "My Beautiful City" },
    desc: {
      ar: "زراعة 400 شجرة و1000 شجرة زيتون، وتنفيذ 300 زينة ووردة بلدية، وحملات تنظيف في شوارع وحدائق مدينة القصير.",
      en: "Planting 400 trees and 1,000 olive saplings, installing 300 floral arrangements, and running cleanliness campaigns across the streets and gardens of Al-Qusayr.",
    },
  },
  {
    id: "city-entrance",
    category: "community",
    image: `${IMG}/roundabout-crowd.webp`,
    startDate: "2025-04-25",
    endDate: "2025-06-06",
    title: { ar: "مدخل المدينة", en: "City Gateway Rehabilitation" },
    desc: {
      ar: "إعادة تأهيل مدخل مدينة القصير عبر ترميم الدوار وزراعة الحدائق المحيطة، واختُتم المشروع برفع العلم السوري على الدوار الجديد.",
      en: "Rehabilitating the entrance of Al-Qusayr by refurbishing the roundabout and planting surrounding gardens. The project concluded by raising the Syrian flag over the new roundabout.",
    },
  },
  {
    id: "karaj-garden",
    category: "community",
    image: `${IMG}/wheelbarrow.webp`,
    startDate: "2025-01-05",
    endDate: "2025-05-05",
    title: { ar: "حديقة الكراج", en: "Al-Karaj Garden" },
    desc: {
      ar: "تأهيل الحديقة عبر أعمال التنظيف وترميم السور وتقليم الأشجار لتحسين المظهر العام والمساحات الخضراء.",
      en: "Rehabilitating the garden through cleaning, fence restoration, and tree pruning to enhance the overall appearance and green spaces.",
    },
  },
  {
    id: "sewage",
    category: "community",
    startDate: "2025-05-11",
    endDate: "2025-05-11",
    title: { ar: "إغلاق الحفر الصحية", en: "Sanitation Pit Closure" },
    desc: {
      ar: "إغلاق حفر الصرف الصحي الموجودة في الحي الغربي والحي الشمالي بعد ورود شكاوى عديدة من الأهالي.",
      en: "Closing open sewage pits in the Western and Northern neighborhoods following numerous complaints from residents.",
    },
  },
  {
    id: "slaughterhouse",
    category: "community",
    image: `${IMG}/women-cleaning.webp`,
    startDate: "2025-05-21",
    endDate: "2025-05-21",
    title: { ar: "المسلخ البلدي", en: "Municipal Slaughterhouse" },
    desc: {
      ar: "تنظيف وتجهيز مبنى المسلخ ليصبح صالحاً للاستخدام من قبل البلدية.",
      en: "Cleaning and preparing the municipal slaughterhouse building to render it fit for operational use.",
    },
  },
  {
    id: "automated-oven",
    category: "community",
    startDate: "2025-05-30",
    endDate: "2025-05-30",
    title: { ar: "الفرن الآلي", en: "Automated Bakery" },
    desc: {
      ar: "تنفيذ حملة لتنظيف الفرن الآلي بالتعاون مع الفرق التطوعية في المدينة، تشمل إزالة المخلفات وتعقيم المعدات وتحسين بيئة العمل.",
      en: "Conducting a cleanup campaign at the automated bakery in cooperation with local volunteer teams, including waste removal, equipment disinfection, and workplace improvement.",
    },
  },
  {
    id: "cleanliness",
    category: "community",
    image: `${IMG}/tarp-work.webp`,
    startDate: "2025-03-03",
    endDate: "2025-03-07",
    title: { ar: "النظافة المجتمعية", en: "Community Cleanliness Campaign" },
    desc: {
      ar: "تنفيذ حملة توعوية للنظافة والممتلكات العامة بمشاركة الأهالي والأطفال، مع توزيع بروشورات وتوفير وسائل مهملة.",
      en: "Launching an awareness campaign on cleanliness and public property with the participation of residents and children, distributing brochures and providing cleaning tools.",
    },
  },
  {
    id: "debris",
    category: "community",
    image: `${IMG}/men-shoveling.webp`,
    startDate: "2025-02-19",
    endDate: "2025-02-24",
    title: { ar: "رفع الأنقاض", en: "Debris Clearance" },
    desc: {
      ar: "التعاون مع الدفاع المدني في إزالة الأنقاض وتنظيف أحد أحياء مدينة القصير خلال خمسة أيام.",
      en: "Collaborating with Civil Defense to remove debris and clean one of Al-Qusayr's neighborhoods within five days.",
    },
  },
  {
    id: "sports-club",
    category: "community",
    startDate: "2025-03-01",
    endDate: "2025-03-28",
    title: { ar: "ترميم النادي الرياضي", en: "Sports Club Renovation" },
    desc: {
      ar: "تأهيل النادي الرياضي وتنظيم دوري شبابي تُوّج بتكريم الفريق الفائز.",
      en: "Rehabilitating the sports club and organizing a youth tournament, culminating in an award ceremony for the winning team.",
    },
  },
  {
    id: "mosques",
    category: "community",
    image: `${IMG}/mosque-sweeping.webp`,
    startDate: "2025-03-06",
    endDate: "2025-09-25",
    title: { ar: "تأهيل المساجد", en: "Mosque Rehabilitation" },
    desc: {
      ar: "التعاون مع شعبة الأوقاف لتنظيف وتأهيل المدرسة الشرعية ومسجدين في مدينة القصير.",
      en: "Partnering with the Awqaf division to clean and rehabilitate the religious school and two mosques in Al-Qusayr.",
    },
  },
  {
    id: "eid-festival",
    category: "community",
    startDate: "2025-04-03",
    endDate: "2025-04-03",
    stats: [{ value: "300", label: { ar: "طفل", en: "Children" } }],
    title: { ar: "مهرجان العيد", en: "Eid Festival" },
    desc: {
      ar: "بالتعاون مع فريق مبادرون، تم تنظيم مهرجان ترفيهي لـ 300 طفل تضمن ألعاباً وهدايا وأنشطة جماعية.",
      en: "In partnership with the Mubadiron volunteer team, an entertainment festival was organized for 300 children featuring games, gifts, and group activities.",
    },
  },
  {
    id: "eid-prayer",
    category: "community",
    startDate: "2025-03-03",
    endDate: "2025-03-08",
    title: { ar: "صلاة العيد", en: "Eid Prayer Preparation" },
    desc: {
      ar: "قيادة تجهيز ساحة الحرية لأول صلاة عيد بعد التحرير، عبر أعمال الصيانة والتنظيف وتنظيم الحضور بالتعاون مع البلدية والفرق التطوعية.",
      en: "Leading the preparation of Freedom Square for the first Eid prayer after liberation, through maintenance, cleaning, and crowd organization in cooperation with the municipality and volunteer teams.",
    },
  },

  // ===== Relief, Empowerment & Education (Page 7) =====
  {
    id: "food-dist",
    category: "relief",
    image: `${IMG}/vehicle-bags.webp`,
    startDate: "2025-03-28",
    endDate: "2025-03-28",
    stats: [{ value: "420", label: { ar: "أسرة", en: "Families" } }],
    title: { ar: "توزيع المواد الغذائية", en: "Food Aid Distribution" },
    desc: {
      ar: "توزيع 420 حصة غذائية للأسر الأكثر احتياجاً بعد تنفيذ مسح ميداني.",
      en: "Distributing 420 food rations to the most vulnerable families following a field needs assessment survey.",
    },
  },
  {
    id: "return-path",
    category: "relief",
    image: `${IMG}/woman-teaching.webp`,
    startDate: "2025-07-10",
    endDate: "2025-11-01",
    stats: [{ value: "150", label: { ar: "طفل", en: "Children" } }],
    title: { ar: "مسار العودة", en: "Path of Return" },
    desc: {
      ar: "إعادة 150 طفلاً إلى التعليم عبر برامج تعليمية ودعم نفسي واجتماعي وأنشطة ترفيهية.",
      en: "Reintegrating 150 children into education through tailored learning programs, psychosocial support, and recreational activities.",
    },
  },
  {
    id: "war-debris-awareness",
    category: "relief",
    image: `${IMG}/rubble-men.webp`,
    startDate: "2025-07-24",
    endDate: "2025-08-26",
    title: { ar: "التوعية بمخلفات الحرب", en: "War Remnants Awareness" },
    desc: {
      ar: "بالتعاون مع منظمة الإغاثة النرويجية الشعبية، تنفيذ مسح ميداني لمخلفات الحرب وإقامة جلسات وحملات توعوية للحد من مخاطرها.",
      en: "In cooperation with Norwegian People's Aid, conducting a field survey of war remnants and holding awareness sessions and campaigns to mitigate their risks.",
    },
  },
  {
    id: "youth-empowerment",
    category: "relief",
    startDate: "2026-07-06",
    endDate: "",
    ongoing: true,
    title: { ar: "تمكين الشباب", en: "Youth Empowerment" },
    desc: {
      ar: "تنفيذ برامج تدريبية ودورات تخصصية للشباب لتنمية مهاراتهم في الحاسوب واللغة والتواصل وتعزيز دورهم المجتمعي.",
      en: "Delivering training programs and specialized courses for youth to develop their skills in computing, languages, and communication, while strengthening their civic engagement.",
    },
  },
  {
    id: "lighting",
    category: "relief",
    image: `${IMG}/led-inspection.webp`,
    startDate: "2025-09-15",
    endDate: "2025-08-13",
    title: { ar: "مشروع الإنارة", en: "Street Lighting Project" },
    desc: {
      ar: "المساهمة في تحسين إنارة الشوارع الحيوية بالتعاون مع البلدية، عبر تنفيذ مسح ميداني وتركيب وحدات إنارة في المواقع الأكثر احتياجاً.",
      en: "Contributing to improved street lighting on vital roads in cooperation with the municipality, through field surveys and the installation of lighting units in the most needed locations.",
    },
  },
  {
    id: "syria-home",
    category: "relief",
    image: `${IMG}/damaged-buildings.webp`,
    startDate: "2025-08-23",
    endDate: "2025-08-23",
    title: { ar: "سوريا بيتنا الكبير", en: "Syria Is Our Big Home" },
    desc: {
      ar: "بالتعاون مع وزارة الثقافة، المشاركة في حملة «سوريا بيتنا الكبير» لتعزيز ثقافة العمل التطوعي عبر حملات تنظيف مجتمعية.",
      en: "In cooperation with the Ministry of Culture, participating in the \"Syria Is Our Big Home\" campaign to promote a culture of volunteerism through community cleanup drives.",
    },
  },
  {
    id: "sanad",
    category: "relief",
    image: `${IMG}/family-doorway.webp`,
    startDate: "2025-12-01",
    endDate: "2025-05-28",
    title: { ar: "مشروع سند", en: "Sanad Initiative" },
    desc: {
      ar: "إنشاء مشاريع صغيرة مدرة للدخل لتمكين الأسر الأكثر هشاشة وتحسين سبل معيشتها.",
      en: "Establishing small income-generating enterprises to empower the most vulnerable families and improve their livelihoods.",
    },
  },
  {
    id: "service-rehab",
    category: "relief",
    startDate: "2025-05-28",
    endDate: "",
    ongoing: true,
    stats: [{ value: "12", label: { ar: "مدرسة", en: "Schools" } }],
    title: { ar: "مشروع التأهيل الخدمي", en: "Infrastructure Rehabilitation" },
    desc: {
      ar: "تنفيذ شراكة لترميم شبكة الصرف الصحي في 12 مدرسة في المدينة وريفها.",
      en: "Implementing a partnership to rehabilitate sewage networks across 12 schools in the city and its countryside.",
    },
  },
  {
    id: "eid-activities",
    category: "relief",
    startDate: "2025-06-03",
    endDate: "2025-06-06",
    title: { ar: "أنشطة العيد", en: "Eid Activities" },
    desc: {
      ar: "تنفيذ أنشطة عيد للأطفال وتوزيع أضاحي وهدايا بالتعاون مع منظمة الأمل الدولية.",
      en: "Organizing Eid activities for children and distributing sacrificial animals and gifts in cooperation with the International Hope Organization.",
    },
  },
  {
    id: "household-dist",
    category: "relief",
    startDate: "2025-06-05",
    endDate: "2025-06-09",
    stats: [{ value: "1450", label: { ar: "أسرة", en: "Families" } }],
    title: { ar: "توزيع المواد المنزلية", en: "Household Supplies Distribution" },
    desc: {
      ar: "بالتعاون مع الهلال الأحمر السوري، تم توزيع 1450 حصة مواد منزلية على الأسر المستفيدة.",
      en: "In cooperation with the Syrian Red Crescent, 1,450 household supply kits were distributed to beneficiary families.",
    },
  },
  {
    id: "census",
    category: "relief",
    image: `${IMG}/women-classroom.webp`,
    startDate: "2025-09-01",
    endDate: "2025-06-01",
    title: { ar: "الإحصاء السكاني", en: "Population Census" },
    desc: {
      ar: "تنفيذ أول إحصاء سكاني شامل بعد عودة المهجرين، وإعداد قاعدة بيانات معتمدة لدعم تخطيط المشاريع وتقييم احتياجات السكان.",
      en: "Conducting the first comprehensive population census following the return of displaced residents, and building an accredited database to support project planning and needs assessment.",
    },
  },
  {
    id: "disability-support",
    category: "relief",
    image: `${IMG}/men-crutches.webp`,
    startDate: "2025-06-26",
    endDate: "2025-06-26",
    title: { ar: "دعم ذوي الهمم", en: "Supporting Persons with Disabilities" },
    desc: {
      ar: "المشاركة في منتدى حقوق ذوي الإعاقة، وتعزيز دمجهم في المجتمع من خلال توظيف متطوعين من ذوي الإعاقة ضمن فريق المؤسسة.",
      en: "Participating in the Disability Rights Forum and promoting social inclusion by recruiting volunteers with disabilities into the Foundation's team.",
    },
  },

  // ===== Awareness & Community Activities (Page 8) =====
  {
    id: "vaccine-awareness",
    category: "awareness",
    image: `${IMG}/classroom-children.webp`,
    startDate: "2025-09-24",
    endDate: "",
    ongoing: true,
    title: { ar: "التوعية بأهمية اللقاح", en: "Vaccination Awareness" },
    desc: {
      ar: "تنفيذ حملات ومسرحيات توعوية للأطفال حول أهمية اللقاحات.",
      en: "Conducting awareness campaigns and theatrical performances for children highlighting the importance of vaccines.",
    },
  },
  {
    id: "liberation-marathon",
    category: "awareness",
    image: `${IMG}/group-vests.webp`,
    startDate: "2025-12-06",
    endDate: "2025-12-08",
    title: { ar: "ماراثون التحرير", en: "Liberation Marathon" },
    desc: {
      ar: "تنظيم أول ماراثون مجتمعي للأطفال والشباب وذوي الاحتياجات الخاصة.",
      en: "Organizing the first community marathon for children, youth, and persons with special needs.",
    },
  },
  {
    id: "sanad-store",
    category: "awareness",
    startDate: "2025-02-06",
    endDate: "",
    ongoing: true,
    title: { ar: "متجر سند", en: "Sanad Charity Store" },
    desc: {
      ar: "إطلاق متجر خيري لدعم الأسر المحتاجة عبر التبرعات العينية والنقدية.",
      en: "Launching a charity store to support needy families through in-kind and cash donations.",
    },
  },
  {
    id: "children-cinema",
    category: "awareness",
    image: `${IMG}/children-tv.webp`,
    startDate: "2025-02-15",
    endDate: "",
    ongoing: true,
    title: { ar: "سينما الأطفال", en: "Children's Cinema" },
    desc: {
      ar: "تنفيذ نشاط أسبوعي ترفيهي وتعليمي للأطفال لإخراجهم من أجواء الحرب.",
      en: "Running a weekly recreational and educational activity for children, helping them overcome the psychological effects of war.",
    },
  },
  {
    id: "evacuation",
    category: "awareness",
    startDate: "2026-02-17",
    endDate: "",
    ongoing: true,
    title: { ar: "خطط الإخلاء والطوارئ", en: "Evacuation & Emergency Preparedness" },
    desc: {
      ar: "تنفيذ جولات توعية في المدارس حول مخلفات الحرب وخطط الإخلاء.",
      en: "Conducting school awareness tours on war remnants hazards and evacuation plans.",
    },
  },
  {
    id: "refugee-emergency",
    category: "awareness",
    startDate: "2026-03-04",
    endDate: "2026-03-18",
    title: { ar: "التدخل الطارئ للاجئين", en: "Emergency Refugee Response" },
    desc: {
      ar: "تقديم خدمات دعم وإغاثة للاجئين خلال موجة النزوح من لبنان.",
      en: "Providing relief and support services to refugees during the displacement wave from Lebanon.",
    },
  },
  {
    id: "eid-sweeter",
    category: "awareness",
    image: `${IMG}/children-group.webp`,
    startDate: "2026-03-07",
    endDate: "2026-03-22",
    title: { ar: "العيد أحلى", en: "Eid Is Sweeter" },
    desc: {
      ar: "تنظيم كرنفال وأنشطة ترفيهية للأطفال خلال أيام العيد.",
      en: "Organizing a carnival and recreational activities for children during the days of Eid.",
    },
  },
  {
    id: "learn-through-play",
    category: "awareness",
    startDate: "2026-06-06",
    endDate: "2025-10-08",
    title: { ar: "التعليم باللعب", en: "Learning Through Play" },
    desc: {
      ar: "تنفيذ أنشطة تعليمية وترفيهية للأطفال بالشراكة مع منظمة Operazione Colomba الدولية.",
      en: "Implementing educational and recreational activities for children in partnership with the international organization Operazione Colomba.",
    },
  },
  {
    id: "qusayr-dawn",
    category: "awareness",
    startDate: "2025-10-24",
    endDate: "2025-10-24",
    title: { ar: "حملة فجر القصير", en: "Al-Qusayr Dawn Campaign" },
    desc: {
      ar: "المشاركة في ترميم الصالة الاستهلاكية وتنظيم فعاليات الحملة.",
      en: "Participating in the renovation of the consumer goods hall and organizing campaign activities.",
    },
  },
  {
    id: "bread-dist",
    category: "awareness",
    startDate: "2025-10-27",
    endDate: "2025-10-27",
    stats: [{ value: "600", label: { ar: "مستفيد", en: "Beneficiaries" } }],
    title: { ar: "توزيع الخبز", en: "Bread Distribution" },
    desc: {
      ar: "تنفيذ حملة إغاثية لتوزيع الخبز على 600 مستفيد.",
      en: "Carrying out a relief campaign to distribute bread to 600 beneficiaries.",
    },
  },
  {
    id: "rabla-office",
    category: "awareness",
    image: `${IMG}/outdoor-session.webp`,
    startDate: "2025-11-25",
    endDate: "",
    ongoing: true,
    title: { ar: "تفعيل مكتب ربلة", en: "Rabla Office Activation" },
    desc: {
      ar: "تنفيذ أنشطة مجتمعية وتنظيف حديقة الأمل في مدينة ربلة.",
      en: "Carrying out community activities and cleaning the Hope Garden in the city of Rabla.",
    },
  },
  {
    id: "consultative",
    category: "awareness",
    startDate: "2025-11-20",
    endDate: "2025-11-30",
    title: { ar: "الجلسات التشاورية", en: "Consultative Dialogue Sessions" },
    desc: {
      ar: "تنظيم جلسات حوارية بين الأهالي والإدارة المحلية لتعزيز الترابط المجتمعي.",
      en: "Organizing dialogue sessions between residents and local administration to strengthen social cohesion.",
    },
  },
];

// ===== Organizational Structure (Page 9) =====
export interface OrgMember {
  role: "president" | "vicePresident" | "secretary" | "treasurer";
  name: string;
}

export interface Department {
  key: string;
  head: string;
  initials: string;
}

export const boardMembers: OrgMember[] = [
  { role: "president", name: "محمد رعد" },
  { role: "vicePresident", name: "مرهف المرعي" },
  { role: "secretary", name: "إيمان الخطيب" },
  { role: "treasurer", name: "عبدالملك قرقوز" },
];

export const departments: Department[] = [
  { key: "pr", head: "علي رعد", initials: "ع ر" },
  { key: "info", head: "ندى رعد", initials: "ن ر" },
  { key: "hr", head: "رهف المصري", initials: "ر م" },
  { key: "projects", head: "بشرى محب الدين", initials: "ب م" },
  { key: "media", head: "فريزة الحلق", initials: "ف ح" },
  { key: "financial", head: "عائشة المصري", initials: "ع م" },
  { key: "child", head: "غفران إدريس", initials: "غ إ" },
  { key: "psychosocial", head: "شيماء المصري", initials: "ش م" },
  { key: "warehouse", head: "مكرم علي", initials: "م ع" },
  { key: "finance", head: "ندى رعد", initials: "ن ر" },
  { key: "mne", head: "ندى رعد", initials: "ن ر" },
];

// ===== Gallery (real PDF photos only) =====
export const galleryImages = [
  { src: `${IMG}/street-cleanup.webp`, cat: "community" as const },
  { src: `${IMG}/roundabout-crowd.webp`, cat: "community" as const },
  { src: `${IMG}/wheelbarrow.webp`, cat: "community" as const },
  { src: `${IMG}/mosque-sweeping.webp`, cat: "community" as const },
  { src: `${IMG}/women-cleaning.webp`, cat: "community" as const },
  { src: `${IMG}/men-shoveling.webp`, cat: "community" as const },
  { src: `${IMG}/tarp-work.webp`, cat: "community" as const },
  { src: `${IMG}/woman-teaching.webp`, cat: "relief" as const },
  { src: `${IMG}/led-inspection.webp`, cat: "relief" as const },
  { src: `${IMG}/family-doorway.webp`, cat: "relief" as const },
  { src: `${IMG}/women-classroom.webp`, cat: "relief" as const },
  { src: `${IMG}/men-crutches.webp`, cat: "relief" as const },
  { src: `${IMG}/vehicle-bags.webp`, cat: "relief" as const },
  { src: `${IMG}/rubble-men.webp`, cat: "relief" as const },
  { src: `${IMG}/damaged-buildings.webp`, cat: "relief" as const },
  { src: `${IMG}/children-tv.webp`, cat: "awareness" as const },
  { src: `${IMG}/children-group.webp`, cat: "awareness" as const },
  { src: `${IMG}/classroom-children.webp`, cat: "awareness" as const },
  { src: `${IMG}/outdoor-session.webp`, cat: "awareness" as const },
  { src: `${IMG}/group-vests.webp`, cat: "awareness" as const },
];
