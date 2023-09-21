import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import { ChangeEventHandler, MouseEventHandler } from "react";

type DialogDemoProps = {
  onChangesAssunto?: ChangeEventHandler<HTMLInputElement>;
  onChangesDetalhe?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler;
  valueAssunto?: string;
  valueDetalhe?: string;
};

export function DialogDemo({
  onChangesAssunto,
  onChangesDetalhe,
  onClick,
  valueAssunto,
  valueDetalhe,
}: DialogDemoProps = {}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon className="text-gray-800" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Username</DialogTitle>
          <DialogDescription>
            Adicione mais assuntos a sua lista
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Assunto" className="text-right">
              Assunto
            </Label>
            <Input
              id="Assunto"
              placeholder="Ex: Gramatica"
              className="col-span-3"
              value={valueAssunto}
              onChange={onChangesAssunto}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="detalhe" className="text-right">
              Detalhe
            </Label>
            <Input
              id="detalhe"
              placeholder="Ex: Somente leitura"
              className="col-span-3"
              value={valueDetalhe}
              onChange={onChangesDetalhe}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClick} type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
