import "./App.css";
import { useState, useEffect } from "react";

const TypeWriter = ({ content = "", speed = 100 }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex >= content.length - 1) {
          clearInterval(animKey);  // Clear the interval
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, speed);

    // Clear the interval when component unmounts or before starting a new interval
    return () => clearInterval(animKey);
  }, []);

  useEffect(() => {
    setDisplayedContent(
      (prevDisplayedContent) => prevDisplayedContent + content[index]
    );
  }, [index]);

  return <pre className="type-writer">{displayedContent}</pre>;
};

export default TypeWriter;
