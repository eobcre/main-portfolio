export const Button = (props) => {
  return (
    <div className='flex items-center pt-8'>
      <a
        href={props.link}
        target='_blank'
        rel='noopener noreferrer'
        className=' bg-dark-gray text-white text-2xl hover:scale-90 translate-x-4 delay-150 px-20 py-2'
      >
        <span className='text font-bebas'>{props.name}</span>
      </a>
    </div>
  );
};
