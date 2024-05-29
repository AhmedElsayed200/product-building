export type TColor = "red" | "green" | "blue" | "gray";
type TCategory = "Shoes" | "Food";

export interface ICategoryImg {
  [key: string]: string;
}
export interface ICard {
  id: string;
  img_url: string;
  title: string;
  description: string;
  price: number;
  colors?: TColor[];
  category: TCategory;
}

export interface ICardErrors {
  title: string;
  description: string;
  img_url: string;
  price: string;
}

export interface IFormInput {
  label: string;
  type: string;
  id: string;
  name: "title" | "description" | "price" | "img_url";
}
