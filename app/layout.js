// app/layout.js
import "./globals.css";

export const metadata = {
  title: "منصة المعلم الرقمي | Digital Teacher",
  description: "إتقان الذكاء الاصطناعي في التعليم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="antialiased bg-gradient-to-br text-white">
        {children}
      </body>
    </html>
  );
}
