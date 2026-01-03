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
          <footer
            style={{
              marginTop: "4rem",
              padding: "2rem 0",
              borderTop: "1px solid var(--glass-border)",
            }}
          >
            <div
              className="container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "2rem",
                flexWrap: "wrap",
                fontSize: "0.8rem",
                opacity: 0.8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <div style={{ fontWeight: 700 }}>BotAI</div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    opacity: 0.7,
                  }}
                >
                  © 2026 Botai IT Consulting LLC. All rights reserved.
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  fontSize: "0.75rem",
                  opacity: 0.8,
                  textAlign: "right",
                }}
              >
                <div>1401 21st ST # 5978</div>
                <div>Sacramento, CA 95811</div>
                <div>Email: contactus@botai.bot</div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
