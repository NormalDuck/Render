import { Select } from "flowbite-react";
import { PropsWithChildren } from "react";

interface SelectInputProps extends PropsWithChildren {
  defaultValue?: string;
  onChange?: (value: string) => void;
  description: string;
}

export function SelectInputText({
  children,
  description,
  defaultValue,
  onChange,
}: SelectInputProps) {
  return (
    <div className="grid select-none place-items-center text-center">
      <text className="select-none">{description}</text>
      <Select
        defaultValue={defaultValue}
        onChange={(event) => {
          if (onChange) onChange(event.currentTarget.value);
        }}
      >
        {children}
      </Select>
    </div>
  );
}
