export type TColor = "red" | "green" | "blue" | "gray";
type TCategory = "Shoes" | "Food";

export interface ICategoryImg {
  [key: string]: string;
}
export default interface ICard {
  id: string;
  img_url: string;
  title: string;
  description: string;
  price: number;
  colors: TColor[];
  category: TCategory;
}
