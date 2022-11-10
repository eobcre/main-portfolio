import React from "react";
import { FadeIn } from "./FadeIn";
import PDF from "../pdf/resume.pdf";

const About = (props) => {
  return (
    <div className="h-auto bg-light-blue w-screen bg-zoom text-dark-gray">
      <div className="md:flex gap-10 w-4/5 mx-auto">
        <div className="py-20 md:w-2/4">
          <p className="sub-st">About Me</p>
          <FadeIn>
            <p className="bio-st font-pathway">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              nesciunt temporibus reiciendis nobis distinctio libero rem nam
              accusantium aperiam corporis perferendis, harum vitae. Excepturi
              impedit ad, error amet blanditiis rem!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              nesciunt temporibus reiciendis nobis distinctio libero rem nam
              accusantium aperiam corporis perferendis, harum vitae. Excepturi
              impedit ad, error amet blanditiis rem!
            </p>
          </FadeIn>
          {/* Button */}
          <div className="flex items-center pt-8">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="button px-20 py-2 bg-dark-gray text-white hover:bg-transparent hover:text-dark-gray"
            >
              <span className="text">Resume</span>
              <div className="pen_1"></div>
              <div className="pen_2"></div>
            </a>
          </div>
        </div>
        {/* My Skills */}
        <div className="py-20 md:w-2/4">
          <p className="sub-st">My Skills</p>
          <div className="flex flex-wrap gap-4">
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              HTML
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              CSS
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              SASS
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              Tailwind
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              JavaScript
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              Python
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              Node JS
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              React
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              Vue
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              Git
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              GitHub
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              Visual Studio
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray px-8 h-8 leading-loose">
              R
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              Adobe Photo Shop
            </p>
            <p className="bg-clear-tape border-l-2 border-r-2 border-dotted text-lg text-dark-gray tracking-wide px-8 h-8 leading-loose">
              Adobe Illustrator
            </p>
          </div>
        </div>
      </div>
      {/* Education */}
      <div className="w-4/5 mx-auto py-16">
        <p className="sub-st">Education</p>
        <FadeIn>
          <p className="bio-st font-pathway md:w-2/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            nesciunt temporibus reiciendis nobis distinctio libero rem nam
            accusantium aperiam corporis perferendis, harum vitae. Excepturi
            impedit ad, error amet blanditiis rem!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            nesciunt temporibus reiciendis nobis distinctio libero rem nam
            accusantium aperiam corporis perferendis, harum vitae. Excepturi
            impedit ad, error amet blanditiis rem!
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default About;
