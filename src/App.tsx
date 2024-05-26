import { useState } from "react";
import Card from "./components/card";
import { cardsDate } from "./data/cardsData";

export default function App() {
  const [cards, setCards] = useState(cardsDate);

  return (
    <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-items-center items-center mt-40 mb-8 mx-auto">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          img_url={card.img_url}
          title={card.title}
          description={card.description}
          price={card.price}
          colors={card.colors}
          category={card.category}
        />
      ))}
    </div>
  );
}
