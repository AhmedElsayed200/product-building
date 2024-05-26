type TColor = "red" | "green" | "blue" | "gray";

export default interface ICard {
  id: string;
  img_url: string;
  title: string;
  description: string;
  price: number;
  colors: TColor[];
  category: string;
}
