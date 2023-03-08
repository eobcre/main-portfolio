// Components
import { Button } from '../components/Button';
import { FadeIn } from '../components/FadeIn';
// Icons
import TodoApp from '../assets/to-do-app.png';
import TodoLogo from '../assets/to-do.png';
import Salon from '../assets/salon.png';
import SalonLogo from '../assets/salon.jpg';
import OmikujiApp from '../assets/omikuji-app.png';
import OmikujiLogo from '../assets/omikuji.png';

export const MyWork = () => {
  // JSX
  return (
    <div className='h-auto bg-light-blue py-20'>
      <div className='mx-auto w-4/5'>
        <h1 className='sub-st md:mb-16'>My Work</h1>
        {/* To-do app */}
        <div className='mt-18 md:flex md:gap-10 md:mt-28'>
          <div className='w-auto backdrop-blur md:w-2/4'>
            <span className='hidden md:block absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-clear-tape border-l-2 border-r-2 border-dotted'></span>
            <img className='hidden md:block' src={TodoApp} alt='WebImage' />
          </div>
          <div className='md:w-2/4'>
            <img
              className='md:hidden'
              src={TodoLogo}
              alt='Logo'
              width='100'
              height='100'
            />
            <h2 className='my-work-title-st'>To-do App</h2>
            <FadeIn>
              <p className='my-work-st'>
                It's a simple to-do web app created in HTML, CSS and JavaScript.
                Create your to-do tasks and delete when you're done!
              </p>
            </FadeIn>
            <Button name='See The App' link='#' />
          </div>
        </div>
        {/* Salon website */}
        <div className='md:flex gap-10 mt-28'>
          <div className='w-auto backdrop-blur md:w-2/4'>
            <span className='hidden md:block absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-clear-tape border-l-2 border-r-2 border-dotted'></span>
            <img className='hidden md:block' src={Salon} alt='WebImage' />
          </div>
          <div className='md:w-2/4'>
            <img
              className='md:hidden'
              src={SalonLogo}
              alt='Logo'
              width='100'
              height='100'
            />
            <h2 className='my-work-title-st'>Salon Website</h2>
            <FadeIn>
              <p className='my-work-st'>
                The website was made for my friend who is a hair stylist in San
                Diego, CA. It is actually the first website that I created and
                re-created in Vite React, styled in Tailwind. She has exellent
                skills and technique. Check it out!
              </p>
            </FadeIn>
            <Button name='See The App' link='#' />
          </div>
        </div>
        {/* Omikuji */}
        <div className='md:flex gap-10 mt-28'>
          <div className='w-auto backdrop-blur md:w-2/4'>
            <span className='hidden md:block absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-clear-tape border-l-2 border-r-2 border-dotted'></span>
            <img className='hidden md:block' src={OmikujiApp} alt='WebImage' />
          </div>
          <div className='md:w-2/4'>
            <img
              className='md:hidden'
              src={OmikujiLogo}
              alt='Logo'
              width='100'
              height='100'
            />
            <h2 className='my-work-title-st'>Omikuji</h2>
            <FadeIn>
              <p className='my-work-st'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                quidem repudiandae natus temporibus dolorum vero incidunt optio
                vel ullam. Eaque tempora maiores inventore ullam. Repellat
                dignissimos ipsum iste sunt suscipit.
              </p>
            </FadeIn>
            <Button name='See The App' link='#' />
          </div>
        </div>
      </div>
    </div>
  );
};
