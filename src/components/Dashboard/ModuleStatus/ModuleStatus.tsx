import Icons from "../../../utils/Icons";

export function ModuleStatus() {
  return (
    <div className="bg-white w-[33rem] h-[14rem] rounded-2xl flex flex-col p-3 mt-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] shadow-black">
      <header className="flex gap-2">
        <Icons.module height={32} />
        <h1>Módulos Criados:</h1>
      </header>
      <div className="flex flex-col items-center pt-5">
        <Icons.materials height={48} className="" />
        <p className="pt-4 font-light">Nenhum módulo foi criado ainda!</p>
        <span className="text-gray-400 text-[0.75rem]">
          Faça o cadastro de um módulo
        </span>
      </div>
    </div>
  );
}
