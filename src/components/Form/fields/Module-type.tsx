export function ModuleType() {
  return (
    <div className="flex flex-row pt-8 pb-4">
      <div className="basis-128">
        <label htmlFor="module-name">Nome do Módulo</label>
        <input
          type="text"
          name="module-name"
          id="module-name"
          className="h-12 w-[15.62rem] bg-[#f3f3f3]! rounded-r-md"
        />
      </div>

      <div className="basis-64">
        <label htmlFor="module-wood-type">Tipo da Madeira</label>

        {/* Linkar a data de madeiras com o select */}
        <select
          name="wood-type"
          id="woods"
          className="h-12 w-[6.93rem] bg-[#f3f3f3]! rounded-r-md"
        >
          <option value="">Selecione um tipo de Madeira</option>
          <option value="">Opcao 1</option>
          <option value="">Opcao 2</option>
          <option value="">Opcao 3</option>
        </select>
      </div>
    </div>
  );
}
