import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const TITLE = "Ana Rosa - Website Pessoal";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: TITLE,
    template: "%s",
  },

  description:
    "Website pessoal da Ana Rosa. Acesse seus livros, artigos e produtos. Faça contato pelos meios disponíveis na página /contato",

  applicationName: TITLE,

  authors: [
    {
      name: "Ana Rosa",
      url: siteUrl,
    },
  ],

  creator: "Ana Rosa",
  publisher: "Ana Rosa",

  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: TITLE,
    title: TITLE,
    description:
      "Website pessoal da Ana Rosa. Acesse seus livros, artigos e produtos. Faça contato pelos meios disponíveis na página /contato",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flor Rosa da Ana Rosa",
      },
    ],
  },

   twitter: {
     card: "summary_large_image",
     title: TITLE,
     description:
       "Descrição clara da empresa, do serviço e da região atendida.",
     images: ["/opengraph-image.jpg"],
   },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

