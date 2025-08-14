import './globals.css';

export const metadata = {
  title: 'منصة المعلم الرقمي',
  description: 'منصة دورات الذكاء الاصطناعي للمعلمين',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
