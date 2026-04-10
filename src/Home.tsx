import { useState, useEffect, type Key } from "react";
import Card from "./components/Card";

function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("scripts/cardsInformation.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        const cardElements = data.map((card: { link: string; name: string; human: string; stations: string[]; }, index: Key | null | undefined) => (
          <Card
            key={index}
            link={card.link}
            name={card.name}
            human={card.human}
            stations={card.stations}
          />
        ));
        setCards(cardElements);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div className="w-full h-full bg-gray-900 flex justify-center flex-col">
      {cards}
    </div>
  );
}

export default Home;
