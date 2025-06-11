// TODO: Desabilitar Quantidade quando a opção for "Sem Portas"

import type { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export function ModuleDoors({ register }: Props) {
  return (
    <div className="flex flex-row">
      <label className="basis-2/3">
        Tipo da Porta
        <select
          {...register("moduleDoorType")}
          id="doorType"
          className="h-12 w-[16rem] bg-[#f3f3f3]! rounded-r-md"
        >
          <option value="">Seletione o tipo de Porta</option>
          <option value="Sem portas">Sem Portas</option>
          <option value="correr">Correr - R$ 70 Un</option>
          {/* Basculante - Pistão */}
          <option value="basculante">Basculante - R$ 30 Un</option>
        </select>
      </label>

      <label className="basis-1/3">
        Quantidade
        <input
          type="number"
          {...register("moduleDoorQuantity")}
          id="doorQuantity"
          className="h-12 w-[8rem] p-2 bg-[#f3f3f3]! rounded-r-md"
        />
      </label>
    </div>
  );
}
