import React, { useState } from 'react';
import Card from './Card';
import Arrow from './Arrow';
import Popup from './Popup';

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const [arrows, setArrows] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [newCardText, setNewCardText] = useState('');

  const addCard = () => {
    if (newCardText.trim() === '') return;
    const newCard = {
      id: Date.now(),
      text: newCardText,
      position: { x: 0, y: 0 },
      size: { width: 200, height: 150 },
    };
    setCards([...cards, newCard]);
    setNewCardText('');
  };

  const updateCardPosition = (id, position) => {
    setCards(cards.map(card => card.id === id ? { ...card, position } : card));
  };

  const updateCardSize = (id, size) => {
    setCards(cards.map(card => card.id === id ? { ...card, size } : card));
  };

  const showCardDetails = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-auto bg-slate-200 shadow-lg p-4">
      <div className="mb-4">
        <input
          type="text"
          value={newCardText}
          onChange={(e) => setNewCardText(e.target.value)}
          placeholder="Enter card text"
          className="border border-black rounded px-2 py-2 mr-2"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addCard}
        >
          Add Card
        </button>
      </div>
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          updatePosition={updateCardPosition}
          updateSize={updateCardSize}
          showDetails={showCardDetails}
        />
      ))}
      {arrows.map(arrow => (
        <Arrow key={arrow.id} start={arrow.start} end={arrow.end} />
      ))}
      {selectedCard && (
        <Popup card={selectedCard} onClose={closePopup} />
      )}
    </div>
  );
};

export default Canvas;