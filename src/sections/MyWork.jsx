// components
import Button from '../components/Button';
import ScrollFadeIn from '../components/ScrollFadeIn';
// datas
import { myWorkData } from '../utils/myWorkData';

const MyWork = () => {
  return (
    <div className='h-auto bg-light-blue pt-24'>
      <div className='mx-auto w-4/5'>
        <h1 className='sub-st'>My Work</h1>
        {myWorkData.map(
          (
            {
              id,
              name,
              src,
              logo,
              url,
              description,
              tech1,
              tech2,
              tech3,
              tech4,
              tech5,
            },
            index
          ) => (
            <div key={id} className='md:flex gap-10 mt-20 md:mt-32'>
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
                <ScrollFadeIn>
                  <p className='my-work-st'>{description}</p>
                  <div className='flex gap-4'>
                    <p className='tech-st'>{tech1}</p>
                    <p className='tech-st'>{tech2}</p>
                    <p className='tech-st'>{tech3}</p>
                    <p className='tech-st'>{tech4}</p>
                    <p className='tech-st'>{tech5}</p>
                  </div>
                  <Button name='See The App' link={url} />
                </ScrollFadeIn>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MyWork;
