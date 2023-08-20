import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import TypeWriter from './TypeWriter';
import './MainPage.css';

const MainPage = () => {
  const cubeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [rotateX, setRotateX] = useState(-35);
  const [rotateY, setRotateY] = useState(-35);
  const rotationValue = 0.5;

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    setRotateX(rotateX - deltaY * rotationValue);
    setRotateY(rotateY + deltaX * rotationValue);
    setStartX(event.clientX);
    setStartY(event.clientY);
  };
const Name = `
Hi, I'm Gevorg :)
Welcome to my website!
Rotate the cube to find out more about me...`;

  return (
    <div className="container" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
      <header>
        <div className="left">
          <h2><TypeWriter content={Name} speed={100} /></h2>
        </div>
        <div className="cube-container">
          <div className="cube" ref={cubeRef} style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>
            <Link to="/about-me" className="cube-face front">About Me</Link>
            <Link to="/experience" className="cube-face back">Experience</Link>
            <Link to="/projects" className="cube-face left">Projects</Link>
            <Link to="/resume" className="cube-face right">Resume</Link>
            <Link to="/contact-me" className="cube-face top">Contact Me</Link>
            <div className="cube-face bottom"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainPage;
