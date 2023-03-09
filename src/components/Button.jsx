export const Button = (props) => {
  return (
    <div className='pt-8'>
      <a
        href={props.link}
        target='_blank'
        rel='noopener noreferrer'
        className='bg-dark-gray text-white text-2xl hover:text-light-blue px-20 py-2'
      >
        <span className='text font-bebas'>{props.name}</span>
      </a>
    </div>
  );
};
