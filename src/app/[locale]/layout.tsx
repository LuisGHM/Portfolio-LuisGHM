import "../../styles/index.css";
import Providers from "../../providers/providers";
import Head from "next/head";

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <Head>
        <title>Luis Marchiore | Developer</title>
        <meta name="keywords" content="luis gustavo hedel marchiore, portfólio" />
      </Head>
      <body className="mx-auto">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
