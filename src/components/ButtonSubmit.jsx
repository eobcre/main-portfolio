export const ButtonSubmit = (props) => {
  return (
    <div className='flex justify-center py-8'>
      <button
        className='bg-dark-gray font-bebas text-white text-2xl hover:text-light-blue transition-all duration-300 px-20 py-2'
        type='submit'
      >
        <span className='text'>{props.name}</span>
      </button>
    </div>
  );
};
