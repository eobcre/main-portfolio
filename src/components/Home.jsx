import React from "react";
import Brackets from "../img/brackets.png";
import Bracket from "../img/bracket.png";
import Bracket_2 from "../img/bracket_2.png";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-webTop bg-center bg-zoom table-cell align-middle">
      <main className="max-w-xs mx-auto">
        <div className="grid">
          <div className="subnames grid mt-12">
            <a
              href="https://www.linkedin.com/in/emmymanning/"
              className="hover:underline text-light-gray"
            >
              <p className="text-light-gray text-xs uppercase">Me</p>
            </a>
            <a
              href="https://www.instagram.com/codebecreative/"
              className="hover:underline text-light-gray"
            >
              <p className="text-light-gray text-xs uppercase">Instagram</p>
            </a>
          </div>
          <img src={Brackets} alt="Icon" />
          <p className="text-center text-2xl">Emmy@CodeBeCreative.com</p>
        </div>
        <img src={Bracket_2} alt="Icon" />
        <div className="sub-web grid">
          <a href="#" className="hover:underline text-light-gray">
            <p className="text-light-gray text-xs uppercase">Website</p>
          </a>
        </div>
        <img src={Bracket} alt="Icon" />
        <div className="sub-email grid justify-center">
          <a
            href="mailto:eobcre@gmail.com"
            className="hover:underline text-light-gray"
          >
            <p className="text-light-gray text-xs uppercase">Email</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
