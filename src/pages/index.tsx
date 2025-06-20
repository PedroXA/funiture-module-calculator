import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Dashboard } from "../components/Dashboard/Dashboard";

export function IndexPage() {
  return (
    <div>
      <header className="p-16 pl-[8rem] pr-[8rem] bg-red-background">
        <h3 className="text-white pb-16">Calculadora de Módulos</h3>
      </header>

      <div className="flex">
        <Form />
        <Dashboard />
      </div>
    </div>
  );
}
