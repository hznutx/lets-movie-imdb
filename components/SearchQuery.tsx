import { genre } from "@/constants";
import { useState } from "react";

const DropdownButton = () => {
  const [selectedValue, setSelectedValue] = useState([]);

  const handleSelectChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="relative group rounded-full py-2">
      <div className="w-48 ">
        <select
          className="w-full p-2 focus:outline-none rounded-lg"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          {genre.map((item, i) => (
            <option value={item} key={i} className="hover:bg-red-400">
              {selectedValue && <p className="mt-2"> {item}</p>}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownButton;
