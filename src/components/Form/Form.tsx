// TO-DO
// Change: Campos largura, altura e profundidade nao estao no formato da arquitetura de nomes do projeto
// A quantidade de portas deve aparecer quando o tipo da porta for diferente de Sem portas
// A quantidade de gavetas deve aparecer quando o tipo da gaveta for diferente de Sem gavetas

import Icons from "../../utils/Icons";

import { useForm, type FieldValues } from "react-hook-form";
import { useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function Form() {
  // Module Schema
  const createModuleFormSchema = z.object({
    moduleId: z.string(),
    moduleName: z.string().nonempty("O módulo precisa ter um nome."),
    moduleWoodType: z.string().nonempty("Selecione um tipo de Madeira"),
    largura: z.coerce.number().int(),
    altura: z.coerce.number().int(),
    profundidade: z.coerce.number().int(),
    moduleDoorType: z.string(),
    moduleDoorQuantity: z.coerce.number().int(),
    moduleDrawerType: z.string().nonempty(),
    moduleDrawerQuantity: z.coerce.number().int(),
    moduleShelfQuantity: z.coerce.number().int(),
    moduleComplement: z.string().nonempty(),
  });

  type CreateModuleFormData = z.infer<typeof createModuleFormSchema>;

  const [output, setOutput] = useState("");

  function createModule(data: CreateModuleFormData) {
    setOutput(JSON.stringify(data, null, 2));

    // Aqui no futuro: salvar no localStorage, etc.
    // saveModule(data)

    // Gera novo ID e reseta o form com ele
    reset({
      moduleId: generateModuleId(), // 👈 ID renovado aqui!
      moduleDoorQuantity: 0,
      moduleDrawerQuantity: 0,
      moduleShelfQuantity: 0,
      // moduleWoodType:
      moduleDoorType: "Selecione o Tipo de Porta",
    });
  }

  const generateModuleId = () => {
    return `mod-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
  };

  const [moduleId] = useState(generateModuleId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateModuleFormData>({
    resolver: zodResolver(createModuleFormSchema),
    defaultValues: {
      moduleId: generateModuleId(),
      moduleDoorQuantity: 0,
      moduleDrawerQuantity: 0,
      moduleShelfQuantity: 0,
      // moduleWoodType:
      moduleDoorType: "Selecione o Tipo de Porta",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(createModule)}
      action=""
      className="-mt-20 ml-[8rem] mr-[8rem] flex flex-col bg-white w-[32rem] h-fit p-8 rounded-2xl"
    >
      <h1 className="text-4xl">Dados do Módulo</h1>
      <div className="flex flex-row">
        <div className="basis-2/3">
          <input
            type="hidden"
            id="moduleId"
            value={moduleId}
            {...register("moduleId")}
          />
          <label htmlFor="moduleName">Nome do Módulo</label>
          <input
            type="text"
            {...register("moduleName")}
            id="moduleName"
            className="h-12 w-[16rem] p-2 bg-[#f3f3f3]! rounded-r-md"
          />
          {errors.moduleName && (
            <span className="flex">{errors.moduleName.message}</span>
          )}
        </div>

        <div className="basis-1/3">
          <label htmlFor="module-wood-type">Tipo da Madeira</label>

          {/* TO-DO: Linkar a database de madeiras com o select */}
          <select
            {...register("moduleWoodType")}
            id="woodType"
            className="h-12 w-[8rem] bg-[#f3f3f3]! rounded-r-md"
          >
            <option value="">Selecione um tipo de Madeira</option>
            <option value="option1">Opcao 1</option>
            <option value="option2">Opcao 2</option>
            <option value="option3">Opcao 3</option>
          </select>
          {errors.moduleWoodType && (
            <span className="flex">{errors.moduleWoodType.message}</span>
          )}
        </div>
      </div>

      <div className="flex">
        <label className="basis-1/3">
          Largura <span className="text-red-600 text-xs">cm²</span>
          <input
            type="number"
            {...register("largura")}
            id="largura"
            className="h-12 w-[6.5rem] p-2 bg-[#f3f3f3]! rounded-r-md"
          />
          {errors.largura && (
            <span className="flex">{errors.largura.message}</span>
          )}
        </label>

        <label className="basis-1/3">
          Altura <span className="text-red-600 text-xs">cm²</span>
          <input
            type="number"
            {...register("altura")}
            id="altura"
            className="h-12 w-[6.5rem] p-2 bg-[#f3f3f3]! rounded-r-md"
          />
          {errors.altura && (
            <span className="flex">{errors.altura.message}</span>
          )}
        </label>

        <label className="basis-1/3">
          Profundidade <span className="text-red-600 text-xs">cm²</span>
          <input
            type="number"
            {...register("profundidade")}
            id="profundidade"
            className="h-12 w-[8rem] p-2 bg-[#f3f3f3]! rounded-r-md"
          />
          {errors.profundidade && (
            <span className="flex">{errors.profundidade.message}</span>
          )}
        </label>
      </div>

      <div className="flex flex-row">
        <label className="basis-2/3">
          Tipo da Porta
          <select
            {...register("moduleDoorType")}
            id="doorType"
            className="h-12 w-[16rem] bg-[#f3f3f3]! rounded-r-md"
          >
            <option value="">Selecione o Tipo de Porta</option>
            <option value="Sem portas">Sem Portas</option>
            <option value="correr">Correr - R$ 70 Un</option>
            {/* Basculante - Pistão */}
            <option value="basculante">Basculante - R$ 30 Un</option>
          </select>
          {errors.moduleDoorType && (
            <span className="flex">{errors.moduleDoorType.message}</span>
          )}
        </label>

        <label className="basis-1/3">
          Quantidade
          <input
            type="number"
            {...register("moduleDoorQuantity")}
            id="doorQuantity"
            className="h-12 w-[8rem] p-2 bg-[#f3f3f3]! rounded-r-md"
          />
          {errors.moduleDoorQuantity && (
            <span className="flex">{errors.moduleDoorQuantity.message}</span>
          )}
        </label>
      </div>

      <div className="flex flex-row">
        <label className="basis-2/3">
          Tipo da Gaveta
          <select
            {...register("moduleDrawerType")}
            id="drawers"
            className="h-12 w-[16rem] bg-[#f3f3f3]! rounded-r-md"
          >
            <option value="semGavetas">Sem Gavetas</option>
            <option value="interna">Interna</option>
            <option value="externa">Externa</option>
          </select>
        </label>

        <label className="basis-1/3">
          Quantidade
          <input
            type="number"
            {...register("moduleDrawerQuantity")}
            id="drawersQuantity"
            className="h-12 w-[8rem] p-2 bg-[#f3f3f3]! rounded-r-md"
          />
        </label>
      </div>

      <div className="flex flex-col">
        <p>Quantidade de Prateleiras</p>
        <input
          type="text"
          {...register("moduleShelfQuantity")}
          id="shelfQuantity"
          className="h-12 w-[8rem] p-2 bg-[#f3f3f3]! rounded-r-md"
          placeholder="0"
        />
      </div>

      <div className="flex flex-col">
        <p>
          Acabamento <span className="text-red-600">*</span>
        </p>
        <select
          {...register("moduleComplement")}
          id="complement"
          className="h-12 w-[16rem] bg-[#f3f3f3]! rounded-r-md"
        >
          <option value="">Selecione o Acabamento</option>
          <option value="option1">Opcao 1</option>
          <option value="option2">Opcao 2</option>
          <option value="option3">Opcao 3</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="w-[13rem] h-[3rem] bg-[#6BFF8B] flex items-center p-3.5 gap-2 rounded-2xl mt-5 font-semibold hover:brightness-75 duration-200"
        >
          <Icons.newModule height={16} /> Adicionar Módulo
        </button>

        <button
          type="reset"
          className="w-[8rem] h-[3rem] bg-[#FFCD29] flex justify-center items-center p-3.5 gap-2 rounded-2xl mt-5 font-semibold hover:brightness-75 duration-200"
        >
          <Icons.clear height={16} /> Limpar
        </button>
      </div>

      <pre>{output}</pre>
    </form>
  );
}
function saveModule(data: {
  moduleId: string;
  moduleName: string;
  moduleWoodType: string;
  largura: number;
  altura: number;
  profundidade: number;
  moduleDoorType: string;
  moduleDoorQuantity: number;
  moduleDrawerType: string;
  moduleDrawerQuantity: number;
  moduleShelfQuantity: number;
  moduleComplement: string;
}) {
  throw new Error("Function not implemented.");
}
