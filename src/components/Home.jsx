import React from "react";
import Brackets from "../img/brackets.png";
import Bracket from "../img/bracket.png";
import Bracket_2 from "../img/bracket_2.png";
import Header from "./Header";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-webTop bg-center bg-zoom table-cell align-middle">
      <Header />
      <div className="text-center py-8">
        <p className="text-7xl py-4">Emmy Manning</p>
        <p className="text-xl">Love to build creative and magical things.</p>
      </div>
      <div className="glass-card mx-auto w-380 md:w-500">
        <main className="max-w-21 mx-auto">
          <div>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/in/emmymanning/"
                target="_blank"
                className="effect-st grid grid-cols-11 place-items-center"
              >
                <span className="subname-st col-start-2">Me</span>
                <span className="subname-st col-start-6 col-span-4">
                  Portfolio
                </span>
              </a>
            </div>
            <img src={Brackets} alt="Icon" />
            <p className="text-center text-3xl">Emmy@WebDevEM.com</p>
          </div>
          <img src={Bracket_2} alt="Icon" />

          <div className="sub-ig">
            <a
              href="https://www.instagram.com/webdevcreative/"
              target="_blank"
              className="effect-st grid grid-cols-7"
            >
              <span></span>
              <span className="subname-st col-start-4 col-end-6">
                Instagram
              </span>
            </a>
          </div>

          <img src={Bracket} alt="Icon" />
          <div className="sub-email grid justify-center mb-4">
            <a
              href="mailto:eobcre@gmail.com"
              target="_blank"
              className="effect-st"
            >
              <p className="subname-st">Email</p>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
