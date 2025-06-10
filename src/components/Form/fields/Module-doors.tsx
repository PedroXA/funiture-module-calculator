// TODO: Desabilitar Quantidade quando a opção for "Sem Portas"

export function ModuleDoors() {
  return (
    <div className="flex flex-row">
      <label className="basis-2/3">
        Tipo da Porta{" "}
        <span className="text-gray-400 text-[0.75rem]">(Opcional)</span>
        <select
          name="door-type"
          id="door-type"
          className="h-12 w-[16rem] bg-[#f3f3f3]! rounded-r-md"
        >
          <option value="">Seletione o tipo de Porta</option>
          <option value="">Sem Portas</option>
          <option value="">Correr - R$ 70 Un</option>
          {/* Basculante - Pistão */}
          <option value="">Basculante - R$ 30 Un</option>
        </select>
      </label>

      <label className="basis-1/3">
        Quantidade
        <input
          type="number"
          name="door-quantity"
          id="door-quantity"
          className="h-12 w-[8rem] p-2 bg-[#f3f3f3]! rounded-r-md"
        />
      </label>
    </div>
  );
}
