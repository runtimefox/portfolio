import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { NavigationTabs } from '@/components/NavigationTabs';

const gilry = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Bold.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-gilry',
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My personal portfolio showcasing my skills and projects as a frontend developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gilry.className} h-full antialiased`}>
      <body className="min-h-full">
        <NavigationTabs />
        {children}
      </body>
    </html>
  );
}
