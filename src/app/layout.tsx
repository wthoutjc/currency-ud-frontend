import { Box } from "@mui/material";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ThemeRegistry from "@/themes/ThemeRegistry";

// Components
import { Modal, SideDrawer } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend - Currency UD",
  description: "Frontend - Currency UD",
  keywords: ["Frontend - Currency UD"],
};

interface Props {
  children: React.ReactNode;
  sideClient: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <ThemeRegistry>
        <body className={`${montserrat.className}`}>
          <Modal />
          <Box
            sx={{
              display: "flex",
              padding: 2,
            }}
          >
            <SideDrawer />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {children}
            </Box>
          </Box>
        </body>
      </ThemeRegistry>
    </html>
  );
}
