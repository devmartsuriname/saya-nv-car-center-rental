import React, { useEffect, useRef } from "react";

interface LocationOption {
    id?: number;
    value: string;
    label: string;
}
interface CustomSelectProps {
    optionArray?: LocationOption[];
    value?: string;
    onChange?: (value: string) => void;
}
const defaultOptions: LocationOption[] = [
    { value: "Enter a Location", label: "Enter a Location" },
    { value: "Enter a Location 01", label: "Enter a Location 01" },
    { value: "Enter a Location 02", label: "Enter a Location 02" },
];

const CustomSelect: React.FC<CustomSelectProps> = ({
    optionArray = defaultOptions,
    value,
    onChange,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(
        value || optionArray[0].value
    );
    const selectRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleSelect = (val: string) => {
        setSelected(val);
        onChange?.(val);
        setIsOpen(false);
    };

    return (
        <div ref={selectRef} className={`nice-select selectmenu wide ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <span className="current" >
                {selected}
            </span>

            <ul className="list">
                {optionArray.map((item, index) => (
                    <li
                        key={item?.id || index}
                        data-value={item.value}
                        className={`option ${selected === item.value ? "focus" : ""}`}
                        onClick={() => handleSelect(item.value)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomSelect;

