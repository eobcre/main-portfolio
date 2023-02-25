import React, { useState, useEffect, useRef } from 'react';

export const FadeIn = (props) => {
  const [visible, setVisible] = useState(false);
  const documentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        return entry.isIntersecting && setVisible(true);
      });
    });
    observer.observe(documentRef.current);
  }, []);

  //  JSX
  return (
    <div ref={documentRef} className={`FadeIn ${visible ? 'is-visible' : ''}`}>
      {props.children}
    </div>
  );
};
