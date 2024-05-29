import { ICard, ICardErrors } from "../interfaces/card";

export const formInputValidation = ({
  title,
  description,
  img_url,
  price,
}: ICard): ICardErrors => {
  const errors = {
    title: "",
    description: "",
    img_url: "",
    price: "",
  };
  const titleTrimmed = title.trim();
  const descTrimmed = description.trim();
  const imageUrlRegex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;
  const imgUrlTrimmed = img_url.trim();

  if (titleTrimmed.length < 10 || titleTrimmed.length > 80) {
    errors.title = "Product title should be between 10 to 80 chars";
  }
  if (descTrimmed.length < 10 || descTrimmed.length > 80) {
    errors.description = "Product title should be between 10 to 80 chars";
  }
  if (!imgUrlTrimmed.match(imageUrlRegex)) {
    errors.img_url = "Provide a valid image url";
  }
  if (price <= 0) {
    errors.price = "Product price should be bigger than 0$";
  }

  return errors;
};
