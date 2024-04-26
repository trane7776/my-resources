import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: "Trane's Resources",
  description: "Trane's Resources",
  other: {
    'theme-color': '#0d1117',
    'color-scheme': 'dark only',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
