import React from 'react';
// Components
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
// PDF
import PDF from '../assets/resume.pdf';

const About = (props) => {
  // JSX
  return (
    <div className='h-auto bg-light-blue w-screen bg-zoom text-dark-gray'>
      <div className='md:flex gap-10 w-4/5 mx-auto'>
        <div className='py-20 md:w-2/4'>
          <h1 className='sub-st'>About Me</h1>
          <FadeIn>
            <p className='bio-st font-arial'>
              Hello! My name is Emmy and I enjoy creating magical things. I'm a
              recent graduate (April 2023) in AI technology. I have experience
              working in the IT industry and I'm skilled in coding and
              designing. I've had the privilege of working on map alignments and
              survey app developing. I'm always passionate about creative coding
              and curious about learning new technologies! See my resume for
              additional details.
            </p>
          </FadeIn>
          <Button name='Resume' link={PDF} />
        </div>
        {/* My Skills */}
        <div className='py-20 md:w-2/4'>
          <h1 className='sub-st'>My Skills</h1>
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
    </div>
  );
};

export default About;