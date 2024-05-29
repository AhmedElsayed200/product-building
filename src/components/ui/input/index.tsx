import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className="p-2 rounded-md drop-shadow	text-gray-400 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
    />
  );
};

export default Input;
