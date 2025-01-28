import React from 'react';
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import { Header } from "../components/header";
import Footer from "../components/footer";

interface LayoutProps {
    children: React.ReactNode; // Explicitly typing the children prop
}

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <Header />
                    <main className={inter.className}>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
