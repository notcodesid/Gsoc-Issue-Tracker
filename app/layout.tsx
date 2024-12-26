import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GSOC Issue Tracker',
  description: 'Track and discover organizations participating in Google Summer of Code',


  // Open Graph metadata
  openGraph: {
    title: 'GSOC Issue Tracker',
    description: 'Track and discover organizations participating in Google Summer of Code',  
    url: "https://todos-tau-woad.vercel.app/",
    siteName: "GSOC Issue Tracker",
    images: [
      {
        url:"/open-graph.png", // image link
        width: 1200,
        height: 500,
        alt: "Title with their description",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: 'GSOC Issue Tracker',
    description: 'Track and discover organizations participating in Google Summer of Code',  
    images: ["/open-graph.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}