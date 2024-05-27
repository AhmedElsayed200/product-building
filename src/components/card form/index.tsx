import { ChangeEvent, MouseEvent, useState } from "react";
import { allColors } from "../../data/cardsData";
import ICard, { TColor } from "../../interfaces/card";
import Modal from "../ui/modal";

interface IProps {
  addProduct: (product: ICard) => void;
  closeCard: () => void;
}

const CardForm = (props: IProps) => {
  const { addProduct, closeCard } = props;
  const [product, setProduct] = useState<ICard>({
    id: "",
    img_url: "",
    title: "",
    description: "",
    price: 0,
    colors: [],
    category: "Shoes",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name;
    setProduct({ ...product, [name]: e.target.value });
  };

  const handleChangeColor = (e: MouseEvent<HTMLElement>, color: TColor) => {
    if (product.colors?.includes(color)) {
      const newColors = product.colors?.filter((c) => c !== color);
      setProduct({ ...product, colors: newColors });
    } else {
      const newColors = product.colors;
      newColors?.push(color);
      setProduct({ ...product, colors: newColors });
    }
  };

  const handelSubmit = () => {
    addProduct(product);
    closeCard();
  };

  return (
    <Modal
      handleSubmit={handelSubmit}
      closeCard={closeCard}
      title="ADD A NEW PRODUCT"
    >
      <div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm font-semibold">
              Product Title
            </label>
            <input
              onChange={handleChange}
              value={product.title}
              type="text"
              id="title"
              name="title"
              required
              className="p-2 rounded-md drop-shadow	text-gray-400 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-semibold">
              Product Description
            </label>
            <input
              onChange={handleChange}
              value={product.description}
              type="text"
              id="description"
              name="description"
              required
              className="p-2 rounded-md drop-shadow	text-gray-400 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="img_url" className="text-sm font-semibold">
              Product Imgage URL
            </label>
            <input
              onChange={handleChange}
              value={product.img_url}
              type="text"
              id="img_url"
              name="img_url"
              required
              className="p-2 rounded-md drop-shadow	text-gray-400 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-sm font-semibold">
              Product Price
            </label>
            <input
              onChange={handleChange}
              value={product.price}
              type="number"
              id="price"
              name="price"
              required
              className="p-2 rounded-md drop-shadow	text-gray-400 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="text-sm font-semibold">
              Product Category
            </label>
            <select
              onChange={handleChange}
              id="category"
              name="category"
              className="p-2 rounded-md drop-shadow	text-gray-400 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
            >
              <option value="Shoes">Shoes</option>
              <option value="Food">Food</option>
            </select>
          </div>
          <div className="flex flex-row gap-x-1">
            {allColors.map((color) => {
              const isSelected = product.colors?.includes(color);
              return (
                <div
                  onClick={(e) => handleChangeColor(e, color)}
                  key={color}
                  className="w-4 h-4 rounded-full cursor-pointer"
                  style={{
                    backgroundColor: color,
                    outline: isSelected ? "2px solid black" : "0px",
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CardForm;
