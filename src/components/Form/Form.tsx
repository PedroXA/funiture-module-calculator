import { ModuleType } from "./fields/Module-type";
import { ModuleDoors } from "./fields/Module-doors";
import { ModuleDrawers } from "./fields/Module-drawers";
import { ModuleMeasures } from "./fields/Module-measures";

import { ModuleShelfs } from "./fields/Module-shelfs";
import { ModuleComplement } from "./fields/Module-complement";
import Icons from "../../utils/Icons";

import { useForm, type FieldValues } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";

export function Form() {
  const [output, setOutput] = useState("");
  const { register, handleSubmit } = useForm<FieldValues>();

  function createModule(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  // Module Schema
  const createModuleFormSchema = z.object({
    moduleName: z.string().nonempty("O módulo precisa ter um nome."),
    moduleWoodType: z.string(),
    largura: z.number().int(),
    altura: z.number().int(),
    profundidade: z.number().int(),
    moduleDoorType: z.string(),
    moduleDoorQuantity: z.number().int(),
    moduleDrawerType: z.string().nonempty(),
    moduleDrawerQuantity: z.number().int(),
    moduleShelfQuantity: z.number().int(),
    moduleComplement: z.string(),
  });

  return (
    <form
      onSubmit={handleSubmit(createModule)}
      action=""
      className="-mt-20 ml-[8rem] mr-[8rem] flex flex-col bg-white w-[32rem] h-[37rem] p-8 rounded-2xl"
    >
      <h1 className="text-4xl">Dados do Módulo</h1>
      <ModuleType register={register} />
      <ModuleMeasures register={register} />
      <ModuleDoors register={register} />
      <ModuleDrawers register={register} />
      <ModuleShelfs register={register} />
      <ModuleComplement register={register} />

      <div className="flex gap-2">
        <button
          type="submit"
          className="w-[13rem] h-[3rem] bg-[#6BFF8B] flex items-center p-3.5 gap-2 rounded-2xl mt-5 font-semibold hover:brightness-75 duration-200"
        >
          <Icons.newModule height={16} /> Adicionar Módulo
        </button>

        <button
          type="submit"
          className="w-[8rem] h-[3rem] bg-[#FFCD29] flex justify-center items-center p-3.5 gap-2 rounded-2xl mt-5 font-semibold hover:brightness-75 duration-200"
        >
          <Icons.clear height={16} /> Limpar
        </button>
      </div>

      <pre>{output}</pre>
    </form>
  );
}
