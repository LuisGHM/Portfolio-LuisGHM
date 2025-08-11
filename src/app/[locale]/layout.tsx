import "../../styles/index.css";
import Providers from "../../providers/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://luismarchiore.dev'),
  title: 'Luis Gustavo Hedel Marchiore | Software Engineer & AI Specialist',
  description: 'Software Engineer specializing in Full-Stack Development and AI Engineering. Master\'s student at UTFPR with experience in React, Python, Django, and AI/ML.',
  keywords: 'software engineer, AI engineering, full-stack developer, react, python, django, AI, machine learning, luis gustavo, marchiore',
  authors: [{ name: 'Luis Gustavo Hedel Marchiore' }],
  openGraph: {
    title: 'Luis Gustavo Hedel Marchiore | Software Engineer',
    description: 'Software Engineer specializing in Full-Stack Development and AI Engineering',
    url: 'https://luismarchiore.dev',
    siteName: 'Luis Marchiore Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luis Gustavo Hedel Marchiore - Software Engineer & AI Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Gustavo Hedel Marchiore | Software Engineer',
    description: 'Software Engineer specializing in Full-Stack Development and AI Engineering',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className="mx-auto">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}