import type { Stats } from "../App";
import type { Players } from "../App";

interface propDrill {
  inputs: Players;
  StInputs: Stats;
  select: string;
}
export function LivePreview({ inputs, StInputs, select }: propDrill) {
  function Rating(num: number) {
    if (num >= 64) {
      return "Bronze";
    } else if (num <= 74) {
      return "Silver";
    } else if (num <= 79) {
      return "Gold";
    } else if (num <= 89) {
      return "Rare Gold";
    } else if (num <= 100) {
      return "Elite";
    }
  }
  return (
    <section className="flex flex-col gap-10 w-full max-w-350 mb-10 ">
      <div className=" text-center flex flex-col gap-6">
        <h2 className="text-purple-50 font-extrabold text-2xl">Live preview</h2>
        <p className="text-gray-500 font-semibold text-md">
          updates as you type
        </p>
      </div>
      <article className="bg-purple-800 rounded-2xl p-5 py-10 border-3 border-purple-300 flex items-center justify-center">
        <div className="border-5 border-purple-300 max-w-100 overflow-hidden rounded-b-4xl w-full rounded-t-xl">
          <header className=" flex justify-between bg-purple-950 items-center px-5  text-purple-300 py-3">
            <div>
              <h2 className="font-extrabold text-[60px] leading-13">
                {inputs.overAll}
              </h2>
              <p className="text-xl font-semibold uppercase">{select}</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="bg-purple-300 text-black rounded-md font-bold uppercase text-center tracking-widest px-2">
                {Rating(inputs.overAll)}
              </div>
              <p className="font-semibold text-xl text-white">{inputs.club}</p>
            </div>
          </header>
          <main className="flex flex-col text-center">
            <div className="w-full overflow-hidden">
              <img
                className="max-h-75 w-full hover:scale-104 duration-500"
                src={inputs.imageUrl}
                alt="players image"
              />
            </div>
            <div className="bg-purple-300 p-3 uppercase font-bold text-4xl">
              {inputs.name}
            </div>
          </main>
          <footer className="flex bg-white p-5">
            <article className="w-1/2 flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <p className="font-extrabold text-2xl">{StInputs.pac}</p>
                <span className="text-gray-500 font-semibold text-md">PAC</span>
              </div>
              <div className="flex gap-3 items-center">
                <p className="font-extrabold text-2xl">{StInputs.sho}</p>
                <span className="text-gray-500 font-semibold text-md">SHO</span>
              </div>
              <div className="flex gap-3 items-center">
                <p className="font-extrabold text-2xl">{StInputs.pas}</p>
                <span className="text-gray-500 font-semibold text-md">PAS</span>
              </div>
            </article>
            <article className="flex flex-col w-1/2 gap-3 justify-center items-center border-l-2 border-l-gray-300">
              <div className="flex gap-3 items-center">
                <p className="font-extrabold text-2xl">{StInputs.dri}</p>
                <span className="text-gray-500 font-semibold text-md">DRI</span>
              </div>
              <div className="flex gap-3 items-center">
                <p className="font-extrabold text-2xl">{StInputs.def}</p>
                <span className="text-gray-500 font-semibold text-md">DEF</span>
              </div>
              <div className="flex gap-3 items-center">
                <p className="font-extrabold text-2xl">{StInputs.phy}</p>
                <span className="text-gray-500 font-semibold text-md">PHY</span>
              </div>
            </article>
          </footer>
        </div>
      </article>
    </section>
  );
}
