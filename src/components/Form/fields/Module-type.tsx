export function ModuleType() {
  return (
    <div className="flex flex-row">
      <div className="basis-2/3">
        <label htmlFor="module-name">Nome do Módulo</label>
        <input
          type="text"
          name="module-name"
          id="module-name"
          className="h-12 w-[16rem] p-2 bg-[#f3f3f3]! rounded-r-md"
        />
      </div>

      <div className="basis-1/3">
        <label htmlFor="module-wood-type">Tipo da Madeira</label>

        {/* Linkar a data de madeiras com o select */}
        <select
          name="wood-type"
          id="woods"
          className="h-12 w-[8rem] bg-[#f3f3f3]! rounded-r-md"
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
