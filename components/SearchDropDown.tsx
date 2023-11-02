import { FilterSearchInput } from "@/types";
import { useState } from "react";

const DropdownButton = ({ data }: { data?: []}) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="rounded-3xl p-3 bg-[#0d1829]">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="focus:outline-none w-full"
      >
        {data?.map((filter, i) => (
          <option value={filter} key={i} className="focus:outline-none">
            {selected && <p>{filter}</p>}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownButton;
