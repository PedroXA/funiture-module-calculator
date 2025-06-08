export function ModuleDoors() {
  return (
    <div className="flex flex-row pb-4 pt-4">
      <div className="">
        <label htmlFor="">
          Tipo da Porta{" "}
          <span className="text-gray-400 text-[0.75rem]">(Opcional)</span>
        </label>
        <select
          name="door-type"
          id="door-type"
          className="h-12 w-[17rem] bg-[#f3f3f3]! rounded-r-md"
        >
          <option value="">Seletione o tipo de Porta</option>
          <option value="">Correr - R$ 70 Un</option>
          {/* Basculante - Pistão */}
          <option value="">Basculante - R$ 30 Un</option>
        </select>
      </div>

      <div className="">
        <label htmlFor="">Quantidade</label>
        <input
          type="number"
          name="door-quantity"
          id="door-quantity"
          className="h-12 w-[8rem] bg-[#f3f3f3]! rounded-r-md"
        />
      </div>
    </div>
  );
}
