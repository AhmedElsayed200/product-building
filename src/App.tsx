import { useEffect, useState } from "react";
import Card from "./components/card";
import { cardsDate } from "./data/cardsData";
import CardForm from "./components/card form";
import ICard from "./interfaces/card";

export default function App() {
  const [cards, setCards] = useState(cardsDate);
  const [showModal, setShowModal] = useState(false);

  const addProduct = (product: ICard) => {
    setCards([...cards, product]);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setShowModal(true)}
        className="py-2 px-1 bg-blue-600 text-white font-bold rounded mt-10"
      >
        Build a Product
      </button>
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-items-center items-center mt-10 mb-8">
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
      {showModal && (
        <CardForm
          addProduct={addProduct}
          closeCard={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
