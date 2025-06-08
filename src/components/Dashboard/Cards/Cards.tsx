import Icons from "../../../utils/Icons";

export function Cards() {
  return (
    <div className="flex gap-16 -mt-20">
      <div className="bg-white w-[10rem] h-40 flex flex-col justify-between items-center rounded-2xl p-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] shadow-black">
        <figure>
          <Icons.module height={32} />
        </figure>
        <h2 className="text-[1.5rem] font-semibold">0</h2>
        <p className="font-light">Módulos</p>
      </div>
      <div className="bg-white w-[10rem] h-40 flex flex-col justify-between items-center rounded-2xl p-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] shadow-black">
        <figure>
          <Icons.materials height={32} />
        </figure>
        <h2 className="text-[1.5rem] font-semibold">0</h2>
        <p className="font-light">Materiais</p>
      </div>
      <div className="bg-white w-[10rem] h-40 flex flex-col justify-between items-center rounded-2xl p-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] shadow-black">
        <figure>
          <Icons.currency height={32} />
        </figure>
        <h2 className="text-[1.5rem] font-semibold">R$0</h2>
        <p className="font-light">Total</p>
      </div>
    </div>
  );
}
