import React from 'react';
import './AboutMe.css';
import myPicture from "./MyPic.jpg"

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src={myPicture} alt="Your Name" className="my-picture" />
      <div className="about-me-text">
        <h1>Gevorg Akopyan</h1>
        <p>
        I am a rising senior at UCLA with a genuine passion for software engineering and technology.
        Throughout my academic journey, I have honed my skills in a diverse range of computer science topics, ensuring a broad yet profound understanding of the field. Through my internship experiences, I have had the opportunity to translate theoretical knowledge into practical solutions, working collaboratively in fast-paced environments.
        I am seeking a full-time Software Engineering position for a new graduate where I can further contribute, learn, and grow.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;