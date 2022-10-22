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
    <div className="bg-light-blue h-auto pt-20 pb-36">
      <div className="mx-auto w-4/5 md:w-3/5">
        <p className="sub-st">Contact</p>
        <div className="glass px-8">
          <form onSubmit={sendEmail} required>
            {/* Title */}
            <h1 className="text-dark-gray text-2xl tracking-wide text-center py-5 md:text-3xl">
              {props.title}
            </h1>
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
