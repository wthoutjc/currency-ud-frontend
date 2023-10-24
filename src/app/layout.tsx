import "../styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ThemeRegistry from "@/themes/ThemeRegistry";

// Components
import { Navbar } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend - MELI",
  description: "Frontend - MELI",
  keywords: ["Frontend - MELI"],
};

interface Props {
  children: React.ReactNode;
  sideClient: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <ThemeRegistry>
        <body
          className={`${montserrat.className} flex flex-col max-w-full min-h-screen bg-slate-100 dark:bg-gray-900 dark:text-slate-100`}
        >
          {/* <Modal /> */}
          <Navbar />
          <div className="flex flex-[1_0_auto] justify-center">
            <div className="flex-row max-w-7xl w-full" id="content">
              <div
                className="flex flex-col md:p-0 w-full bg-rose-700"
                id="content"
              >
                {children}
              </div>
            </div>
          </div>
        </body>
      </ThemeRegistry>
    </html>
  );
}
