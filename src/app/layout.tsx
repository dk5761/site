import Container from "@/components/container";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Sidebar from "@/components/sidebar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darshan Kadam",
  description: "Portfolio of Darshan Kadam",
};

const graphik = localFont({
  src: [
    {
      path: "../assets/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-graphik",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        graphik.variable
      )}
    >
      <body className={inter.className}>
        <Container>
          <main className="flex max-h-screen  flex-col md:flex-row md:items-start justify-start md:px-8 lg:px-24 pt-20 pb-20 md:pb-10 h-full">
            <Sidebar />
            {children}
          </main>
        </Container>
      </body>
    </html>
  );
}
