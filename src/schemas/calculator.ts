import z from "zod";

// Form schema
export const createModuleFormSchema = z.object({
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