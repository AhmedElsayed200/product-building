import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
}

const Input = ({ className, ...rest }: IProps) => {
  return <input className={className} {...rest} />;
};

export default Input;
