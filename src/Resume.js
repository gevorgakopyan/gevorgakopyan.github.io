import React from 'react';
import ResumeImg from './img/Ethan_Jackson_Resume_2024-1.png';
import Navbar from './Navbar';
import { Box, Container, Link } from '@mui/material';

const Resume = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ textAlign: 'center' }}>
        <Link
          href='https://drive.google.com/file/d/1wdBA1HYmRYglI6ncDAHhONpK7LO-vPtn/view?usp=sharing'
          rel='noreferrer'
          target='_blank'
          download
        >
          <Box
            component='img'
            sx={{ height: 'calc(100vh - 100px)' }}
            src={ResumeImg}
            alt='Resume'
          />
        </Link>
      </Container>
    </>
  );
};

export default Resume;
