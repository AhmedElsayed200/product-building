import { allColors } from "../../data/cardsData";
import ICard from "../../interfaces/card";

interface IProps {
  addProduct: (product: ICard) => void;
  closeCard: () => void;
}

const CardForm = (props: IProps) => {
  const { addProduct, closeCard } = props;
  return (
    <div className="w-80 bg-white p-4 rounded flex flex-col gap-y-4 shadow-md absolute top-1/4 overflow-hidden">
      <h1 className="text-md">ADD A NEW PRODUCT</h1>
      <form className="flex flex-col gap-y-2">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-semibold">
            Product Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="p-2  rounded-md drop-shadow	text-gray-400 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-semibold">
            Product Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="p-2  rounded-md drop-shadow	text-gray-400 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="imgurl" className="text-sm font-semibold">
            Product Imgage URL
          </label>
          <input
            type="text"
            id="imgurl"
            name="imgurl"
            className="p-2  rounded-md drop-shadow	text-gray-400 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm font-semibold">
            Product Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="p-2  rounded-md drop-shadow	text-gray-400 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-semibold">
            Product Category
          </label>
          <select
            id="title"
            name="title"
            className="p-2  rounded-md drop-shadow	text-gray-400 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
          >
            <option value="shose">Shose</option>
            <option value="food">Food</option>
          </select>
        </div>
        <div className="flex flex-row gap-x-1">
          {allColors.map((color) => (
            <div
              key={color}
              className="w-4 h-4 rounded-full cursor-pointer"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        <div className="flex flex-row gap-x-1 mt-4">
          <button className="text-white font-semibold text-sm py-2 bg-blue-700 rounded flex-1">
            Submit
          </button>
          <button
            onClick={closeCard}
            className="text-black font-semibold text-sm py-2 bg-gray-100 rounded flex-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
