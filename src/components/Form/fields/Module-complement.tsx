export function ModuleComplement() {
  return (
    <div className="flex flex-col">
      <label htmlFor="">
        Acabamento <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        className="h-12 w-[16rem] bg-[#f3f3f3]! rounded-r-md"
      />
    </div>
  );
}
