import type { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export function ModuleType({ register }: Props) {
  return (
    <div className="flex flex-row">
      <div className="basis-2/3">
        <label htmlFor="moduleName">Nome do Módulo</label>
        <input
          type="text"
          {...register("moduleName")}
          id="moduleName"
          className="h-12 w-[16rem] p-2 bg-[#f3f3f3]! rounded-r-md"
        />
      </div>

      <div className="basis-1/3">
        <label htmlFor="module-wood-type">Tipo da Madeira</label>

        {/* TO-DO: Linkar a database de madeiras com o select */}
        <select
          {...register("woodType")}
          id="woodType"
          className="h-12 w-[8rem] bg-[#f3f3f3]! rounded-r-md"
        >
          <option value="">Selecione um tipo de Madeira</option>
          <option value="option1">Opcao 1</option>
          <option value="option2">Opcao 2</option>
          <option value="option3">Opcao 3</option>
        </select>
      </div>
    </div>
  );
}
