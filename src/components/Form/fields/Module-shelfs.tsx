// O comportamento vai de acordo com a seleção do radio button

export function ModuleShelfs() {
  return (
    <div className="flex flex-row pt-4 pb-4">
      <div className="basis-64">
        <label htmlFor="Shelf">
          Prateleiras{" "}
          <span className="text-gray-400 text-[0.75rem]">(Opcional)</span>
        </label>

        <div className="flex flex-row">
          <div className="basis-16">
            <input
              type="radio"
              name="Shelf"
              id="containsShelf"
              className="w-4 h-4"
            />
            <label htmlFor="containsShelf" className="align-middle">
              Sim
            </label>
          </div>

          <div>
            <input type="radio" name="Shelf" id="noShelf" className="w-4 h-4" />
            <label htmlFor="noShelf">Não</label>
          </div>
        </div>
      </div>

      <div className="">
        <label htmlFor="">Quantidade de Prateleiras</label>
        <input
          type="text"
          name="shelfQuantity"
          id="shelfQuantity"
          className="h-12 w-10/12 bg-[#f3f3f3]! rounded-r-md"
        />
      </div>
    </div>
  );
}
