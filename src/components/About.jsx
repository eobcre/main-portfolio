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
      <div className="mx-auto py-20 w-4/5 md:w-3/5">
        <p className="sub-st">About Me</p>
        <FadeIn>
          <p className="bio-st">
            I'm a coder that loves to be creative. My interest in development
            started back in 2018 when I worked at the game company in Tokyo.
            I've had a privilege of working at Game Company : testing the new
            releasing games, Navigation Agency : testing and installing
            softwares, Map Designing, Survey Agency : developing medical
            surveys. See my resume for additional details. I'm always curious to
            learn more when it comes to new technologies and coding!
          </p>
          <p className="bio-st pt-4">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              →{" "}
              <span className="hover:opacity-70 hover:underline underline-offset-8">
                Check out my resume
              </span>
            </a>
          </p>
        </FadeIn>
        <div className="py-16">
          <p className="sub-st">Education</p>
          <FadeIn>
            <p className="bio-st">
              I graduated with a BS in AI Technology course and also self taught
              in front-end, I built web applications in Python working on a
              project with the other students as a team.
              <br />
              Here are technologies I've worked on :
            </p>
          </FadeIn>
        </div>
        <FadeIn>
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
        </FadeIn>
      </div>
    </div>
  );
};

export default About;
