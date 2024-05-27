interface IProps {
  handleSubmit: () => void;
  closeCard: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ handleSubmit, closeCard, title, children }: IProps) => {
  return (
    <div className="w-80 bg-white p-4 rounded flex flex-col gap-y-4 shadow-md absolute top-1/4 overflow-hidden">
      <h1 className="font-bold text-md">{title}</h1>
      {children}
      <div className="flex flex-row gap-x-1 mt-4">
        <button
          onClick={handleSubmit}
          className="text-white font-semibold text-sm py-2 bg-blue-700 rounded flex-1"
        >
          Submit
        </button>
        <button
          onClick={closeCard}
          className="text-black font-semibold text-sm py-2 bg-gray-100 rounded flex-1"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
