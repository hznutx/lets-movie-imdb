import { FilterSearchInput } from "@/types";
import { useState } from "react";

const DropdownButton = ({ data }: { data?: any }) => {
  const [selected, setSelected] = useState(data?.[0]);

  return (
    <div className="rounded-3xl p-2 bg-[#0d1829]">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="text-slate-500 focus:outline-none w-full"
      >
        {data?.map((filter:any, i:any) => (
          <option value={filter} key={i} className="focus:outline-none">
            {selected && <p>{filter}</p>}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownButton;
