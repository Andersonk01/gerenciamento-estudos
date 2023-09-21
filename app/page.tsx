"use client";
import { ContainerDisc } from "@/components/ContainerDisc";
import { disciplines } from "@/mock/disciplina";

import { useContext } from "react";
import { DiscCtx } from "@/src/context/discipline";

export default function Home() {
  const data = disciplines;

  const { setIdDisc } = useContext(DiscCtx);

  const handleIdDisc = (id: number) => {
    setIdDisc(id);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#A6A6A6]">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      {data.map((discipline) => (
        <ContainerDisc
          key={discipline.id}
          title={discipline.title}
          color={discipline.color}
          percentege={50}
          onClick={() => handleIdDisc(discipline.id)}
        />
      ))}
    </main>
  );
}
