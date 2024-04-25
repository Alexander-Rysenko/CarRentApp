import { ButtonHTMLAttributes, FC, MouseEvent } from 'react';

import "./button.scss"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  disabled?: boolean | undefined;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  disabled,
  onClick,
  ...props
}) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    !disabled && onClick?.(e);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      disabled={disabled}
      className={`button ${className} ${disabled ? "disabled" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
