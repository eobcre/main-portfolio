import React from 'react';

export const ButtonSubmit = (props) => {
  return (
    <div className='flex justify-center py-8'>
      <button
        className='button px-12 py-2 bg-dark-gray text-white font-bebas hover:bg-transparent hover:text-dark-gray'
        type='submit'
      >
        <span className='text'>{props.name}</span>
        <div className='pen_1'></div>
        <div className='pen_2'></div>
      </button>
    </div>
  );
};