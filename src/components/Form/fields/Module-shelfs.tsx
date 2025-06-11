// O comportamento vai de acordo com a seleção do radio button

import type { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export function ModuleShelfs({ register }: Props) {
  return (
    <div className="flex flex-col">
      <p>Quantidade de Prateleiras</p>
      <input
        type="text"
        {...register("moduleShelfQuantity")}
        id="shelfQuantity"
        className="h-12 w-[8rem] p-2  bg-[#f3f3f3]! rounded-r-md"
        placeholder="0"
      />
    </div>
  );
}
