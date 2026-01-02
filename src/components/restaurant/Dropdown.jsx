import { ChevronDown } from "lucide-react";
import React, { useState } from "react";


function Dropdown({ label, options, value, onChange, width }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <span className="text-[#4F4F4F] text-[16px]">{label} :</span>

      <div className={`relative ${width}`}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="w-full px-4 py-2 pr-10 text-left text-[#9E9E9E]
                     border border-[#E0E0E0] rounded-lg
                     focus:outline-none focus:border-[#27A599]"
        >
          {value}

          <ChevronDown
            size={18}
            className={`absolute right-3 top-1/2 -translate-y-1/2
              transition-transform duration-200 text-[#9E9E9E]
              ${open ? "rotate-180" : ""}
            `}
          />
        </button>


        {open && (
          <ul
            className="absolute z-20 mt-1 w-full bg-white
                       border border-[#E0E0E0] rounded-lg shadow-md"
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="px-4 py-2 cursor-pointer text-[#4F4F4F]
                           hover:bg-[#F5F5F5]"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
