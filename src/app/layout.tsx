import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FaunaX - Conservation Through Technology",
  description: "Own a share in protecting wildlife. Buy fractional NFTs representing conservation assets and track real-time impact.",
  keywords: ['conservation', 'NFT', 'wildlife', 'blockchain', 'tokenization', 'environmental'],
  authors: [{ name: 'FaunaX Team' }],
  openGraph: {
    title: 'FaunaX - Conservation Through Technology',
    description: 'Own a share in protecting wildlife. Buy fractional NFTs representing conservation assets and track real-time impact.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-dark-bg text-white antialiased"
        )}
      >
        <div className="relative min-h-screen">
          {/* Animated particle background */}
          <div className="particles fixed inset-0 pointer-events-none">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${Math.random() * 10 + 15}s`,
                }}
              />
            ))}
          </div>
          
          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
