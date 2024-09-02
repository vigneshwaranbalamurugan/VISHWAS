import React from "react";

interface DbControlProps {
    id: string; 
    label: string;
    value: string | number; 
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    valid?: boolean;
    errorLabel?: string;
    options?: Array<{
        name: Key | null | undefined; value: string | number; label: string 
}>;
    name?: string;
    disabled?: boolean;
}

const DbControl: React.FC<DbControlProps> = ({
    id,
    label,
    value,
    onChange,
    valid,
    errorLabel,
    options = [],
    disabled = false
}) => {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex">
                <div className="mr-auto">
                    <label
                        className="text-primary-marineBlue font-medium"
                        htmlFor={id} 
                    >
                        {label}
                    </label>
                </div>
            </div>
            <select
                id={id}
                value={value}
                onChange={onChange}
                className={
                    valid
                        ? "w-full p-2 rounded-lg text-lg text-primary-marineBlue outline-none focus:border-primary-purplishBlue duration-700 border border-secondary-lightGray"
                        : "w-full p-2 rounded-lg text-lg text-primary-strawberryRed outline-none focus:border-primary-strawberryRed duration-700 border border-primary-strawberryRed"
                }
                disabled={disabled}
            >
                <option value="">Select {label}</option>
                {options.map(option => (
                    <option key={option.name} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
            {!valid && errorLabel && (
                <div>
                    <label
                        className="text-primary-strawberryRed font-medium"
                        htmlFor={id} 
                    >
                        {errorLabel}
                    </label>
                </div>
            )}
        </div>
    );
};

export default DbControl;
