// Components
import ScrollFadeIn from '../components/ScrollFadeIn';
import Button from '../components/Button';
// PDF
import PDF from '../assets/resume.pdf';

const About = () => {
  // JSX
  return (
    <div className='h-auto bg-light-blue bg-zoom text-dark-gray pt-24'>
      <div className='md:flex gap-10 w-4/5 mx-auto'>
        <div className='md:w-2/4'>
          <h1 className='sub-st mb-10'>About Me</h1>
          <ScrollFadeIn>
            <p className='bio-st font-arial'>
              Hello! My name is Emmy and I enjoy creating magical things. I am a
              recent graduate (as of March 2023) in AI technology. I have
              experience working in the IT industry and am skilled in coding and
              designing. I have had the privilege of working on map alignments
              and survey app development. I am always passionate about creative
              coding and curious about learning new technologies! See my resume
              for additional details.
            </p>
            <Button name='Resume' link={PDF} />
          </ScrollFadeIn>
        </div>
        {/* My Skills */}
        <div className='pt-20 md:pt-0 md:w-2/4'>
          <h1 className='sub-st mb-10'>My Skills</h1>
          <div className='flex flex-wrap gap-4'>
            <p className='skill-st'>HTML</p>
            <p className='skill-st'>CSS</p>
            <p className='skill-st'>SASS</p>
            <p className='skill-st'>Tailwind</p>
            <p className='skill-st'>JavaScript</p>
            <p className='skill-st'>TypeScript</p>
            <p className='skill-st'>Node JS</p>
            <p className='skill-st'>React</p>
            <p className='skill-st'>Git</p>
            <p className='skill-st'>GitHub</p>
            <p className='skill-st'>Visual Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
