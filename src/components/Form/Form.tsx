import { ModuleType } from "./fields/Module-type";
import { ModuleDoors } from "./fields/Module-doors";
import { ModuleDrawers } from "./fields/Module-drawers";
import { ModuleMeasures } from "./fields/Module-measures";

import { ModuleShelfs } from "./fields/Module-shelfs";

export function Form() {
  return (
    <form
      action=""
      className="-mt-20 ml-18 mr-18 flex flex-col bg-white w-4/12 pl-12 pr-12 pt-8  rounded-2xl"
    >
      <h1 className="text-4xl grid col-span-3">Dados do Módulo</h1>
      <ModuleType />
      <ModuleMeasures />
      <ModuleDoors />
      <ModuleDrawers />
      <ModuleShelfs />
    </form>
  );
}
