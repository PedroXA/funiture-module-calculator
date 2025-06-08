export function ModuleMeasures() {
  return (
    <div className="flex flex-row">
      <div className="basis-64">
        <label htmlFor="">
          Largura <span className="text-red-600 text-xs">cm²</span>
        </label>
        <input
          type="number"
          name=""
          id=""
          className="h-12 w-[8rem] bg-[#f3f3f3]! rounded-r-md"
        />
      </div>

      <div className="basis-64">
        <label htmlFor="">
          Altura <span className="text-red-600 text-xs">cm²</span>
        </label>
        <input
          type="number"
          name=""
          id=""
          className="h-12 w-[8rem] bg-[#f3f3f3]! rounded-r-md"
        />
      </div>

      <div className="basis-64">
        <label htmlFor="" className="text-">
          Profundidade <span className="text-red-600 text-xs">cm²</span>
        </label>
        <input
          type="number"
          name=""
          id=""
          className="h-12 w-[8rem] bg-[#f3f3f3]! rounded-r-md"
        />
      </div>
    </div>
  );
}
