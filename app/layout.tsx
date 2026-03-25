import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gulshan Kumar — DevOps Engineer',
  description:
    'Personal website of Gulshan Kumar, a DevOps Engineer specializing in AWS, Kubernetes, CI/CD, and cloud infrastructure. Blog, tech news, and DevOps study resources.',
  keywords: ['DevOps', 'AWS', 'Kubernetes', 'CI/CD', 'Cloud', 'SRE', 'Docker', 'Terraform'],
  authors: [{ name: 'Gulshan Kumar', url: 'https://github.com/gulshkr' }],
  openGraph: {
    title: 'Gulshan Kumar — DevOps Engineer',
    description: 'DevOps blog, tech news, and cloud learning resources.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body suppressHydrationWarning style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '64px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
