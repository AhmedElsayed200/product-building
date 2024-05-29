import { useEffect, useState, MouseEvent, FormEvent } from "react";
import Card from "./components/card";
import { cardsDate } from "./data/cardsData";
import CardForm from "./components/card form";
import { ICard } from "./interfaces/card";
import RemoveModal from "./components/remove modal";

export default function App() {
  const [cards, setCards] = useState<ICard[]>(cardsDate);
  const [showModal, setShowModal] = useState<string>("");
  const [toBeRemoved, setToBeRemoved] = useState<string>("");

  const handleCloseModal = () => {
    setShowModal("");
  };

  const addProduct = (product: ICard) => {
    product = { ...product, id: `id${Math.random() * 999999}` };
    setCards([...cards, product]);
  };

  const removeProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCards = cards.filter((card) => card.id !== toBeRemoved);
    setCards(newCards);
    handleCloseModal();
  };

  const handleShowRemoveModal = (e: MouseEvent<HTMLElement>, id: string) => {
    setShowModal("remove product");
    setToBeRemoved(id);
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
        onClick={() => setShowModal("add product")}
        className="py-2 px-1 bg-blue-600 text-white font-bold rounded mt-10"
      >
        Build a Product
      </button>
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-items-center items-center mt-10 mb-8">
        {cards.map((card) => (
          <Card
            key={card.id}
            productInfo={card}
            showRemoveModal={handleShowRemoveModal}
          />
        ))}
      </div>
      {showModal === "add product" && (
        <CardForm addProduct={addProduct} closeCard={handleCloseModal} />
      )}
      {showModal === "remove product" && (
        <RemoveModal
          handleSubmit={removeProduct}
          closeCard={handleCloseModal}
        />
      )}
    </div>
  );
}
