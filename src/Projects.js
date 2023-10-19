import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import './Projects.css';
import GregImg from './img/greg.png';
import WorkoutBuilderImg from './img/workout_builder.png';
import RhythmOpImg from './img/rhythmop.png';
import HealersBloomImg from './img/healers_bloom.png';
import StackerImg from './img/stacker.png';
import BrickEaterImg from './img/brick_eater.png';
import HumanTaskManagerImg from './img/human_task_manager.png';
import Navbar from './Navbar';

function Projects() {
  const fadeInDivs = useRef([]);

  const handleScroll = (intersections) => {
    fadeInDivs.current.forEach((div) => {
      if (
        div.getBoundingClientRect().top >=
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        div.classList.remove('visible');
      } else {
        div.classList.add('visible');
      }
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    handleScroll();
    fadeInDivs.current = document.querySelectorAll('.fade-in');

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Navbar />
      <Grid container spacing={5} pb={3}>
        {projects.map(({ img, title, skills, bullets }) => (
          <>
            <Grid
              item
              xs={12}
              sm={5}
              mb={1}
              sx={{ textAlign: { xs: 'center', sm: 'right' } }}
              className='fade-in'
            >
              <Box
                sx={{
                  aspectRatio: '1 / 1',
                  maxWidth: { xs: 'none', sm: '325px' },
                  maxHeight: { xs: 'none', sm: '325px' },
                  display: 'flex',
                  paddingLeft: { xs: '0', sm: 'calc(100% - 325px)' },
                }}
              >
                <Box
                  component='img'
                  sx={{
                    height: 'auto',
                    width: '100%',
                    objectFit: 'contain',
                    backgroundColor: '#0f0f0f',
                  }}
                  src={img}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              className='fade-in'
              sx={{ paddingTop: { xs: '5px !important', sm: 'auto' } }}
            >
              <Typography mt={{ xs: '0', sm: '30px' }} mb={1} variant='h4'>
                {title}
              </Typography>
              <Typography variant='body2' mb={1} color='secondary'>
                {skills}
              </Typography>
              <ul>
                {bullets.map((bullet) => (
                  <li>
                    <Typography variant='body2' mb={1}>
                      {bullet.startsWith('%link%') ? (
                        <a
                          href={bullet.split('%link%')[1]}
                          rel='noreferrer'
                          style={{ color: 'white' }}
                          target='_blank'
                        >
                          {bullet.split('%link%')[1]}
                        </a>
                      ) : (
                        bullet
                      )}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  );
}

const projects = [
  {
    img: RhythmOpImg,
    title: 'Rhythm Operation',
    skills: 'Unity, C#',
    bullets: [
      '%link%https://ninjabot5.itch.io/rhythm-operation',
      'Led a small team of artists, musicians, and programmers to realize a rhythm-platforming game over the span of 2 quarters; Nominated for and presented at the SGDA Summit 2022 showcase',
      'Utilized Unity and C# to integrate a plethora of art, animation, script, and music assets',
      'Defined API contracts for enemy, player, and game functionality to coordinate efficient team collaboration',
      'Applied an observer design pattern via C# events to synchronize rhythm-dependent enemy and player behavior',
      'Leveraged inheritance and finite state machine logic to support modular and situationally-responsive enemy behavior',
    ],
  },
  {
    img: GregImg,
    title: 'Greg',
    skills: 'WebGL, MongoDB, Express.js, Reacts.js, Node.js, CSS, JavaScript',
    bullets: [
      '%link%https://shadygreg.netlify.app',
      'Collaborated with 3 peers to construct an online, MERN-based platform for developing, sharing, and viewing GLSL shaders',
      'Implemented an integrated shader IDE, supporting C syntax highlighting, 4 buffer and 4 texture slots, and an interactive shader preview window (including FPS/elapsed time, play/pause/restart, and fullscreen functionalities)',
      'Incorporated comprehensive user interactions, including shader liking, link-sharing, commenting, and forking and user avatar customization',
      'Architected backend infrastructure to store and access user profile info, comment/like data, avatar and texture images, and shader projects (stored as raw text and compiled at runtime via WebGL)',
    ],
  },
  {
    img: WorkoutBuilderImg,
    title: 'Workout Builder',
    skills: 'MongoDB, Express.js, Reacts.js, Node.js, CSS, JavaScript',
    bullets: [
      '%link%https://workout-builder.netlify.app/',
      'Developed a MERN stack web app where users can search an original MongoDB database of over 250 workouts by target muscles and available equipment (via a REST API)',
      'Architected full-stack functionality to allow users to create and save custom workout guides',
      'Engineered a robust user system, with hashed passwords using Bcrypt and Google Oauth login using Passport; utilized JWT authentication for protected routes',
      'Incorporated 3+ Materialize components, including cards, carousels, and tooltips for a more interactive user experience; leveraged the Materialize grid system for completely responsive styling on all device types',
    ],
  },
  {
    img: HealersBloomImg,
    title: "Healer's Bloom",
    skills: 'Unity, C#',
    bullets: [
      '%link%https://zlc122.itch.io/healers-bloom',
      'Collaborated with a small team of artists, musicians, writers, and programmers to assemble a game over a 2-day hackathon',
      'Exercised rapid learning ability, quickly learning Unity and C# over the course of the hackathon',
      'Proactively orchestrated collaboration between teammates of diverse backgrounds; Exercised communication and leadership in determining blockers and project goals/requirements quickly',
    ],
  },
  {
    img: StackerImg,
    title: 'Stacker Game',
    skills: 'C embedded system',
    bullets: [
      '%link%https://youtube.com/shorts/N5dH5szi48M?feature=share',
      'Built a C embedded system game utilizing an AVR microprocessor',
      'Architected a finite state machine to control 4 game states and state periods',
      'Incorporated an LED Matrix and LEDs for display and a button for user input; Produced sound effects and victory and game over songs through speaker output via pulse-width modulation ',
    ],
  },
  {
    img: BrickEaterImg,
    title: 'Brick Eater',
    skills: 'C++, SFML',
    bullets: [
      '%link%https://youtu.be/MZM5cCYVHrM',
      'Independently developed C++ game using Simple and Fast Multimedia Library (SFML)',
      'Leverage finite state machine logic to implement robust game loop; Employed random number generation to randomize enemy size and spawn points',
      'Incorporated original art, SFX, and music assets',
    ],
  },
  {
    img: HumanTaskManagerImg,
    title: 'Human Task Manager',
    skills: 'C++, Valgrind, GDB',
    bullets: [
      'Collaborated with 2 peers to build a todo list application where users can create and manage hierarchies of tasks & task lists through command line',
      "Leveraged file input and output to save users' login and task & task list data locally",
      'Applied a Composite design pattern to fulfill recursive and hierarchical task/task list structure',
      "Constructed a Factory design pattern to parse user save data and reconstruct a user's saved tasks & task lists",
      'Conducted extensive unit testing of application using the Googletest framework; found and eliminated memory leaks using Valgrind ',
    ],
  },
];

export default Projects;
