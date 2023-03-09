// Components
import { Button } from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { data } from '../utils/data';
// Icons
// import TodoApp from '../assets/to-do-app.png';
// import TodoLogo from '../assets/to-do.png';
// import Salon from '../assets/salon.png';
// import SalonLogo from '../assets/salon.jpg';
// import OmikujiApp from '../assets/omikuji-app.png';
// import OmikujiLogo from '../assets/omikuji.png';

export const MyWork = () => {
  // JSX
  return (
    <div className='h-auto bg-light-blue py-20'>
      <div className='mx-auto w-4/5'>
        <h1 className='sub-st md:mb-16'>My Work</h1>
        {/* work list */}
        {data.map(({ name, src, logo, description }, index) => (
          <div key={index} className='md:flex gap-10 mt-28'>
            <div className='w-auto backdrop-blur md:w-2/4'>
              <span className='hidden md:block absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-clear-tape border-l-2 border-r-2 border-dotted'></span>
              <img src={src} alt={`${index}`} className='hidden md:block' />
            </div>
            <div className='md:w-2/4'>
              <img
                src={logo}
                alt={`${index}`}
                className='md:hidden'
                width='100'
                height='100'
              />
              <h2 className='my-work-title-st'>{name}</h2>
              <FadeIn>
                <p className='my-work-st'>{description}</p>
              </FadeIn>
              <Button name='See The App' link='#' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
