// app/page.js
"use client";

import { useEffect, useState } from "react";
import { translations } from "./lib/i18n";

export default function Page() {
  // اللغة الافتراضية عربي
  const [lang, setLang] = useState("ar");

  // تهيئة أولية: من رابط الصفحة أو من التخزين المحلي
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const qp = url.searchParams.get("lang");
    const saved = window.localStorage.getItem("lang");
    const initial =
      qp === "ar" || qp === "en"
        ? qp
        : saved === "ar" || saved === "en"
        ? saved
        : "ar";
    setLang(initial);
  }, []);

  // مزامنة: dir/lang على <html> + الحفظ + تحديث الرابط
  useEffect(() => {
    if (typeof window === "undefined") return;
    const t = translations[lang] || translations.ar;

    const html = document.documentElement;
    html.setAttribute("dir", t.dir);
    html.setAttribute("lang", lang);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());

    window.localStorage.setItem("lang", lang);
  }, [lang]);

  // آمن ضد أي نقص في البيانات
  const t = translations[lang] || translations.ar;
  const blocks = Array.isArray(t?.blocks) ? t.blocks : [];
  const totalWorkshops = blocks.length;
const workshopLabel =
  lang === "ar"
    ? (totalWorkshops === 1 ? "ورشة" : "ورش")
    : (totalWorkshops === 1 ? "workshop" : "workshops");
    ? "ورشة"
    : totalWorkshops === 1
      ? "workshop"
      : "workshops";

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* ترويسة + مُبدّل اللغة */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-extrabold">{t.brand}</h1>

          <label className="sr-only" htmlFor="lang">language</label>
          <select
            id="lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-sm"
            aria-label={lang === "ar" ? "اختر اللغة" : "Choose language"}
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* بطل الصفحة */}
        <section className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 sm:p-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-snug">
            {t.heroTitle}
          </h2>
          <p className="mt-4 text-slate-200 max-w-3xl mx-auto">
            {t.heroDesc}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#workshops"
              className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              {t.browse}
            </a>
            <a
              href="#signup"
              className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10"
            >
              {t.signup}
            </a>
          </div>
        </section>

        {/* محتوى الدورة */}
        <section id="workshops" className="mt-10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
<h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
  {t.courseTitlePrefix} {totalWorkshops} {lang === "ar" ? (totalWorkshops === 1 ? "ورشة" : "ورش") : (totalWorkshops === 1 ? "workshop" : "workshops")}
</h3>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blocks.map((b, i) => (
              <article
                key={i}
                className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 shadow-sm hover:shadow-lg transition"
              >
                <h4 className="mb-3 text-xl font-bold text-white">{b.title}</h4>
                <ul className="list-disc pr-6 space-y-2 text-slate-200">
                  {(Array.isArray(b.points) ? b.points : []).map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* قسم التسجيل (placeholder بسيط) */}
        <section id="signup" className="mt-10 text-center text-slate-300">
          <p>—</p>
        </section>
      </div>
    </main>
  );
}
