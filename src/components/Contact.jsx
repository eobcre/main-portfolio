import React from "react";
import EmailJS from "emailjs-com";

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
      <div className="mx-auto w-4/5">
        <p className="sub-st">Contact</p>
        <div className="glass px-8">
          <span className="hidden absolute md:block md:top-10 -right-12 -rotate-12 w-24 h-8 bg-clear-tape md:border-l-2 md:border-r-2 md:border-dotted"></span>
          <span className="hidden absolute md:block md:bottom-12 -left-12 rotate-12 w-24 h-8 bg-clear-tape md:border-l-2 md:border-r-2 md:border-dotted"></span>
          <form onSubmit={sendEmail} required>
            {/* Title */}
            <h1 className="text-dark-gray text-2xl text-center py-4 md:text-3xl">
              Let's Connect
            </h1>
            <p className="text-2xl text-dark-gray opacity-90 text-center font-pathway pb-4">
              Feel free to contact or connect me on{" "}
              <a
                href="https://www.linkedin.com/in/emmymanning"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-pathway uppercase underline underline-offset-4 hover:opacity-50"
              >
                LinkedIn
              </a>
              .
              <br />I will get back to you as soon as possible.
            </p>
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
                className="button px-12 py-2 bg-dark-gray text-white hover:bg-transparent hover:text-dark-gray"
                type="submit"
              >
                <span className="text">{props.name}</span>
                <div className="pen_1"></div>
                <div className="pen_2"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
