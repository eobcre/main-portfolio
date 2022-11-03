import React from "react";
import EmailJS from "emailjs-com";
import LinkedIn from "../img/skillset/linkedin.svg";

export default function Contact(props) {
  const sendEmail = (e) => {
    e.preventDefault();

    EmailJS.sendForm(
      "service_lkcx1hs",
      "template_ia4piap",
      e.target,
      "8amCye5YPJ3JRgePo"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  // JSX
  return (
    <div className="bg-light-blue h-auto py-20">
      <div className="mx-auto w-4/5 md:w-3/4">
        <p className="sub-st">Contact</p>
        <div className="glass px-8">
          <span className="hidden absolute md:block md:top-10 -right-12 -rotate-12 w-24 h-8 bg-dark-pink md:border-l-2 md:border-r-2 md:border-dotted"></span>
          <span className="hidden absolute md:block md:bottom-12 -left-12 rotate-12 w-24 h-8 bg-dark-pink md:border-l-2 md:border-r-2 md:border-dotted"></span>
          <form onSubmit={sendEmail} required>
            {/* Title */}
            <h1 className="text-dark-gray text-2xl tracking-wide text-center pt-5 md:text-3xl">
              {props.title}
            </h1>
            <a
              href="https://www.linkedin.com/in/emmymanning"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedIn}
                alt="Icon"
                className="mx-auto pt-2 pb-4 hover:opacity-70"
              />
            </a>
            {/* "Name" field */}
            <div className="py-2">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="contact-st"
                required
              />
            </div>
            {/* "Email" field */}
            <div className="py-2">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="contact-st"
                required
              />
            </div>
            {/* "Message" field */}
            <div className="py-2">
              <textarea
                placeholder="Message"
                name="message"
                rows="10"
                cols="50"
                className="contact-st"
                required
              />
            </div>
            {/* Button */}
            <div className="text-center pt-4 pb-6">
              <button
                className="px-9 py-4 rounded-md text-xl text-dark-gray border-2 border-light-blue cursor-pointer hover:underline underline-offset-8 transition-all duration-300 w-max self-center md:text-xl md:self-start"
                type="submit"
              >
                {props.name}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
