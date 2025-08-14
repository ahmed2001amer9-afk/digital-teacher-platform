export default function Page() {
  const workshops = [
    {
      title: "الذكاء الاصطناعي من الصفر إلى الإبداع",
      points: [
        "تصميم عروض PowerPoint بضغطة زر",
        "إنشاء صور احترافية بضغطة زر",
        "تحويل النصوص إلى أصوات متنوعة",
        "تأليف قصة وتحويلها لفيديو",
        "التعامل مع PDF وتحويله لقصة أو مسرحية",
        "تحويل PDF إلى Word دون فقد التنسيق",
      ],
    },
    {
      title: "أدوات الأتمتة التعليمية السريعة",
      points: [
        "تصميم فيديو تعليمي من عنوان الدرس",
        "إنشاء اختبارات احترافية مع ورقة مراجعة",
        "إنشاء اختبار وتتبع النتائج خلال دقيقتين",
        "الحوار مع فيديو YouTube وتحويله لمسرحية",
        "تحويل PDF إلى PowerPoint احترافي",
      ],
    },
    {
      title: "الإبداع المتقدّم وإثراء المحتوى التعليمي",
      points: [
        "تحويل الدروس لخرائط ذهنية",
        "تصميم فيديوهات إعلانية أو تعليمية",
        "إنشاء أسئلة تفاعلية ممتعة",
        "ترجمة احترافية لملفات كبيرة",
        "تصميم فيديوهات متعددة الشخصيات الناطقة",
      ],
    },
    {
      title: "المعلّم الذكي المخصص للمادة",
      points: [
        "إنشاء موقع شبيه بـ ChatGPT مخصص للمادة",
        "إتاحة أسئلة الطلاب على مدار الساعة",
        "تدريب المعلم ليضمن إجابات دقيقة",
        "حصر الإجابات ضمن نطاق المادة",
      ],
    },
    {
      title: "نماذج تعليمية تفاعلية تحاكي الواقع",
      points: [
        "التعريف بأحدث أداة لتصميم النماذج",
        "إنشاء بيئات محاكاة واقعية",
        "عناصر تفاعلية وتجربة عملية",
      ],
    },
    {
      title: "تجميع مصادر المعرفة وتحويلها لتجارب متعددة",
      points: [
        "جمع كل المصادر في مكان واحد",
        "تحويل المحتوى إلى فيديو أو بودكاست",
        "ملخّص شامل + أسئلة وملاحظات",
        "تحويل المحتوى لخريطة ذهنية احترافية",
      ],
    },
  ];

  return (
    <div>
      {/* ========== Header ========== */}
      <header className="backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10">
              <span className="text-lg font-black">DT</span>
            </span>
            <div>
              <h1 className="text-base font-bold leading-none">منصة المعلم الرقمي</h1>
              <p className="text-xs text-white/60">إتقان الذكاء الاصطناعي في التعليم</p>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-4 text-sm text-white/80">
            <a href="#workshops" className="hover:text-white transition">الورش</a>
            <a href="#contact" className="hover:text-white transition">تواصل</a>
          </nav>
        </div>
      </header>

      {/* ========== Hero ========== */}
      <section className="container py-16 sm:py-20">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.25]">
            منصة المعلم الرقمي
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            مرحبًا! تم إعداد الصفحة بنجاح. هذه نسخة أوّلية محسّنة بالمظهر، مع لمسات بسيطة
            وأقسام منظّمة لعرض ورش الدورة.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#workshops"
              className="btn btn-primary"
            >
              استعراض الورش
            </a>
            <a
              href="mailto:info@example.com?subject=الاشتراك%20في%20منصة%20المعلم%20الرقمي"
              className="btn btn-ghost"
            >
              تسجيل اهتمام
            </a>
          </div>
        </div>
      </section>

      {/* ========== Workshops ========== */}
      <section id="workshops" className="container pb-16 sm:pb-20">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">محتوى الدورة — 6 ورش عملية</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {workshops.map((w, idx) => (
            <div
              key={idx}
              className="card"
            >
              <h4 className="text-lg font-semibold mb-3">{w.title}</h4>
              <ul className="list-disc mr-5 space-y-1 text-white/80">
                {w.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Footer ========== */}
      <footer id="contact" className="border-t border-white/10">
        <div className="container py-6 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} منصة المعلم الرقمي</span>
          <a
            href="mailto:info@example.com"
            className="hover:text-white"
          >
            تواصل: info@example.com
          </a>
        </div>
      </footer>
    </div>
  );
}
