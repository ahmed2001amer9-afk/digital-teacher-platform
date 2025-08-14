"use client";

import { useEffect, useState } from "react";
import { translations } from "./lib/i18n";

export default function Page() {
  // اللغة الافتراضية: العربية
  const [lang, setLang] = useState("ar");

  // تحميل اللغة المحفوظة وتطبيق اتجاه الصفحة
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved && (saved === "ar" || saved === "en")) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    // حفظ اللغة وتطبيق اتجاه ولغة الصفحة على <html>
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
      const t = translations[lang];
      document.documentElement.setAttribute("dir", t.dir);
      document.documentElement.setAttribute("lang", lang);
    }
  }, [lang]);

  const t = translations[lang];
  const blocks = t.blocks;
  const totalWorkshops = blocks.length; // = 6 في بياناتنا

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* هيدر */}
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">
          {t.brand}
        </h1>

        {/* مبدّل اللغة */}
        <div className="flex items-center gap-3">
          <label htmlFor="lang" className="text-sm opacity-80">
            {lang === "ar" ? "اللغة" : "Language"}
          </label>
          <select
            id="lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1.5 text-sm outline-none"
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>

      {/* مقدمة الدورة */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 sm:p-10">
          <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold leading-snug">
            {t.heroTitle}
          </h2>
          <p className="mb-6 text-slate-200">
            {t.heroDesc}
          </p>

          <div className={`flex flex-col sm:flex-row ${t.dir === "rtl" ? "gap-3 sm:gap-4" : "gap-3 sm:gap-4"}`}>
            <a
              href="#workshops"
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 font-semibold shadow hover:bg-sky-400 transition"
            >
              {t.browse}
            </a>
            <a
              href="#signup"
              className="inline-flex items-center justify-center rounded-xl bg-slate-700 px-5 py-3 font-semibold shadow hover:bg-slate-600 transition"
            >
              {t.signup}
            </a>
          </div>
        </div>
      </section>

      {/* عنوان محتوى الورش */}
      <section id="workshops" className="mx-auto max-w-6xl px-6 pt-8">
        <h3 className="mb-6 text-2xl sm:text-3xl font-extrabold">
          {t.courseTitlePrefix} {totalWorkshops} {t.workshopsWord(totalWorkshops)}
        </h3>

        {/* شبكة البطاقات – تعرض كل الكتل بلا قصّ */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <article
              key={i}
              className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 shadow-sm hover:shadow-lg transition"
            >
              <h4 className="mb-3 text-xl font-bold text-white">{b.title}</h4>
              <ul className="list-disc pr-6 space-y-2 text-slate-200">
                {b.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* قسم التسجيل بالاهتمام – placeholder */}
      <section id="signup" className="mx-auto max-w-6xl px-6 pt-10 pb-16">
        <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 sm:p-8 text-center">
          <p className="text-slate-200">
            {lang === "ar"
              ? "سيتوفر نموذج تسجيل بسيط هنا لاحقًا."
              : "A simple interest/registration form will be placed here later."}
          </p>
        </div>
      </section>
    </div>
  );
}
