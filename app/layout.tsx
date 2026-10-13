import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

// Self-hosted at build time, so visitors' browsers never contact Google Fonts.
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Privacy Policy – Square That",
  description:
    "How the Square That puzzle game handles your data, including the ads shown by Google AdMob.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
