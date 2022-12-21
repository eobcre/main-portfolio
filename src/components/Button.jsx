import React from 'react';

export const Button = (prop) => {
  return (
    <div className='flex items-center pt-8'>
      <a
        href={prop.link}
        target='_blank'
        rel='noopener noreferrer'
        className='button px-20 py-2 bg-dark-gray text-white hover:bg-transparent hover:text-dark-gray'
      >
        <span className='text font-bebas'>{prop.name}</span>
        <div className='pen_1'></div>
        <div className='pen_2'></div>
      </a>
    </div>
  );
};