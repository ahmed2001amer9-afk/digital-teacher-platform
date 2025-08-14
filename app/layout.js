// app/layout.js
import '../styles/globals.css';

export const metadata = {
  title: 'منصة المعلم الرقمي',
  description: 'إتقان الذكاء الاصطناعي في التعليم',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* رأس الصفحة */}
          <header className="py-6 flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold">
              <span className="text-sky-400">منصة</span> المعلم الرقمي
            </h1>
          </header>

          {/* المحتوى */}
          {children}

          {/* تذييل */}
          <footer className="py-10 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} Digital Teacher Platform
          </footer>
        </div>
      </body>
    </html>
  );
}
