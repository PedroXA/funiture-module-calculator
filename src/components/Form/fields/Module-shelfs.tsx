// O comportamento vai de acordo com a seleção do radio button

export function ModuleShelfs() {
  return (
    <div className="flex flex-col">
      <p>
        Quantidade de Prateleiras{" "}
        <span className="text-gray-400 text-[0.75rem]">(Opcional)</span>
      </p>
      <input
        type="text"
        name="shelfQuantity"
        id="shelfQuantity"
        className="h-12 w-[8rem] p-2  bg-[#f3f3f3]! rounded-r-md"
        placeholder="0"
      />
    </div>
  );
}
