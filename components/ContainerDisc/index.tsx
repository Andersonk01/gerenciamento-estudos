import React from "react";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

type TDisciplineProps = {
  title: string;
  color: string;
  percentege: number;
  onClick: () => void;
};

export const ContainerDisc = ({
  title,
  color,
  percentege = 0,
  onClick,
}: TDisciplineProps) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="text-white rounded-md bg-[#00314f] w-[75vw] h-24 p-2 mb-4 relative flex justify-around hover:scale-110 transition"
    >
      <span
        style={{ backgroundColor: color.slice(0, -2), width: percentege + "%" }}
        className="absolute left-0 top-0 z-1 h-full rounded-md"
      />

      <code className="absolute left-[10px] top-[10px] font-semibold z-10">
        {percentege}%
      </code>
      <h2 className="ml-2 text-white text-3xl flex-1 self-end truncate z-10">
        {title}
      </h2>

      <button className="h-full w-10 " onClick={onClick}>
        <Link href="/discipline">
          <ChevronRight className="h-full w-10 z-10 hover:scale-125" />
        </Link>
      </button>
    </div>
  );
};

{
  /* 
<Link href="/detail">
  <Button
    onClick={() => handleIdMovie(item.id)}
    className="w-full"
    variant="destructive"
  >
    Detalhes
  </Button>
</Link> 
*/
}
