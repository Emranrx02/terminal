"use client";
import { useState, useEffect } from "react";

const TypingEffect = ({
  text,
  speed = 100,
}: {
  text: string;
  speed: number;
}) => {
  console.log(text);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeoutId); // Clean up the timeout
    }
  }, [index, text, speed]);

  return <h1>{displayedText}</h1>;
};

export default TypingEffect;
