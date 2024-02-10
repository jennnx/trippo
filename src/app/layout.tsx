import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Trippo | Travel anywhere",
    description: "Find your next travel destination with AI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
