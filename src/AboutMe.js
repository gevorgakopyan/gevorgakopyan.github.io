import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      {/* <img src={myPicture} alt="Your Name" className="my-picture" /> */}
      <div className="about-me-text">
        <h1>Your Name</h1>
        <p>
          Hello! I'm Your Name. I am passionate about web development and have
          experience in creating interactive and user-friendly web applications
          using React. In my free time, I enjoy reading, hiking, and exploring
          new technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;