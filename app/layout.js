// app/layout.js
import './globals.css';

export const metadata = {
  title: 'EduGarden',
  description: 'Legătura zilnică dintre părinți și grădinițe',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}

