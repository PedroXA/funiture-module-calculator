export function ModuleMeasures() {
  return (
    <div className="flex">
      <label className="basis-1/3">
        Largura <span className="text-red-600 text-xs">cm²</span>
        <input
          type="number"
          name=""
          id=""
          className="h-12 w-[6.5rem] p-2 bg-[#f3f3f3]! rounded-r-md"
        />
      </label>

      <label className="basis-1/3">
        Altura <span className="text-red-600 text-xs">cm²</span>
        <input
          type="number"
          name=""
          id=""
          className="h-12 w-[6.5rem] p-2 bg-[#f3f3f3]! rounded-r-md"
        />
      </label>

      <label className="basis-1/3">
        Profundidade <span className="text-red-600 text-xs">cm²</span>
        <input
          type="number"
          name=""
          id=""
          className="h-12 w-[8rem] p-2 bg-[#f3f3f3]! rounded-r-md"
        />
      </label>
    </div>
  );
}
