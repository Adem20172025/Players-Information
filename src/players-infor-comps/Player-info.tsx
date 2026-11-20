import type { ChangeEvent } from "react";
import type { Players } from "../App";
import type { Dispatch, SetStateAction } from "react";
interface props {
  inputs: Players;
  setInputs: Dispatch<SetStateAction<Players>>;
  select: string;
  setSelect: Dispatch<SetStateAction<string>>;
}
export function PlayerInfo({ inputs, setInputs, select, setSelect }: props) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value === "number" ? Number(value) : value,
    });
  }

  return (
    <section className=" flex flex-col gap-6 p-7">
      <h1 className="font-bold text-2xl uppercase">Player Info</h1>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-bold uppercase text-gray-500" htmlFor="name">
            Name
          </label>
          <input
            className="outline-0 focus:shadow-sm shadow-purple-950 border p-2 border-gray-300 rounded-xl"
            id="name"
            type="text"
            name="name"
            placeholder="enter palyer name..."
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <article className="flex gap-3">
          <div className="w-1/2 flex flex-col gap-1">
            <label
              className="font-bold uppercase text-gray-500"
              htmlFor="position"
            >
              Position
            </label>
            <select
              className="border p-2 border-gray-300 rounded-xl outline-0 focus:shadow-sm shadow-purple-950"
              name="position"
              id="position"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="GK">GK</option>
              <option value="CB">CB</option>
              <option value="LB">LB</option>
              <option value="RB">RB</option>
              <option value="CDM">CDM</option>
              <option value="CM">CM</option>
              <option value="CAM">CAM</option>
              <option value="LW">LW</option>
              <option value="RW">RW</option>
              <option value="ST" defaultValue="ST">
                ST
              </option>
              <option value="CF">CF</option>
            </select>
          </div>
          <div className="w-1/2 flex flex-col gap-1">
            <label
              className="font-bold uppercase text-gray-500"
              htmlFor="overAll"
            >
              OVERALL
            </label>
            <input
              className="border p-2 border-gray-300 rounded-xl outline-0 focus:shadow-sm shadow-purple-950"
              id="overAll"
              type="number"
              max="100"
              value={inputs.overAll}
              name="overAll"
              onChange={handleChange}
            />
          </div>
        </article>
        <div className=" flex flex-col gap-1">
          <label className="font-bold uppercase text-gray-500" htmlFor="club">
            club
          </label>
          <input
            className="outline-0 focus:shadow-sm shadow-purple-950 border p-2 border-gray-300 rounded-xl"
            type="text"
            id="club"
            name="club"
            value={inputs.club}
            onChange={handleChange}
            placeholder="enter your club..."
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label
            className="font-bold uppercase text-gray-500"
            htmlFor="imageUrl"
          >
            imageurl
          </label>
          <input
            className="outline-0 focus:shadow-sm shadow-purple-950 border p-2 border-gray-300 rounded-xl"
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={inputs.imageUrl}
            onChange={handleChange}
            placeholder="enter your image url..."
          />
        </div>
      </form>
    </section>
  );
}
