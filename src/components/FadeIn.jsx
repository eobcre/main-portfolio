import React, { useState, useEffect, useRef } from "react";

export const FadeIn = (props) => {
  const [isVisible, setVisible] = useState(false);
  const documentRef = useRef();

  useEffect(() => {
    // console.log(1);
    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((entery) => {
        setVisible(entery.isIntersecting);
      });
    });
    observer.observe(documentRef.current);
  }, []);

  return (
    <div
      ref={documentRef}
      className={`FadeIn ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
};
