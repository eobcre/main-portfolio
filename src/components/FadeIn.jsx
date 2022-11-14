import React, { useState, useEffect, useRef } from 'react';

export const FadeIn = (props) => {
  const [isVisible, setVisible] = useState(false);
  const documentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting && setVisible(true);
      });
    });
    observer.observe(documentRef.current);
  }, []);
  //  JSX
  return (
    <div
      ref={documentRef}
      className={`FadeIn ${isVisible ? 'is-visible' : ''}`}
    >
      {props.children}
    </div>
  );
};
