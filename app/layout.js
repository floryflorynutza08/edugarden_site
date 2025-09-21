// app/layout.js
import './globals.css';

export const metadata = {
  title: 'EduGarden',
  description: 'Legătura zilnică dintre părinți și grădinițe',
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "EduGarden – legătura zilnică dintre părinți și grădinițe",
    description: "Conectează-te zilnic cu grădinița copilului tău.",
    url: "https://edugarden.ro",
    siteName: "EduGarden",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "EduGarden Logo",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
