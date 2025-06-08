import { Cards } from "./Cards/Cards";
import { ModuleStatus } from "./ModuleStatus/ModuleStatus";

export function Dashboard() {
  return (
    <div className="pl-32">
      <Cards />
      <ModuleStatus />
    </div>
  );
}
