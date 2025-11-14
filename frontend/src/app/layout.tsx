import './globals.css'; // :white_check_mark: This line is REQUIRED
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'My App',
  description: 'My description',
    icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-[#070121] to-[#170080]">{children}</body>
    </html>
  );
}