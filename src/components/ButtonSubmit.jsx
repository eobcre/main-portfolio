const ButtonSubmit = (props) => {
  return (
    <div className='flex justify-center py-8'>
      <button
        className='bg-dark-gray font-bebas text-white text-2xl hover:text-light-blue rounded-md transition-all px-10 py-2'
        type='submit'
      >
        <span>{props.name}</span>
      </button>
    </div>
  );
};

export default ButtonSubmit;
