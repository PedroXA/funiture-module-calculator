import { Cards } from "./Cards/Cards";
import { ModuleStatus } from "./ModuleStatus/ModuleStatus";

export function Dashboard() {
  return (
    <div>
      <Cards />
      <ModuleStatus />
    </div>
  );
}
