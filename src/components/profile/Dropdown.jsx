import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
export default function Dropdown({ value, setValue, options, accent }) {
    const [open, setOpen] = useState(false);

    const displayValue = typeof value === 'object' ? value.name : value;

    return (
        <div className="relative w-64">
            <button
                onClick={() => setOpen(!open)}

                className={`w-full  flex items-center justify-between rounded-xl border px-4 py-2 bg-white shadow-sm ${open? accent : "border-gray-400 text-gray-500"}`}
            >
                {typeof value === 'object' && (
                    <div className="flex items-center gap-2">
                        <img
                            src={`https://flagcdn.com/w20/${value.flag}.png`}
                            alt={value.name}
                            className="w-5 h-5 rounded-full"
                        />
                        <span>{value.name}</span>
                    </div>
                )}
                {typeof value !== 'object' && <span>{displayValue}</span>}
                <ChevronDown size={18} />
            </button>

            {open && (
                <div className="absolute  z-10 mt-2 w-full rounded-xl bg-white shadow-lg max-h-56 overflow-auto">
                    {options.map((opt) => (
                        <div
                            key={opt.name || opt}
                            onClick={() => {
                                setValue(opt);
                                setOpen(false);
                            }}
                            className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                            {typeof opt === 'object' && (
                                <div className="flex items-center gap-2">
                                    <img
                                        src={`https://flagcdn.com/w20/${opt.flag}.png`}
                                        alt={opt.name}
                                        className="w-5 h-5 rounded-full"
                                    />
                                    <span>{opt.name}</span>
                                </div>
                            )}
                            {typeof opt !== 'object' && <span>{opt}</span>}

                            {(typeof opt === 'object' && opt.name === value?.name) ||
                                (typeof opt !== 'object' && opt === value) ? (
                                <Check className="text-teal-500" size={16} />
                            ) : null}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
