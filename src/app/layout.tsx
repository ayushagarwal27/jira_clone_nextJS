import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvder from "@/context/AuthProvider";
import { NavBar } from "@/components/Nav";
import { ThemeProvider } from "@/context/ThemeProvider";
import { SideNav, SideNavMobile } from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvder>
            <NavBar />
            <SideNav isMobileView={false} />
            <SideNavMobile>
              <SideNav isMobileView={true} />
            </SideNavMobile>
            {children}
          </AuthProvder>
        </ThemeProvider>
      </body>
    </html>
  );
}
