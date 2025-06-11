import type { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export function ModuleComplement({ register }: Props) {
  return (
    <div className="flex flex-col">
      <p>
        Acabamento <span className="text-red-600">*</span>
      </p>
      <select
        {...register("moduleComplement")}
        id="complement"
        className="h-12 w-[16rem] bg-[#f3f3f3]! rounded-r-md"
      >
        <option value="semAcabamento">Selecione o Acabamento</option>
        <option value="option1">Opcao 1</option>
        <option value="option2">Opcao 2</option>
        <option value="option3">Opcao 3</option>
      </select>
    </div>
  );
}
