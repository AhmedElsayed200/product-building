import { ReactNode } from "react";

interface IProps {
  title: string;
  children: ReactNode;
}

const Modal = ({ title, children }: IProps) => {
  return (
    <div className="w-80 bg-white p-4 rounded flex flex-col gap-y-4 shadow-md absolute top-1/4 overflow-hidden">
      <h1 className="font-bold text-md">{title}</h1>
      {children}
    </div>
  );
};

export default Modal;
