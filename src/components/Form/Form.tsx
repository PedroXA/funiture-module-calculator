import { ModuleType } from "./fields/Module-type";
import { ModuleDoors } from "./fields/Module-doors";
import { ModuleDrawers } from "./fields/Module-drawers";
import { ModuleMeasures } from "./fields/Module-measures";

import { ModuleShelfs } from "./fields/Module-shelfs";
import { ModuleComplement } from "./fields/Module-complement";
import Icons from "../../utils/Icons";

export function Form() {
  return (
    <form
      action=""
      className="-mt-20 ml-[8rem] mr-[8rem] flex flex-col bg-white w-[32rem] h-[37rem] p-8 rounded-2xl"
    >
      <h1 className="text-4xl">Dados do Módulo</h1>
      <ModuleType />
      <ModuleMeasures />
      <ModuleDoors />
      <ModuleDrawers />
      <ModuleShelfs />
      <ModuleComplement />

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
    </form>
  );
}
