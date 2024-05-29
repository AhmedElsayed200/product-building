import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...rest }: IProps) => {
  return (
    <button
      {...rest}
      className={`font-semibold text-sm py-2 bg-blue-700 rounded flex-1 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
