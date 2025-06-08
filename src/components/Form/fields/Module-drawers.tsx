export function ModuleDrawers() {
  return (
    <div className="flex flex-row pt-4 pb-4">
      <div className="">
        <label htmlFor="drawers">
          Tipo da Gaveta{" "}
          <span className="text-gray-400 text-[0.75rem]">(Opcional)</span>
        </label>
        <select
          name="drawers"
          id="drawers"
          className="h-12 w-[17rem] bg-[#f3f3f3]! rounded-r-md"
        >
          <option value="semGavetas">Sem Gavetas</option>
          <option value="interna">Interna</option>
          <option value="externa">Externa</option>
        </select>
      </div>

      {/* Parte condicional, se tiver gavetas a parte de baixo aparece */}
      <div className="">
        <label htmlFor="drawers-quantity">Quantidade</label>
        <input
          type="number"
          name="drawers-quantity"
          id="drawers-quantity"
          className="h-12 w-[8rem] bg-[#f3f3f3]! rounded-r-md"
        />
      </div>
    </div>
  );
}
