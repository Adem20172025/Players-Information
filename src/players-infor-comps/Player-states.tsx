import type { ChangeEvent } from "react";
import type { Stats } from "../App";
import type { Dispatch, SetStateAction } from "react";
interface props {
  StInputs: Stats;
  setStInputs: Dispatch<SetStateAction<Stats>>;
}
export function PlayerStats({ StInputs, setStInputs }: props) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setStInputs({
      ...StInputs,
      [name]: Number(value),
    });
  }

  return (
    <section className=" flex flex-col gap-6 p-7">
      <h1 className="font-bold text-2xl uppercase">player stats</h1>
      <form className="flex flex-col gap-5">
        <article className="flex gap-3">
          <div className="w-1/2 flex flex-col gap-1">
            <label className="font-bold uppercase text-gray-500" htmlFor="pac">
              pac
            </label>
            <input
              type="number"
              max="100"
              className="outline-0 focus:shadow-sm shadow-purple-950 border p-2 border-gray-300 rounded-xl"
              name="pac"
              id="pac"
              value={StInputs.pac}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2 flex flex-col gap-1">
            <label className="font-bold uppercase text-gray-500" htmlFor="sho">
              sho
            </label>
            <input
              className="outline-0 focus:shadow-sm shadow-purple-950 border p-2 border-gray-300 rounded-xl"
              id="sho"
              max="100"
              type="number"
              value={StInputs.sho}
              name="sho"
              onChange={handleChange}
            />
          </div>
        </article>
        <article className="flex gap-3">
          <div className="w-1/2 flex flex-col gap-1">
            <label className="font-bold uppercase text-gray-500" htmlFor="pas">
              pas
            </label>
            <input
              type="number"
              max="100"
              className="outline-0 focus:shadow-sm shadow-purple-950 border p-2 border-gray-300 rounded-xl"
              name="pas"
              id="pas"
              value={StInputs.pas}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2 flex flex-col gap-1">
            <label className="font-bold uppercase text-gray-500" htmlFor="dri">
              dri
            </label>
            <input
              className="outline-0 focus:shadow-sm shadow-purple-950 border p-2 border-gray-300 rounded-xl"
              id="dri"
              max="100"
              type="number"
              value={StInputs.dri}
              name="dri"
              onChange={handleChange}
            />
          </div>
        </article>
        <article className="flex gap-3">
          <div className="w-1/2 flex flex-col gap-1">
            <label className="font-bold uppercase text-gray-500" htmlFor="def">
              def
            </label>
            <input
              type="number"
              className="outline-0 focus:shadow-sm shadow-purple-950 border p-2 border-gray-300 rounded-xl"
              name="def"
              id="def"
              max="100"
              value={StInputs.def}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2 flex flex-col gap-1">
            <label className="font-bold uppercase text-gray-500" htmlFor="phy">
              phy
            </label>
            <input
              className="outline-0 focus:shadow-sm shadow-purple-950 border p-2 border-gray-300 rounded-xl"
              id="phy"
              max="100"
              type="number"
              value={StInputs.phy}
              name="phy"
              onChange={handleChange}
            />
          </div>
        </article>
      </form>
    </section>
  );
}
