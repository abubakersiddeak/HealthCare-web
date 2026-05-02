import "./globals.css";
import EmergencyBar from "@/components/layout/EmergencyBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Al-Shefa Clinic & Nursing Home",
  description:
    "24/7 medical care with expert doctors and modern facilities. Book appointments online.",
  icons: {
    icon: "/AL-SEHFALOGO.svg",
    shortcut: "/AL-SEHFALOGO.svg",
    apple: "/AL-SEHFALOGO.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <EmergencyBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
