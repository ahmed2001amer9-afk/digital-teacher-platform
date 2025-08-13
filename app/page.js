"use client";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const workshops = [
    { title: "الذكاء الاصطناعي من الصفر إلى الإبداع", points: [
      "تصميم عروض PowerPoint بضغطة زر",
      "إنشاء صور احترافية بضغطة زر",
      "تحويل النصوص إلى أصوات متنوعة",
      "تأليف قصة وتحويلها لفيديو",
      "التفاعل مع ملف PDF وتحويله لقصة أو مسرحية",
      "تحويل PDF إلى Word دون فقد التنسيق",
    ]},
    { title: "أدوات الأتمتة التعليمية السريعة", points: [
      "تصميم فيديو تعليمي من عنوان الدرس",
      "إنشاء اختبارات احترافية مع ورقة مراجعة",
      "إنشاء اختبار ومشاركته وتتبع النتائج في دقيقتين",
      "الحوار مع فيديو YouTube وتحويله لمسرحية",
      "تحويل PDF إلى PowerPoint احترافي",
    ]},
    { title: "الإبداع المتقدّم وإثراء المحتوى التعليمي", points: [
      "تحويل الدروس لخرائط ذهنية",
      "تصميم فيديوهات إعلانية أو تعليمية",
      "إنشاء أسئلة تفاعلية ممتعة",
      "ترجمة احترافية لملفات كبيرة",
      "تصميم فيديوهات متعددة الشخصيات الناطقة",
    ]},
    { title: "المعلّم الذكي المخصص للمادة", points: [
      "إنشاء برنامج شبيه بـ ChatGPT مخصص للمادة",
      "إتاحة أسئلة الطلاب حول المادة على مدار الساعة",
      "تدريب المعلم لجعل البرنامج ذكي ودقيق",
      "حصر الإجابات في نطاق المادة",
      "تجربة تفاعلية مخصصة للطلاب",
    ]},
    { title: "تصميم نماذج تعليمية تفاعلية تحاكي الواقع", points: [
      "التعريف بأحدث أداة لتصميم النماذج",
      "إنشاء بيئات تعليمية محاكية للواقع",
      "تضمين عناصر تفاعلية",
      "تقديم نموذج تطبيقي كامل",
      "تخصيص النماذج لموضوعات متعددة",
    ]},
    { title: "تجميع مصادر المعرفة وتحويلها إلى تجارب متعددة", points: [
      "جمع كل مصادر المعرفة في مكان واحد",
      "تحويل المحتوى إلى فيديو",
      "إنشاء بودكاست حواري",
      "الحصول على ملخص شامل",
      "إضافة الأسئلة والملاحظات",
      "تحويل المحتوى لخريطة ذهنية",
      "إدخال صوتك في البودكاست",
    ]},
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">Digital Teacher Platform</h1>
        <span className="text-sm text-white/70">Mastering AI for Education</span>
      </header>
      <main className="max-w-6xl mx-auto px-6">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">الدورة: احتراف الذكاء الاصطناعي في التعليم</h2>
          <p className="text-white/80 mb-8">تتضمن ست ورشات عملية تغطي أحدث تطبيقات الذكاء الاصطناعي في التعليم.</p>
          {workshops.map((w, idx) => (
            <div key={idx} className="mb-6 p-5 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">{w.title}</h3>
              <ul className="list-disc mr-6 space-y-1 text-white/80">
                {w.points.map((p, i) => (<li key={i}>{p}</li>))}
              </ul>
            </div>
          ))}
        </section>
        <section className="bg-white/10 p-6 rounded-2xl border border-white/10">
          <h3 className="text-lg font-semibold mb-3">اشترك لتصلك التحديثات</h3>
          <form
            onSubmit={(e) => { e.preventDefault(); alert(`شكراً! سنقوم بالتواصل معك على ${email}`); setEmail(""); }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              className="flex-1 rounded-xl px-4 py-3 text-slate-900"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="rounded-xl px-6 py-3 font-bold bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-500">
              اشتراك
            </button>
          </form>
        </section>
      </main>
      <footer className="max-w-6xl mx-auto px-6 py-6 text-white/60 text-sm">
        <div>© {new Date().getFullYear()} Digital Teacher Platform</div>
      </footer>
    </div>
  );
}
