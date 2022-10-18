import React from "react";
import PDF from "../Resume.pdf";
import { ReactComponent as HTML } from "../img/skillset/html.svg";
import { ReactComponent as CSS } from "../img/skillset/css.svg";
import { ReactComponent as Sass } from "../img/skillset/sass.svg";
import { ReactComponent as Tailwind } from "../img/skillset/tailwind.svg";
import { ReactComponent as NodeJS } from "../img/skillset/nodejs.svg";
import { ReactComponent as JS } from "../img/skillset/js.svg";
import { ReactComponent as PY } from "../img/skillset/py.svg";
import { ReactComponent as ReactIcon } from "../img/skillset/react.svg";
import { ReactComponent as GitHub } from "../img/skillset/github.svg";
import { ReactComponent as Git } from "../img/skillset/git.svg";
import { ReactComponent as VS } from "../img/skillset/vs.svg";
import { ReactComponent as R } from "../img/skillset/r.svg";

const About = (props) => {
  return (
    <div className="h-auto bg-light-blue text-dark-gray pb-10">
      <div className="mx-auto w-4/5 md:w-3/5">
        <h1 className="text-4xl pt-16 md:text-5xl">{props.title}</h1>
        <h2 className="sub-st">About Me</h2>
        <p className="bio-st">
          I'm a coder that loves to be creative. My interest in development
          started back in 2018 when I worked at the game company in Tokyo. I've
          had a privilege of working at Game Company : testing the new releasing
          games, Navigation Agency : testing and installing softwares, Map
          Designing, Survey Agency : developing medical surveys. See my resume
          for additional details. I'm always curious to learn more when it comes
          to new technologies and coding!
        </p>
        <p className="bio-st pt-4">
          <a
            href={PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-gray"
          >
            →{" "}
            <span className="hover:opacity-70 hover:underline underline-offset-8">
              Check out my resume
            </span>
          </a>
        </p>
        <h2 className="sub-st">Education</h2>
        <p className="bio-st">
          I graduated with a BS in AI Technology course and also self taught in
          front-end, I built web applications in Python working on a project
          with the other students as a team.
          <br />
          Here are technologies I've worked on :
        </p>
        <div className="grid grid-cols-3 md:grid md:grid-cols-5 pt-7">
          <figure className="fig-st">
            <JS />
            <figcaption className="text-sm">JavaScript</figcaption>
          </figure>
          <figure className="fig-st">
            <PY />
            <figcaption className="text-sm">Python</figcaption>
          </figure>
          <figure className="fig-st">
            <HTML />
            <figcaption className="text-sm">HTML</figcaption>
          </figure>
          <figure className="fig-st">
            <CSS />
            <figcaption className="text-sm">CSS</figcaption>
          </figure>
          <figure className="fig-st">
            <Sass />
            <figcaption className="text-sm">Sass</figcaption>
          </figure>
          <figure className="fig-st">
            <Tailwind />
            <figcaption className="text-sm">Tailwind</figcaption>
          </figure>
          <figure className="fig-st">
            <NodeJS />
            <figcaption className="text-sm">Node JS</figcaption>
          </figure>
          <figure className="fig-st">
            <ReactIcon />
            <figcaption className="text-sm">React</figcaption>
          </figure>
          <figure className="fig-st">
            <Git />
            <figcaption className="text-sm">Git</figcaption>
          </figure>
          <figure className="fig-st">
            <GitHub />
            <figcaption>GitHub</figcaption>
          </figure>
          <figure className="fig-st">
            <VS />
            <figcaption className="text-sm">Visual Studio</figcaption>
          </figure>
          <figure className="fig-st">
            <R />
            <figcaption className="text-sm">R</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default About;
