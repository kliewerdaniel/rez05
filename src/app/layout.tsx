import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Full-Stack Developer",
  description: "A comprehensive portfolio showcasing projects and skills in web development, AI/ML, and full-stack technologies.",
  keywords: ["Full-Stack Developer", "Software Engineer", "Portfolio", "Web Development", "React", "Next.js"],
  authors: [{ name: "Developer" }],
  creator: "Developer",
  publisher: "Developer",
  openGraph: {
    title: "Portfolio - Full-Stack Developer",
    description: "A comprehensive portfolio showcasing projects and skills in web development and software engineering.",
    url: "https://example.com",
    siteName: "Developer Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Full-Stack Developer",
    description: "A comprehensive portfolio showcasing projects and skills in web development and software engineering.",
    creator: "@developer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined') {
                  if (window.location.pathname === '/') {
                    document.body.classList.add('home-page');
                  }
                  console.log('Body className:', document.body.className);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
