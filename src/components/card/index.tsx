import { categoryImg } from "../../data/cardsData";
import ICard from "../../interfaces/card";
import "./index.css";

const Card = (props: ICard) => {
  const { img_url, title, description, price, category, colors } = props;
  console.log(categoryImg[category], img_url);
  return (
    <div className="max-w-64 border-2 border-gray-100 border-solid rounded p-2">
      <img src={img_url} alt={title} className="rounded mb-2" />
      <h3 className="mb-3">{title}</h3>
      <p className="text-gray-400 mb-3 truncate_two max-h-12">{description}</p>
      {/* colors */}
      <div className="flex flex-row gap-x-1 mb-3">
        {colors.map((color) => (
          <div
            key={color}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      {/* cost and category */}
      <div className="flex flex-row justify-between items-center mb-2">
        <p className="text-blue-700 font-semibold">${price}</p>
        <div className="flex flex-row gap-x-1 items-center">
          <p>{category}</p>
          <img
            src={categoryImg[category]}
            alt={category}
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-row gap-x-1">
        <button className="text-white font-bold py-2.5 bg-blue-700 rounded flex-1">
          Edit
        </button>
        <button className="text-white font-bold py-2.5 bg-red-700 rounded flex-1">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
