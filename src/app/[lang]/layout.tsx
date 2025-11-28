import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "BotAI | The Future of Intelligent Automation",
  description: "BotAI combines advanced robotics with state-of-the-art artificial intelligence to revolutionize the workforce.",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar lang={lang} dict={dict} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
