import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const TypeWriter = ({ content = '', speed = 100 }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const wordIdx = useRef(0);
  const index = useRef(0);
  const isTypingForward = useRef(true);
  const isPaused = useRef(false);
  const pauseTime = 1000;

  useEffect(() => {
    const animKey = setInterval(() => {
      if (isPaused.current) return;
      setDisplayedContent(content[wordIdx.current].slice(0, index.current));
      if (isTypingForward.current) {
        if (index.current >= content[wordIdx.current].length) {
          isPaused.current = true;
          setTimeout(() => {
            isTypingForward.current = false;
            isPaused.current = false;
          }, pauseTime);
          return;
        }
        index.current += 1;
      } else {
        if (index.current < 1) {
          isPaused.current = true;
          setTimeout(() => {
            wordIdx.current += 1;
            if (wordIdx.current >= content.length) wordIdx.current = 0;
            isTypingForward.current = true;
            isPaused.current = false;
          }, 100);
          return;
        }
        return (index.current -= 1);
      }
    }, speed);

    // Clear the interval when component unmounts or before starting a new interval
    return () => clearInterval(animKey);
  }, []);

  return (
    <Box sx={{ fontSize: { xs: '1.2rem', sm: '1.6rem', lg: '2rem' } }}>
      <p className='type-writer'>{displayedContent}</p>
    </Box>
  );
};

export default TypeWriter;
