import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "NotPad",
  description: "Immersive one platform for note taking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {" "}
        <Providers>
          <Box
            sx={{
              paddingX: "300px",
              paddingY: "170px",
            }}
          >
            <Navbar />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
