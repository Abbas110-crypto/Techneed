"use client";
import { useState,useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import './theme.css';
import { usePathname } from 'next/navigation';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}) {
  const [isAdminPanel, setIsAdminPanel] = useState(true);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsAdminPanel(pathname.includes('/admin'));
  }, [pathname]); 

  return (
    <html lang="en">
      <head>
        <title>Sarfo</title>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,1,300&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {!isAdminPanel && <Navbar />}
        {children}
        {!isAdminPanel && <Footer />}
      </body>
    </html>
  );
}
