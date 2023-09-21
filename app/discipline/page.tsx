"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { disciplineSubject } from "@/mock/assuto";

import { DiscCtx } from "@/src/context/discipline";
import {
  ChangeEventHandler,
  MouseEventHandler,
  useContext,
  useState,
} from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogDemo } from "@/components/AddAssunto";

// bg-[#A6A6A6]

export default function PageDisc() {
  const { idDisc } = useContext(DiscCtx);

  const [assunt, setAssunt] = useState<string>();
  const [detalhe, setDetalhe] = useState<string>();

  const [tasks, setTasks] = useState<any[]>([
    {
      title: "assunto",
      description: "detalhe",
    },
  ]); //[{title: "assunto", description: "detalhe"}

  const data = [{}];

  const handleAdd = () => {
    if (assunt === "") {
      return;
    }
    setTasks([...tasks, { title: assunt, description: detalhe }]);
    setAssunt("");
    setDetalhe("");
  };

  const subject =
    idDisc === null
      ? []
      : disciplineSubject.filter((item) => item.id === idDisc)[0].activities;

  return (
    <main className=" min-h-screen max-w-[920px] p-4 m-auto ">
      <div className="flex justify-between items-center mb-4 mt-4">
        <h1 className="text-lg ">Desempenho</h1>
      </div>
      <Image
        className="ml-4"
        src="/graf.png"
        alt="grafico"
        width={400}
        height={400}
      />

      <div className="flex justify-between items-center mb-4 mt-4">
        <h2 className="text-lg ">Topicos</h2>

        {/*//* botao para adicionar */}
        <DialogDemo
          onChangesAssunto={(e) => setAssunt(e.target.value)}
          valueAssunto={assunt}
          onChangesDetalhe={(e) => setDetalhe(e.target.value)}
          valueDetalhe={detalhe}
          onClick={handleAdd}
        />
      </div>

      {/* //* Componente padrao */}
      {tasks.map((item) => (
        <>
          <div className="mb-2 items-top flex space-x-2 rounded-md border border-solid p-4 hover:bg-gray-200">
            <Checkbox
              id="terms1"
              className="border border-green-500 border-solid"
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.title}
              </label>
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        </>
      ))}

      {/* //* secao dos assuntos para estudar */}
      <section>
        {subject.map((item) => (
          <div
            key={item.title}
            className="mb-2 items-top flex space-x-2 rounded-md border border-solid p-4 hover:bg-gray-200"
          >
            <Checkbox
              id={item.title}
              className="border border-green-500 border-solid"
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor={item.title}
                className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.title}
              </label>
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
