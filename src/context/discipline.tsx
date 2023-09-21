"use client";
import { useState } from "react";
import { createContext } from "react";

type TDiscCtx = {
  idDisc: number | null;
  setIdDisc: React.Dispatch<React.SetStateAction<number | null>>;
};

export const DiscCtx = createContext({} as TDiscCtx);

type Props = {
  children: React.ReactNode;
};

function DiscProvider({ children }: Props) {
  const [idDisc, setIdDisc] = useState<number | null>(null);

  return (
    <DiscCtx.Provider value={{ idDisc, setIdDisc }}>
      {children}
    </DiscCtx.Provider>
  );
}

export default DiscProvider;
