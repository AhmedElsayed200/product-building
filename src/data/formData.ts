import { IFormInput } from "../interfaces/card";

export const FormInputs: IFormInput[] = [
  {
    label: "Product Title",
    type: "text",
    id: "title",
    name: "title",
  },
  {
    label: "Product Description",
    type: "text",
    id: "description",
    name: "description",
  },
  {
    label: "Product Imgage URL",
    type: "text",
    id: "img_url",
    name: "img_url",
  },
  {
    label: "Product Price",
    type: "number",
    id: "price",
    name: "price",
  },
];
