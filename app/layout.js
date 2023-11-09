"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "WTF",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 relative text-gray-950 pt-32 sm:pt-40 `}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          {/* <Navbar/> */}
          <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem]  rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem]  rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          {/* NEW Color Test */}
          {/* <div className="bg-[#498996] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem]  rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="bg-[#afbdac] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem]  rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div> */}

          <ActiveSectionContextProvider>
            <Header />
            {children}
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
