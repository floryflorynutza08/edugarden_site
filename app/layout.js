// app/layout.js
import './globals.css';

export const metadata = {
  title: 'EduGarden',
  description: 'Legătura zilnică dintre părinți și grădinițe',
   icons: {
    icon: "/favicon.png",   // asta e imaginea ta din /public
  },
  openGraph: {
    title: "EduGarden – legătura zilnică dintre părinți și grădinițe",
    description: "Conectează-te zilnic cu grădinița copilului tău.",
    url: "https://edugarden.ro",
    siteName: "EduGarden",
    images: [
      {
        url: "/favicon.png",  // folosește aceeași imagine
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
