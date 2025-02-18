import React from 'react';
import CardDemo from './cards-demo-1';

const Card = ({ value }) => {
  // Check if value is defined and contains nominees
  if (!value || !value.nominees) {
    return <p className="text-center text-gray-500">No nominees available</p>;
  }

  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:flex-wrap m-2'>
      {value.nominees.map((item) => (
        <CardDemo key={item.id} nominee={item} />
      ))}
    </div>
  );
};

export default Card;
