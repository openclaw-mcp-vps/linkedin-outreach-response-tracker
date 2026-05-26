import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkedIn Outreach Response Tracker",
  description: "Track LinkedIn message response rates, open rates, and optimal send times. Built for sales teams, recruiters, and business development."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="752a217a-2fe7-4a40-9071-e02095a2ea9d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
