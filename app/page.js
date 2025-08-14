"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { translations } from "./lib/i18n";

export default function Page() {
  // اللغة الافتراضية
  const [lang, setLang] = useState("ar");

  // تحديد اللغة عند التحميل: أولًا من رابط ?lang، ثم من localStorage، وإلا العربية
  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    const qp = url.searchParams.get("lang");
    const saved = localStorage.getItem("lang");

    if (qp && (qp === "ar" || qp === "en")) {
      setLang(qp);
      return;
    }
    if (saved && (saved === "ar" || saved === "en")) {
      setLang(saved);
      return;
    }
    setLang("ar");
  }, []);

  // عند تغيير اللغة: احفظها، وطبّق dir/lang على <html>، وحدّث رابط الصفحة بـ ?lang
  useEffect(() => {
    if (typeof window === "undefined") return;
    const t = translations[lang];

    // حفظ
    localStorage.setItem("lang", lang);

    // تعيين اتجاه ولغة المستند
    document.documentElement.setAttribute("dir", t.dir);
    document.documentElement.setAttribute("lang", lang);

    // تحديث الرابط بدون إعادة تحميل الصفحة
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  }, [lang]);

  const t = translations[lang];
  const blocks = t.blocks;
  const totalWorkshops = blocks.length;

  return (
    <>
      {/* SEO بحسب اللغة */}
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta name="twitter:title" content={t.meta.title} />
        <meta name="twitter:description" content={t.meta.description} />
      </Head>

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

            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4`}>
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

          {/* شبكة البطاقات – تعرض كل الكتل */}
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

        {/* قسم التسجيل placeholder */}
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
    </>
  );
}
