import React from 'react';
// Icons
import TodoLogo from '../assets/to-do.png';
import CaitzLogo from '../assets/caitz.png';
// import Test from "../img/assets/test.png";
// import Test_2 from "../img/assets/test_2.png";

const MyWork = (prop) => {
  // JSX
  return (
    <div className='h-auto bg-light-blue py-20'>
      <div className='mx-auto w-4/5'>
        <p className='sub-st mb-16'>My Work</p>

        {/* flex 1 */}
        <div className='gap-8 md:flex md:justify-center'>
          <div className='glass w-auto md:w-96'>
            <span className='absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-clear-tape border-l-2 border-r-2 border-dotted'></span>
            <div className='px-4 pt-4'>
              <img src={TodoLogo} alt='Logo' width='100' height='100' />
              <h1 className='my-work-title-st'>
                To-do App
                <hr></hr>
              </h1>
              <p className='my-work-st'>
                It's a simple to-do app created in Vanila HTML, CSS and
                JavaScript. I found a good turtorial to practice, it was a fun
                experience. You can add the tasks, edit and delete from the task
                list. Try it!
              </p>
            </div>
          </div>
          {/* <img className="hidden md:block md:w-2/4" src={Test_2} alt="SS" /> */}
        </div>

        {/* flex 2 */}
        <div className='gap-8 mt-16 md:flex md:justify-center md:mt-28'>
          {/* <img className="hidden md:block md:w-2/4" src={Test} alt="SS" /> */}
          <div className='glass w-auto mt-16 md:w-96 md:-mt-0'>
            <span className='absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-clear-tape border-l-2 border-r-2 border-dotted'></span>
            <div className='px-4 pt-4'>
              <img src={CaitzLogo} alt='Logo' width='100' height='100' />
              <h1 className='my-work-title-st'>
                Salon
                <hr></hr>
              </h1>
              <p className='my-work-st'>
                The website was made for my friend who is a hair stylist in San
                Diego, CA. It is actually the first website that I created and I
                re-created in Vite Vue. She has exellent skills and technique.
                Check it out!
              </p>
            </div>
          </div>
        </div>

        {/* flex 3 */}
        <div className='gap-8 md:flex md:justify-center md:mt-28'>
          <div className='glass w-auto mt-16 md:w-96 md:-mt-0'>
            <span className='absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-clear-tape border-l-2 border-r-2 border-dotted'></span>
            <div className='px-4 pt-4'>
              <img src={CaitzLogo} alt='Logo' width='100' height='100' />
              <h1 className='my-work-title-st'>
                Weather App
                <hr></hr>
              </h1>
              <p className='my-work-st'>
                It's an weather app created in Typescript, Vite React. Using the
                weather API to display the world's weather. It was a great
                experience learning Typescript and API structure.
              </p>
            </div>
          </div>
          {/* <img className="hidden md:block md:w-2/4" src={Test} alt="SS" /> */}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
