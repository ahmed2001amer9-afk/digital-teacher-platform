"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [lang, setLang] = useState("ar"); // الافتراضي عربي

  // ضبط لغة واتجاه الصفحة
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  const dict = {
    ar: {
      brand: "منصة المعلّم الرقمي",
      tagline: "إتقان الذكاء الاصطناعي في التعليم",
      courseTitle: "الدورة: احتراف الذكاء الاصطناعي في التعليم",
      courseDesc:
        "تتضمن ست ورشات عملية تغطي أحدث تطبيقات الذكاء الاصطناعي في التعليم.",
      subscribeTitle: "اشترك لتصلك التحديثات",
      placeholder: "أدخل بريدك الإلكتروني",
      subscribe: "اشتراك",
      footer: "منصة المعلّم الرقمي",
      workshops: [
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
            "إنشاء اختبار ومشاركته وتتبع النتائج في دقيقتين",
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
            "إنشاء برنامج شبيه بـ ChatGPT مخصص للمادة",
            "إتاحة أسئلة الطلاب حول المادة على مدار الساعة",
            "تدريب المعلم لجعل البرنامج ذكي ودقيق",
            "حصر الإجابات في نطاق المادة",
            "تجربة تفاعلية مخصصة للطلاب",
          ],
        },
        {
          title: "تصميم نماذج تعليمية تفاعلية تحاكي الواقع",
          points: [
            "التعريف بأحدث أداة لتصميم النماذج",
            "إنشاء بيئات تعليمية محاكية للواقع",
            "تضمين عناصر تفاعلية",
            "تقديم نموذج تطبيقي كامل",
            "تخصيص النماذج لموضوعات متعددة",
          ],
        },
        {
          title: "تجميع مصادر المعرفة وتحويلها إلى تجارب متعددة",
          points: [
            "جمع كل مصادر المعرفة في مكان واحد",
            "تحويل المحتوى إلى فيديو",
            "إنشاء بودكاست حواري",
            "الحصول على ملخص شامل",
            "إضافة الأسئلة والملاحظات",
            "تحويل المحتوى لخريطة ذهنية",
            "إدخال صوتك في البودكاست",
          ],
        },
      ],
    },
    en: {
      brand: "Digital Teacher Platform",
      tagline: "Mastering AI for Education",
      courseTitle: "Course: Mastering AI in Education",
      courseDesc:
        "Six hands-on workshops covering the latest AI applications in education.",
      subscribeTitle: "Subscribe for updates",
      placeholder: "Enter your email",
      subscribe: "Subscribe",
      footer: "Digital Teacher Platform",
      workshops: [
        {
          title: "AI: From Zero to Creativity",
          points: [
            "Design PowerPoint slides in one click",
            "Generate professional images in one click",
            "Convert text to diverse voices",
            "Write a story and turn it into a video",
            "Chat with a PDF and turn it into a story or play",
            "Convert PDF to Word without losing formatting",
          ],
        },
        {
          title: "Fast Educational Automation Tools",
          points: [
            "Create a teaching video from just a lesson title",
            "Build professional exams with a review sheet",
            "Make & share a quiz and see answers & grades in 2 minutes",
            "Talk to a YouTube video and turn it into a play",
            "Convert PDF into a professional PowerPoint",
          ],
        },
        {
          title: "Advanced Creativity & Content Enrichment",
          points: [
            "Turn lessons into mind maps",
            "Create promo or whiteboard-style teaching videos",
            "Generate interactive practice questions",
            "Pro-level large-file translation (not Google Translate)",
            "Create multi-speaker talking-head videos",
          ],
        },
        {
          title: "Subject-Specific Smart Tutor",
          points: [
            "Build a ChatGPT-like tutor for your subject",
            "24/7 Q&A for students about the subject",
            "Train the tutor for accurate answers",
            "Restrict answers to the syllabus only",
            "Personalized interactive experience",
          ],
        },
        {
          title: "Interactive Models that Simulate Reality",
          points: [
            "Introduce the newest tool for interactive models",
            "Create realistic learning environments",
            "Add interactive elements",
            "Deliver a full working sample",
            "Customize models for different topics",
          ],
        },
        {
          title: "Aggregate Knowledge Sources into Experiences",
          points: [
            "Collect all learning sources in one place",
            "Turn content into a video",
            "Create a conversational podcast",
            "Get a comprehensive summary",
            "Add questions and notes",
            "Generate a mind map",
            "Add your voice into the podcast",
          ],
        },
      ],
    },
  };

  const t = dict[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">{t.brand}</h1>

          {/* محوّل اللغات */}
          <div className="flex items-center gap-2">
            <span className="text-sm opacity-80">🌐</span>
            <select
              aria-label={lang === "ar" ? "اختر اللغة" : "Choose language"}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="min-w-[140px] rounded-lg bg-white/10 border border-white/40 px-3 py-1 text-sm"
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
            <button
              type="button"
              onClick={() => setLang((cur) => (cur === "ar" ? "en" : "ar"))}
              className="rounded-lg border border-white/40 bg-white/10 px-3 py-1 text-xs"
              title={lang === "ar" ? "Switch to English" : "التبديل للعربية"}
            >
              {lang === "ar" ? "EN" : "AR"}
            </button>
          </div>
        </div>
        <span className="text-sm text-white/70">{t.tagline}</span>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">{t.courseTitle}</h2>
          <p className="text-white/80 mb-8">{t.courseDesc}</p>

          {t.workshops.map((w, idx) => (
            <div key={idx} className="mb-6 p-5 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">{w.title}</h3>
              <ul className="list-disc ps-6 space-y-1 text-white/80">
                {w.points.map((p, i) => (<li key={i}>{p}</li>))}
              </ul>
            </div>
          ))}
        </section>

        <section className="bg-white/10 p-6 rounded-2xl border border-white/10">
          <h3 className="text-lg font-semibold mb-3">{t.subscribeTitle}</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(lang === "ar" ? `شكراً! سنقوم بالتواصل معك على ${email}` : `Thanks! We'll reach you at ${email}`);
              setEmail("");
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              className="flex-1 rounded-xl px-4 py-3 text-slate-900"
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="rounded-xl px-6 py-3 font-bold bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-500">
              {t.subscribe}
            </button>
          </form>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-6 text-white/60 text-sm">
        <div>© {new Date().getFullYear()} {t.footer}</div>
      </footer>
    </div>
  );
}
