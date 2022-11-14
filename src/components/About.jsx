import React from 'react';
// Component
import { FadeIn } from './FadeIn';
// PDF
import PDF from '../assets/resume.pdf';

const About = (props) => {
  // JSX
  return (
    <div className='h-auto bg-light-blue w-screen bg-zoom text-dark-gray'>
      <div className='md:flex gap-10 w-4/5 mx-auto'>
        <div className='py-20 md:w-2/4'>
          <p className='sub-st'>About Me</p>
          <FadeIn>
            <p className='bio-st font-arial'>
              Hello! My name is Emmy and I enjoy creating magical things. I'm
              currently attending college majoring in AI technology, and
              expecting to graduate in April, 2023. I have experience working in
              the IT industry and I'm skilled in coding and designing. I've had
              the privilege of working on map alignments and survey app
              developing. I'm always passionate about creative coding and
              curious about learning new technologies! See my resume for
              additional details.
            </p>
          </FadeIn>
          {/* Button */}
          <div className='flex items-center pt-8'>
            <a
              href={PDF}
              target='_blank'
              rel='noopener noreferrer'
              className='button px-20 py-2 bg-dark-gray text-white hover:bg-transparent hover:text-dark-gray'
            >
              <span className='text font-bebas'>Resume</span>
              <div className='pen_1'></div>
              <div className='pen_2'></div>
            </a>
          </div>
        </div>
        {/* My Skills */}
        <div className='py-20 md:w-2/4'>
          <p className='sub-st'>My Skills</p>
          <div className='flex flex-wrap gap-4'>
            <p className='skill-st'>HTML</p>
            <p className='skill-st'>CSS</p>
            <p className='skill-st'>SASS</p>
            <p className='skill-st'>Tailwind</p>
            <p className='skill-st'>JavaScript</p>
            <p className='skill-st'>Python</p>
            <p className='skill-st'>Node JS</p>
            <p className='skill-st'>React</p>
            <p className='skill-st'>Vue</p>
            <p className='skill-st'>Git</p>
            <p className='skill-st'>GitHub</p>
            <p className='skill-st'>Visual Studio</p>
            <p className='skill-st'>R</p>
            <p className='skill-st'>Adobe Photo Shop</p>
            <p className='skill-st'>Adobe Illustrator</p>
          </div>
        </div>
      </div>
      {/* Education */}
      <div className='w-4/5 mx-auto py-16'>
        <p className='sub-st'>Education</p>
        <FadeIn>
          <p className='bio-st font-arial md:w-2/4'>
            During my school time, my major was focused on statistics, software
            developments, AI algorithms and programming. My senior project that
            I'm working on is about Natural Process Language using Python
            modules, libraries, and developing a dialogue agent app. Besides the
            school work, I've spent most of my time on front-end programming,
            which I've taught myself.
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default About;
