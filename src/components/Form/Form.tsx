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
      className="-mt-20 ml-[12rem] mr-[12rem] flex flex-col bg-white w-[32rem] h-[47rem] pl-12 pr-12 pt-8  rounded-2xl"
    >
      <h1 className="text-4xl grid col-span-3">Dados do Módulo</h1>
      <ModuleType />
      <ModuleMeasures />
      <ModuleDoors />
      <ModuleDrawers />
      <ModuleShelfs />
      <ModuleComplement />

      <div className="flex gap-2">
        <button
          type="submit"
          className="w-[13rem] h-[3rem] bg-[#6BFF8B] flex justify-center align-middle p-3.5 gap-2 rounded-2xl mt-5 font-semibold"
        >
          <Icons.newModule height={16} /> Adicionar Módulo
        </button>

        <button
          type="submit"
          className="w-[8rem] h-[3rem] bg-[#FFCD29] flex justify-center align-middle p-3.5 gap-2 rounded-2xl mt-5 font-semibold"
        >
          <Icons.clear height={16} /> Limpar
        </button>
      </div>
    </form>
  );
}
