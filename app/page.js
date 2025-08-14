export default function Page() {
  // 6 ورش — تأكد أن عددها 6
  const blocks = [
    {
      title: "الذكاء الاصطناعي من الصفر إلى الإبداع",
      points: [
        "تصميم عروض PowerPoint بضغطة زر",
        "إنشاء صور احترافية بضغطة زر",
        "تحويل النصوص إلى أصوات متنوعة",
        "تأليف قصة وتحويلها لفيديو",
        "التعامل مع ملف PDF وتحويله لقصة أو مسرحية",
        "تحويل PDF إلى Word دون فقد التنسيق",
      ],
    },
    {
      title: "أدوات الأتمتة التعليمية السريعة",
      points: [
        "تصميم فيديو تعليمي من عنوان الدرس",
        "إنشاء اختبارات احترافية مع ورقة مراجعة",
        "إنشاء أنشطة ومشاركة وتتبع النتائج",
        "الحصول على سيناريو YouTube وتعليق صوتي",
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
        "إنشاء ملخصات نصية سريعة",
      ],
    },
    {
      title: "المعلم الذكي المخصص للطالب",
      points: [
        "إنشاء مساعد ذكي يجيب عن أسئلة الدرس",
        "تدريب المساعد بملف المنهج",
        "أنشطة مخصصة حسب مستوى الطالب",
        "تتبّع التقدّم وإعطاء توصيات",
        "إنشاء بنك أسئلة متدرّج الصعوبة",
      ],
    },
    {
      title: "ملحقات تعليمية تفاعلية تحاكي الواقع",
      points: [
        "بطاقات وأنشطة سحب وإفلات",
        "محاكاة مختبرات بسيطة",
        "ألغاز تعليمية مدعومة بالذكاء الاصطناعي",
        "لوحات تتبّع نقاط الطلاب",
        "قوالب جاهزة للتخصيص السريع",
      ],
    },
    {
      title: "تجميع مصادر المعرفة وتحويلها لتجارب متعددة",
      points: [
        "جمع المقالات والروابط في مصدر واحد",
        "إنشاء ملخصات قابلة للمشاركة",
        "استخراج أسئلة للمراجعة والكلمات المفتاحية",
        "تحويل المحتوى إلى بودكاست صوتي",
        "إنشاء معرض موارد للصف",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* قسم البطل */}
      <section className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
          الدورة: احتراف الذكاء الاصطناعي في التعليم
        </h1>
        <p className="mt-4 text-slate-200">
          نسخة محسّنة بالمظهر مع أقسام منظمة لعرض الورش وأزرار واضحة.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#workshops"
            className="rounded-xl bg-sky-500 px-5 py-3 text-white hover:bg-sky-600 transition"
          >
            استعراض الورش
          </a>
          <a
            href="#signup"
            className="rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10 transition"
          >
            التسجيل للاهتمام
          </a>
        </div>
      </section>

      {/* البطاقات: 6 ورش */}
      <section
        id="workshops"
        className="mx-auto max-w-screen-xl px-4 pb-12 sm:pb-16"
      >
        <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-white">
          محتوى الدورة — {blocks.length} ورشة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <article
              key={i}
              className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="mb-3 text-xl font-bold text-white">{b.title}</h3>
              <ul className="list-disc pr-6 space-y-2 text-slate-200">
                {b.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* قسم التسجيل */}
      <section
        id="signup"
        className="mx-auto max-w-screen-xl px-4 pb-16"
      >
        <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            مهتم بالدورة؟
          </h3>
          <p className="mt-2 text-slate-200">
            اترك بريدك وسنتواصل عند فتح التسجيل.
          </p>
          <div className="mx-auto mt-5 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
            />
            <button
              type="button"
              className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-600 transition"
            >
              سجل اهتمامك
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
