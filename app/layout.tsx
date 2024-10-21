import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const curier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$TR(A.I)MP",
  description: "A app for $TR(A>I)MP tokkens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${curier.className}  antialiased`}>{children}</body>
    </html>
  );
}
