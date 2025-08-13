import "./globals.css";

export const metadata = {
  title: "Digital Teacher Platform",
  description: "Mastering AI for Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
