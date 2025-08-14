// app/page.js

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
      "إنشاء أنشطة ومشاركة وتتبع النتائج موجودة",
      "الحصول على سيناريو YouTube وتعليق صوتي احترافي",
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

  // ——— ورش إضافية (4، 5، 6) ———
  {
    title: "المعلم الذكي المخصص للطالب",
    points: [
      "إنشاء روبوت مساعد يجيب عن أسئلة الدرس",
      "تدريب النموذج بملف المنهج أو مذكرات المعلم",
      "توليد أنشطة مخصصة حسب مستوى الطالب",
      "تتبّع تقدّم الطالب وإعطاء توصيات",
      "إنشاء بنك أسئلة متدرّج الصعوبة",
    ],
  },
  {
    title: "تصميم ملحقات تعليمية تفاعلية تحاكي الواقع",
    points: [
      "بطاقات تعليمية تفاعلية",
      "أنشطة سحب وإفلات",
      "محاكاة مختبرات افتراضية بسيطة",
      "ألغاز تعليمية مدعومة بالذكاء الاصطناعي",
      "لوحات تتبّع نقاط الطلاب",
    ],
  },
  {
    title: "تجميع مصادر المعرفة وتحويلها إلى تجارب متعددة",
    points: [
      "جمع المقالات والروابط في مصدر واحد",
      "إنشاء ملخصات ذكية قابلة للمشاركة",
      "استخراج كلمات مفتاحية وأسئلة للمراجعة",
      "تحويل المحتوى إلى بودكاست صوتي",
      "إنشاء معرض موارد للصف",
    ],
  },
];

  return (
    <main className="space-y-14">
      {/* قسم البطل (Hero) */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-12 shadow-2xl">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(1100px_400px_at_100%_0%,rgba(56,189,248,.35),transparent_60%)]" />
        <h2 className="text-3xl sm:text-4xl font-bold leading-relaxed">
          الدورة: احتراف الذكاء الاصطناعي في التعليم
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          نسخة محسّنة بالمظهر، مع أقسام منظّمة لعرض الورش. انطلق لتنظيم أفكارك
          وتخفيف الفوضى باستخدام بطاقات واضحة وأزرار عملية.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#workshops"
            className="inline-flex items-center justify-center rounded-xl bg-sky-400 px-5 py-2.5 font-semibold text-slate-900 hover:bg-sky-300 transition focus:outline-none focus:ring-2 focus:ring-sky-300/70"
          >
            استعراض الورش
          </a>
          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            التسجيل للاهتمام
          </a>
        </div>
      </section>

      {/* شبكة الورش */}
      <section id="workshops" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
      </section>

      {/* قسم التسجيل بالاهتمام */}
      <section
        id="signup"
        className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 sm:p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-white">مهتم بالانضمام؟</h3>
        <p className="mt-2 text-slate-300">
          سجّل اهتمامك وسنرسل لك التفاصيل والمواعيد فور فتح التسجيل الرسمي.
        </p>
        <a
          href="#"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-sky-400 px-5 py-2.5 font-semibold text-slate-900 hover:bg-sky-300 transition focus:outline-none focus:ring-2 focus:ring-sky-300/70"
        >
          إرسال نموذج الاهتمام
        </a>
      </section>
    </main>
  );
}
