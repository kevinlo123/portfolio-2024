"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Disintegrate = () => {
  const [isSnapped, setIsSnapped] = useState(false);
  const originalState = useRef({}); // To store the original positions

  useEffect(() => {
    const handleSnap = () => {
      if (isSnapped) return;
      setIsSnapped(true);

      const elements = Array.from(document.body.children);

      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        originalState.current[index] = { x: rect.left, y: rect.top };

        gsap.to(el, {
          opacity: 0,
          filter: "blur(5px)",
          x: (Math.random() - 0.5) * 300,
          y: (Math.random() - 0.5) * 300,
          rotation: (Math.random() - 0.5) * 360,
          scale: 0.5,
          duration: 1.8,
          ease: "power2.out",
        });
      });
    };

    const handleKeyPress = (event) => {
      if (event.key === "t" || event.key === "T") handleSnap();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isSnapped]);

  const restoreElements = () => {
    if (!document.body) return;

    setIsSnapped(false);

    const elements = Array.from(document.body.children);
    elements.forEach((el, index) => {
      gsap.to(el, {
        opacity: 1,
        filter: "blur(0px)",
        x: originalState.current[index]?.x || 0,
        y: originalState.current[index]?.y || 0,
        rotation: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  };

  return null; 
};

export default Disintegrate;
