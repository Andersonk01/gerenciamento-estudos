import Link from "next/link";
import {
  ActivityIcon,
  User,
  Palette,
  AlignJustify,
  Sun,
  Moon,
  SunMoon,
  SlidersHorizontal,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// hover:bg-[#00314f]

export const HeaderMain = () => {
  return (
    <header className="bg-[#1580C2] text-white">
      <nav className="flex flex-wrap items-center justify-between h-16 px-4 sm:px-10">
        <h1 className="font-extrabold items-center text-lg mx-2 sm:mx-4 p-2">
          Dashboard
        </h1>

        <div className="flex flex-grow justify-end items-center mx-2 sm:mx-4 ">
          <Link href="#movies">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-0 h-10 w-10">
                <AlignJustify className="w-full" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Username</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ActivityIcon className="mr-2 h-4 w-4" /> Progresso
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Palette className="mr-2 h-4 w-4" /> Tema
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Sun className="mr-2 h-4 w-4" />
                        Ligth
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Moon className="mr-2 h-4 w-4" /> Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <SunMoon className="mr-2 h-4 w-4" />
                        Sistema
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <SlidersHorizontal className="mr-2 h-4 w-4" /> Configurações
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Link>
        </div>
      </nav>
    </header>
  );
};
