import React from "react";
import { FadeIn } from "./FadeIn";
import PDF from "../Resume.pdf";
// Skillsets
import HTML from "../img/skillset/html.svg";
import CSS from "../img/skillset/css.svg";
import Sass from "../img/skillset/sass.svg";
import Tailwind from "../img/skillset/tailwind.svg";
import NodeJS from "../img/skillset/nodejs.svg";
import JS from "../img/skillset/js.svg";
import PY from "../img/skillset/py.svg";
import ReactIcon from "../img/skillset/react.svg";
import GitHub from "../img/skillset/github.svg";
import Git from "../img/skillset/git.svg";
import VS from "../img/skillset/vs.svg";
import R from "../img/skillset/r.svg";

const About = (props) => {
  return (
    <div className="h-auto bg-light-blue w-screen bg-zoom text-dark-gray">
      <div className="md:flex gap-10 w-4/5 mx-auto">
        <div className="py-20 md:w-2/4">
          <p className="sub-st">About Me</p>
          <FadeIn>
            <p className="bio-st">
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
          <div className="grid grid-cols-3 md:grid md:grid-cols-5">
            <figure className="fig-st">
              <img src={JS} alt="JSLogo" />
              <figcaption className="text-sm">JavaScript</figcaption>
            </figure>
            <figure className="fig-st">
              <img src={PY} alt="PYLogo" />
              <figcaption className="text-sm">Python</figcaption>
            </figure>
            <figure className="fig-st">
              <img src={HTML} alt="HTMLIcon" />
              <figcaption className="text-sm">HTML</figcaption>
            </figure>
            <figure className="fig-st">
              <img src={CSS} alt="CSSIcon" />
              <figcaption className="text-sm">CSS</figcaption>
            </figure>
            <figure className="fig-st">
              <img src={Sass} alt="SassIcon" />
              <figcaption className="text-sm">Sass</figcaption>
            </figure>
            <figure className="fig-st">
              <img src={Tailwind} alt="TailwindIcon" />
              <figcaption className="text-sm">Tailwind</figcaption>
            </figure>
            <figure className="fig-st">
              <img src={NodeJS} alt="NodeJSIcon" />
              <figcaption className="text-sm">Node JS</figcaption>
            </figure>
            <figure className="fig-st">
              <img src={ReactIcon} alt="ReactIcon" />
              <figcaption className="text-sm">React</figcaption>
            </figure>
            <figure className="fig-st">
              <img src={Git} alt="GitIcon" />
              <figcaption className="text-sm">Git</figcaption>
            </figure>
            <figure className="fig-st">
              <img src={GitHub} alt="GitHubIcon" />
              <figcaption>GitHub</figcaption>
            </figure>
            <figure className="fig-st">
              <img src={VS} alt="VSIcon" />
              <figcaption className="text-sm">Visual Studio</figcaption>
            </figure>
            <figure className="fig-st">
              <img src={R} alt="RIcon" />
              <figcaption className="text-sm">R</figcaption>
            </figure>
          </div>
        </div>
      </div>
      {/* Education */}
      <div className="w-4/5 mx-auto py-16">
        <p className="sub-st">Education</p>
        <FadeIn>
          <p className="bio-st w-2/4">
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
