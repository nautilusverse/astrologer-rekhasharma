import "./globals.css";

export const metadata = {
  title: "Nautilus Verse",
  description: "Tailwind Test Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
