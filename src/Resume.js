import React from 'react';
import './Resume.css';
import resume from './GevorgResume.png'

const Resume = () => {
  return (
    <div className="picture-container">
        <a href="https://drive.google.com/file/d/1SdPI8DLrKwOkTFTHsQJYO_fPlujLklnp/view?usp=sharing" download>
            <img src={resume} alt="Resume" />
        </a>
    </div>  
);
};

export default Resume;