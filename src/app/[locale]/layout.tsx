import "../../styles/index.css";
import Providers from "../../providers/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Luis Gustavo Hedel Marchiore | Software Engineer & AI Specialist',
  description: 'Software Engineer specializing in Full-Stack Development and Computer Vision. Master\'s student at UTFPR with experience in React, Python, Django, and AI/ML.',
  keywords: 'software engineer, computer vision, full-stack developer, react, python, django, AI, machine learning, luis gustavo, marchiore',
  authors: [{ name: 'Luis Gustavo Hedel Marchiore' }],
  openGraph: {
    title: 'Luis Gustavo Hedel Marchiore | Software Engineer',
    description: 'Software Engineer specializing in Full-Stack Development and Computer Vision',
    url: 'https://luismarchiore.dev',
    siteName: 'Luis Marchiore Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Gustavo Hedel Marchiore | Software Engineer',
    description: 'Software Engineer specializing in Full-Stack Development and Computer Vision',
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