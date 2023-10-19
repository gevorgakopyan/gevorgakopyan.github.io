import React, { useRef, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import TypeWriter from './TypeWriter';
import './MainPage.css';

const MainPage = () => {
  const cubeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [rotateX, setRotateX] = useState(-25);
  const [rotateY, setRotateY] = useState(45);
  const rotationValue = 0.5;
  const [linksDisabled, setLinksDisabled] = useState(false);
  const stillDragging = useRef(true);

  const handleMouseDown = (event) => {
    stillDragging.current = true;
    setTimeout(() => {
      if (stillDragging.current) {
        setLinksDisabled(true);
      }
    }, 100);
    setIsDragging(true);
    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseUp = () => {
    stillDragging.current = false;
    setLinksDisabled(false);
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
  const Name = [
    `Hi, I'm Ethan Jackson :)`,
    'Welcome to my website!',
    'Rotate the cube to find out more about me...',
  ];

  return (
    <Grid
      container
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      sx={{ height: '100vh', overflow: 'hidden', padding: '20vh 0' }}
      alignItems='center'
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          // textAlign: 'left',
          paddingLeft: { xs: '0', md: '10%', lg: '20%' },
        }}
      >
        <h2>
          <TypeWriter content={Name} speed={25} />
        </h2>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        onMouseDown={handleMouseDown}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div className='cube-container'>
          <div
            className='cube'
            ref={cubeRef}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
          >
            <Link
              to='/experience'
              className='cube-face front'
              draggable={false}
              style={{ pointerEvents: linksDisabled ? 'none' : 'auto' }}
            >
              Experience
            </Link>
            <Link
              to='/about-me'
              className='cube-face back'
              draggable={false}
              style={{ pointerEvents: linksDisabled ? 'none' : 'auto' }}
            >
              About Me
            </Link>
            <Link
              to='/projects'
              className='cube-face left'
              draggable={false}
              style={{ pointerEvents: linksDisabled ? 'none' : 'auto' }}
            >
              Projects
            </Link>
            <Link
              to='/resume'
              className='cube-face right'
              draggable={false}
              style={{ pointerEvents: linksDisabled ? 'none' : 'auto' }}
            >
              Resume
            </Link>
            <Link
              to='/contact-me'
              className='cube-face top'
              draggable={false}
              style={{ pointerEvents: linksDisabled ? 'none' : 'auto' }}
            >
              Contact Me
            </Link>
            <div className='cube-face bottom'></div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default MainPage;
