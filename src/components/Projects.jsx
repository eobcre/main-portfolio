import React from "react";
// Icons
import TodoLogo from "../img/logo/to-do.png";
import CaitzLogo from "../img/logo/caitz.png";

const Projects = (prop) => {
  return (
    <div className="h-auto bg-light-blue py-20">
      <div className="mx-auto w-4/5 md:w-3/4">
        <p className="sub-st">My Work</p>
        <div className="grid gap-8">
          <div className="glass w-auto">
            <span className="absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-dark-pink border-l-2 border-r-2 border-dotted"></span>
            <div className="px-4 pt-4">
              <img src={TodoLogo} alt="Logo" width="100" height="100" />
              <h1 className="text-3xl text-dark-gray pt-2">
                To-do App
                <hr></hr>
              </h1>
              <p className="text-xl text-dark-gray my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                reprehenderit inventore vel alias nemo dolores quasi quia rerum
                rem accusamus. Voluptatem nam autem porro repellendus animi
                ratione rem eveniet? Quibusdam.
              </p>
            </div>
          </div>
          <div className="glass w-auto mt-16">
            <span className="absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-dark-pink md:border-l-2 md:border-r-2 md:border-dotted"></span>
            <div className="px-4 pt-4">
              <img src={CaitzLogo} alt="Logo" width="100" height="100" />
              <h1 className="text-3xl text-dark-gray pt-2">
                Hair Salon Website
                <hr></hr>
              </h1>
              <p className="text-xl text-dark-gray my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
                reiciendis deserunt mollitia laborum doloribus nemo saepe rem
                beatae accusamus praesentium cum temporibus dolorum ipsa nulla
                quaerat adipisci voluptate quidem. Ullam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
