import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Card = ({ card, updatePosition, updateSize, showDetails }) => {
  const [isResizing, setIsResizing] = useState(false);

  const handleDrag = (e, data) => {
    updatePosition(card.id, { x: data.x, y: data.y });
  };

  const handleResize = (e) => {
    if (isResizing) {
      const newWidth = e.clientX - card.position.x;
      const newHeight = e.clientY - card.position.y;
      updateSize(card.id, { width: newWidth, height: newHeight });
    }
  };

  const truncatedText = card.text.length > 50 
    ? card.text.slice(0, 50) + '...' 
    : card.text;

  return (
    <Draggable
      position={card.position}
      onDrag={handleDrag}
      onMouseMove={handleResize}
    >
      <div
        className="absolute bg-white p-4 rounded shadow-xl"
        style={{ width: card.size.width, height: card.size.height }}
      >
        <p className="text-sm">{truncatedText}</p>
        {card.text.length > 50 && (
          <button
            className=" bg-blue-500 text-white px-2 py-1 rounded text-xs hover:scale-105 mt-6 "
            onClick={() => showDetails(card)}
          >
            Show More
          </button>
        )}
        <div
          className="absolute bottom-0 right-0 w-4 h-4 bg-red-300 cursor-se-resize"
          onMouseDown={() => setIsResizing(true)}
          onMouseUp={() => setIsResizing(false)}
        />
      </div>
    </Draggable>
  );
};

export default Card;