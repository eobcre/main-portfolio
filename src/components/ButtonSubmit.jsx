export const ButtonSubmit = (props) => {
  return (
    <div className='flex justify-center py-8'>
      <button
        className='bg-dark-gray font-bebas text-white text-2xl hover:scale-90 translate-x-4 delay-150 px-20 py-2'
        type='submit'
      >
        <span className='text'>{props.name}</span>
      </button>
    </div>
  );
};
