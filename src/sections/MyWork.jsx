// Components
import { Button } from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { data } from '../utils/data';

export const MyWork = () => {
  // JSX
  return (
    <div className='h-auto bg-light-blue py-20'>
      <div className='mx-auto w-4/5'>
        <h1 className='sub-st'>My Work</h1>
        {/* work list */}
        {data.map(
          (
            { name, src, logo, description, tech1, tech2, tech3, tech4, tech5 },
            index
          ) => (
            <div key={index} className='md:flex gap-10 md:mt-24'>
              <div className='w-auto backdrop-blur md:w-2/4'>
                <span className='hidden md:block absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-clear-tape border-l-2 border-r-2 border-dotted'></span>
                <img src={src} alt={`${index}`} className='hidden md:block' />
              </div>
              <div className='md:w-2/4'>
                <img
                  src={logo}
                  alt={`${index}`}
                  className='mt-10 md:hidden'
                  width='100'
                  height='100'
                />
                <h2 className='my-work-title-st'>{name}</h2>
                <FadeIn>
                  <p className='my-work-st'>{description}</p>
                  <div className='flex gap-4'>
                    <p className='text-white text-sm'>{tech1}</p>
                    <p className='text-white text-sm'>{tech2}</p>
                    <p className='text-white text-sm'>{tech3}</p>
                    <p className='text-white text-sm'>{tech4}</p>
                    <p className='text-white text-sm'>{tech5}</p>
                  </div>
                  <Button name='See The App' link='#' />
                </FadeIn>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
