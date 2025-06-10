export function ModuleComplement() {
  return (
    <div className="flex flex-col">
      <p>
        Acabamento <span className="text-red-600">*</span>
      </p>
      <select
        name="wood-type"
        id="woods"
        className="h-12 w-[16rem] bg-[#f3f3f3]! rounded-r-md"
      >
        <option value="">Selecione o Acabamento</option>
        <option value="">Opcao 1</option>
        <option value="">Opcao 2</option>
        <option value="">Opcao 3</option>
      </select>
    </div>
  );
}
