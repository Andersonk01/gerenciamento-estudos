import "../styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { HeaderMain } from "@/components/HeaderMain";
import DiscProvider from "@/src/context/discipline";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Anderson - Gestor",
  description: "Gestão de projetos e tarefas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <DiscProvider>
          <HeaderMain />
          {children}
        </DiscProvider>
      </body>
    </html>
  );
}
