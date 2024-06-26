import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poppins, Open_Sans } from "next/font/google";
import Navbar from "@/components/headers/Navbar";
import Contact from "@/components/footer/Contact";
import NotSupport from "@/components/mobile/NotSupport";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Global Mitra Prima",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} pts-20 text-[#41444B]`}>
        <Navbar />
        {children}
        <Contact />
        {/* <NotSupport /> */}
      </body>
    </html>
  );
}
