import React from "react";
import Header from "./Header";
// Images
import Brackets from "../img/brackets.png";
import Bracket from "../img/bracket.png";
import Bracket_2 from "../img/bracket_2.png";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-webTop bg-center bg-zoom table-cell align-middle">
      <Header />
      {/* Main contents */}
      <div className="text-center py-8">
        <p className="text-7xl text-dark-gray tracking-wide py-4">
          Emmy Manning
        </p>
        <p className="text-xl text-dark-gray">
          Love to build creative and magical things.
        </p>
      </div>

      {/* Card */}
      <div className="glass-card mx-auto w-380 md:w-500">
        <main className="max-w-21 mx-auto">
          {/* GitHub */}
          <div className="grid grid-cols-10 mt-6">
            <span className="effect-st col-start-2 col-span-2">
              <a
                href="https://github.com/eobcre"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
            {/* Portfolio */}
            <span className="effect-st col-start-7 col-span-3">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </span>
          </div>

          <img src={Brackets} alt="Icon" />

          {/* eobcre@emanning.dev */}
          <div>
            <p className="text-center text-5xl text-light-gray">
              eobcre@emanning.dev
            </p>
          </div>

          <img src={Bracket_2} alt="Icon" />

          {/* Instagram */}
          <div className="grid grid-cols-9">
            <span className="effect-st col-end-8 col-span-2">
              <a
                href="https://www.instagram.com/emanning.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </span>
          </div>

          <img src={Bracket} alt="Icon" />

          {/* Email */}
          <div className="sub-email grid justify-center mb-4">
            <span className="effect-st">
              <a
                href="mailto:eobcre@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
