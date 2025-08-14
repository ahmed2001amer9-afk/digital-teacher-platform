"use client";
import { useState } from "react";

const dict = {
  ar: {
    brand: "منصة المعلم الرقمي",
    tagline: "إتقان الذكاء الاصطناعي في التعليم",
    intro: "تتضمن ست ورشات عملية تغطي أحدث تطبيقات الذكاء الاصطناعي في التعليم.",
    courseTitle: "الدورة: احتراف الذكاء الاصطناعي في التعليم",
    subscribe: "اشترك لتصلك التحديثات",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    thanks: (e) => `شكراً! سنقوم بالتواصل معك على ${e}`,
    langLabel: "اللغة",
    sections: [
      {
        title: "الذكاء الاصطناعي من الصفر إلى الإبداع",
        points: [
          "تصميم عروض PowerPoint بضغطة زر",
          "إنشاء صور احترافية بضغطة زر",
          "تحويل النصوص إلى أصوات متنوعة",
          "تأليف قصة وتحويلها لفيديو",
          "التفاعل مع ملف PDF وتحويله لقصة أو مسرحية",
          "تحويل PDF إلى Word دون فقد التنسيق",
        ],
      },
      {
        title: "أدوات الأتمتة التعليمية السريعة",
        points: [
          "تصميم فيديو تعليمي من عنوان الدرس",
          "إنشاء اختبارات احترافية مع ورقة مراجعة",
          "إنشاء اختبار ومشاركته وتتبع النتائج بسرعة",
          "الحوار مع فيديو YouTube وتحويله لمسرحية",
          "تحويل PDF إلى PowerPoint احترافي",
        ],
      },
    ],
  },
  en: {
    brand: "Digital Teacher Platform",
    tagline: "Mastering AI for Education",
    intro: "Six hands-on workshops covering the latest AI applications in education.",
    courseTitle: "Course: Mastering AI in Education",
    subscribe: "Subscribe for updates",
    emailPlaceholder: "Enter your email",
    thanks: (e) => `Thanks! We’ll contact you at ${e}`,
    langLabel: "Language",
    sections: [
      {
        title: "AI: From Zero to Creativity",
        points: [
          "One-click PowerPoint creation",
          "Generate professional images",
          "Text-to-speech in multiple voices",
          "Write a story and turn it into a video",
          "Chat with PDFs and turn them into plays",
          "Convert PDF to Word without losing formatting",
        ],
      },
      {
        title: "Rapid Teaching Automation",
        points: [
          "Auto-create lesson videos from a title",
          "Create exams with a review sheet",
          "Share exams and track results quickly",
          "Chat with YouTube and turn it into a play",
          "Convert PDF to a polished PowerPoint",
        ],
      },
    ],
  },
};

export default function Page() {
  const [lang, setLang] = useState("ar");
  const [email, setEmail] = useState("");
  const t = dict[lang];

  return (
    <div style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">{t.brand}</h1>
        <div className="flex items-center gap-3">
          <span className="text-white/70">{t.langLabel}</span>
          <select
            aria-label={t.langLabel}
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="min-w-[140px] rounded-lg px-3 py-1 border border-white/40 text-slate-900"
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{t.courseTitle}</h2>
          <p className="text-white/80 mb-8">{t.intro}</p>

          {t.sections.map((sec, idx) => (
            <div key={idx} className="mb-6 p-5 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-semibold mb-3">{sec.title}</h3>
              <ul className="list-disc ps-6 space-y-1 text-white/80">
                {sec.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="bg-white/10 p-6 rounded-xl border border-white/10">
          <h3 className="text-lg font-semibold mb-3">{t.subscribe}</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(t.thanks(email));
              setEmail("");
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              className="flex-1 rounded-lg px-4 py-3 text-slate-900 border border-white/25"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />
            <button className="rounded-lg px-6 py-3 font-bold bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-500">
              {lang === "ar" ? "اشتراك" : "Subscribe"}
            </button>
          </form>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-6 text-white/60 text-sm">
        <div>© {new Date().getFullYear()} {t.brand}</div>
      </footer>
    </div>
  );
}
