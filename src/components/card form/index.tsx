import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { allColors, defaultErros, defaultValues } from "../../data/cardsData";
import { ICard, TColor } from "../../interfaces/card";
import Modal from "../ui/modal";
import Input from "../ui/input";
import { FormInputs } from "../../data/formData";
import Button from "../ui/button";
import { formInputValidation } from "../../validation";
import ErrorText from "../ui/error";

interface IProps {
  addProduct: (product: ICard) => void;
  closeCard: () => void;
}

const CardForm = (props: IProps) => {
  const { addProduct, closeCard } = props;
  const [errors, setErrors] = useState(defaultErros);
  const [product, setProduct] = useState<ICard>(defaultValues);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name;
    setProduct({ ...product, [name]: e.target.value });
    setErrors({ ...errors, [name]: "" });
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const err = formInputValidation(product);
    setErrors(err);
    const isError = Object.values(err).some((ele) => ele.length >= 1);
    if (isError) return;
    addProduct(product);
    closeCard();
  };

  return (
    <Modal title="ADD A NEW PRODUCT">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
        {FormInputs.map((data) => (
          <div className="flex flex-col" key={data.label}>
            <label htmlFor={data.name} className="text-sm font-semibold">
              {data.label}
            </label>
            <Input
              onChange={handleChange}
              value={product[data.name]}
              type={data.type}
              id={data.id}
              name={data.name}
            />
            <ErrorText text={errors[data.name]} />
          </div>
        ))}
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
        <div className="flex flex-row gap-x-1 mt-4">
          <Button type="submit" className="text-white bg-blue-700">
            Submit
          </Button>
          <Button onClick={closeCard} className="text-black bg-gray-100">
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CardForm;
