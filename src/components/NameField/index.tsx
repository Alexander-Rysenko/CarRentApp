import { ChangeEvent, FC } from 'react';

import "./nameField.scss";

export interface iNameFieldProps {
  value: string | number;
  label: string;
  className?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


const NameField: FC<iNameFieldProps> = ({
  value,
  label,
  className = "",
  placeholder,
  onChange,
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e);

  return (
    <div className={`${className} nameFieldWrapper`}>
      <label
        className="nameFieldLabel"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        {...props}
        name="name"
        id={label}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default NameField;
