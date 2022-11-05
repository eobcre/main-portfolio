import React from "react";
// Icons
import TodoLogo from "../img/logo/to-do.png";
import CaitzLogo from "../img/logo/caitz.png";

const MyWork = (prop) => {
  return (
    <div className="h-auto bg-light-blue py-20">
      <div className="mx-auto w-4/5">
        <p className="sub-st">My Work</p>
        <div className="gap-8 md:flex">
          <div className="glass w-auto md:w-2/4">
            <span className="absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-clear-tape border-l-2 border-r-2 border-dotted"></span>
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
          <div className="glass mt-16 w-auto md:w-2/4 md:-mt-0">
            <span className="absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-clear-tape border-l-2 border-r-2 border-dotted"></span>
            <div className="px-4 pt-4">
              <img src={CaitzLogo} alt="Logo" width="100" height="100" />
              <h1 className="text-3xl text-dark-gray pt-2">
                Hair Salon Website
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
        </div>
      </div>
    </div>
  );
};

export default MyWork;
