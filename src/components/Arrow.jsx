import React from 'react';
import { Arrow } from 'react-arrows';

const ArrowComponent = ({ start, end }) => {
  return (
    <Arrow
      from={{
        x: start.x,
        y: start.y,
      }}
      to={{
        x: end.x,
        y: end.y,
      }}
    />
  );
};

export default ArrowComponent;