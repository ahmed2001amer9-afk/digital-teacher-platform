// app/lib/i18n.js
export const translations = {
  ar: {
    dir: "rtl",
    brand: "منصة المعلم الرقمي",
    tagline: "إتقان الذكاء الاصطناعي في التعليم",
    heroTitle: "الدورة: احتراف الذكاء الاصطناعي في التعليم",
    heroDesc:
      "نسخة محسّنة بالمظهر، مع أقسام منظمة لعرض الورش وأزرار واضحة. انطلق لتنظيم أفكارك وتخفيف الفوضى.",
    browse: "استعراض الورش",
    signup: "التسجيل للاهتمام",
    courseTitlePrefix: "محتوى الدورة —",
    workshopsWord: (n) => (n === 1 ? "ورشة" : "ورش"),
    blocks: [
      {
        title: "الذكاء الاصطناعي من الصفر إلى الإبداع",
        points: [
          "تصميم عروض PowerPoint بضغطة زر",
          "إنشاء صور احترافية بضغطة زر",
          "تحويل النصوص إلى أصوات متنوعة",
          "تأليف قصة وتحويلها لفيديو",
          "التعامل مع PDF وتحويله بسهولة",
        ],
      },
      {
        title: "أدوات الأتمتة التعليمية السريعة",
        points: [
          "تصميم فيديو تعليمي من عنوان الدرس",
          "إنشاء اختبارات احترافية مع ورقة مراجعة",
          "إنشاء أنشطة ومشاركة وتتبع النتائج",
          "الحصول على نص تعليقي جاهز",
          "تحويل PDF إلى PowerPoint احترافي",
        ],
      },
      {
        title: "الإبداع المتقدم وإثراء المحتوى التعليمي",
        points: [
          "تحويل الدروس لخرائط ذهنية",
          "إنشاء فيديوهات إعلانية للدروس",
          "إنشاء نماذج تقييم سريعة",
          "تحسين تصميم المشاريع الطلابية",
          "إنتاج ملخصات نصية سريعة",
        ],
      },
      {
        title: "التخصيص الذكي للدرس",
        points: [
          "تفصيل المحتوى حسب مستوى الطالب",
          "توليد أسئلة متابعة فورية",
          "اقتراح واجبات فردية تلقائيًا",
        ],
      },
      {
        title: "تصميم نماذج تقييم تفاعلية",
        points: [
          "إنشاء Rubrics سريعة",
          "نماذج Google بنقرة واحدة",
          "تحليلات تلقائية لنتائج الطلاب",
        ],
      },
      {
        title: "تجميع مصادر المعرفة",
        points: [
          "تلخيص الروابط ومقاطع الفيديو",
          "استخراج أهم الأفكار والمفاهيم",
          "إنشاء بنك أسئلة من المصادر",
        ],
      },
    ],
  },

  en: {
    dir: "ltr",
    brand: "Digital Teacher Platform",
    tagline: "Mastering AI in Education",
    heroTitle: "Course: Mastering AI in Education",
    heroDesc:
      "A polished version with clear sections to showcase workshops and obvious call-to-actions. Organize ideas and reduce clutter.",
    browse: "Browse workshops",
    signup: "Register interest",
    courseTitlePrefix: "Course content —",
    workshopsWord: (n) => (n === 1 ? "workshop" : "workshops"),
    blocks: [
      {
        title: "AI from Zero to Creativity",
        points: [
          "Create PowerPoint slides in one click",
          "Generate professional images instantly",
          "Convert text into diverse voices",
          "Write a story and turn it into a video",
          "Handle and convert PDFs easily",
        ],
      },
      {
        title: "Quick Educational Automation Tools",
        points: [
          "Make a lesson video from a title",
          "Create quizzes with review sheets",
          "Share activities and track results",
          "Instant teacher narration/voiceover",
          "Turn PDFs into professional decks",
        ],
      },
      {
        title: "Advanced Creativity & Content Enrichment",
        points: [
          "Turn lessons into mind maps",
          "Create promo/intro videos for lessons",
          "Design quick assessment forms",
          "Improve students’ project designs",
          "Produce fast text summaries",
        ],
      },
      {
        title: "Smart Lesson Personalization",
        points: [
          "Tailor content by student level",
          "Generate follow-up questions on the fly",
          "Suggest personalized homework",
        ],
      },
      {
        title: "Interactive Assessment Models",
        points: [
          "Build rubrics in minutes",
          "Generate Google Forms instantly",
          "Auto analytics for students’ results",
        ],
      },
      {
        title: "Collect & Curate Knowledge Sources",
        points: [
          "Summarize links & videos",
          "Extract key ideas & concepts",
          "Build a question bank from sources",
        ],
      },
    ],
  },
};
