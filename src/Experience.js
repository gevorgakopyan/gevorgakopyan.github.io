import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import './Projects.css';
import Navbar from './Navbar';
import './Experience.css';
import TBPLogo from './img/tbp.jpeg';
import AmazonLogo from './img/amazon.jpeg';
import JuniLogo from './img/juni.jpeg';
import OnntekLogo from './img/onntek.png';

function Experience() {
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
        {experiences.map(({ img, title, position, duration, bullets }) => (
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
                    backgroundColor: 'white',
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
              <Box
                sx={{ display: 'flex', justifyContent: 'left', gap: '0.8rem' }}
              >
                <Typography variant='body2' mb={1} color='secondary'>
                  {position}
                </Typography>
                <hr
                  style={{
                    width: '1.2rem',
                    border: 'none',
                    borderTop: '1px solid #a0a0a0',
                    margin: '10px 0',
                  }}
                />
                <Typography variant='body2' color='secondary'>
                  {duration}
                </Typography>
              </Box>
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

const experiences = [
  {
    img: TBPLogo,
    title: 'Tau Beta Pi',
    position: 'Web Director',
    duration: 'Dec 2022 - Present',
    bullets: [
      '%link%https://tbp.seas.ucla.edu/',
      'Directed team of 4 to implement MERN website to facilitate candidate initiation, provide member services, and enable admin activities for Tau Beta Pi UCLA honor society. Managed over 110 users and 1100 test bank entries',
      'Introduced 2 candidate visualization tools for committee directors and initiation requirement tracker tools for candidates',
      'Maintained data security via access permission levels and Bcrypt password salting and hashing',
      'Implemented automated email system for password reset and account verification via Mailjet API',
      'Leveraged lazy content loading and API pagination to significantly reduce initial page load latency',
      'Devised Python script to automate migration of existing test bank and user data to new MongoDB',
    ],
  },
  {
    img: AmazonLogo,
    title: 'Amazon Creator Experiences',
    position: 'Software Dev Intern',
    duration: 'Jun 2023 - Sep 2023',
    bullets: [
      'Leveraged AWS CDK to set up DynamoDBs via CloudFormation with necessary permissions and read/write APIs, and designed DDB schema to be extensible without backfilling and robust to all edge use cases',
      'Redesigned a pre-existing frontend feature, proposing JavaScript solution for dynamic rendering while minimizing latency and streamlining customer experience',
      'Proposed use of orthogonal residuals to improve shape-matching logic for user-uploaded photos/videos in Java backend',
      'Oversaw complete feature life-cycle, from in-depth design docs to UAT to ramp up my features in production',
      'Ensured regression prevention via Mockito unit tests and WebDriver UI tests to maintain CI/CD pipeline health',
    ],
  },
  {
    img: AmazonLogo,
    title: 'Amazon Creator Experiences',
    position: 'Software Dev Intern',
    duration: 'Jun 2022 - Sep 2022',
    bullets: [
      'Constructed 1 full-stack feature and 1 Tampermonkey browser extension under the Amazon Influencer team',
      'Leveraged Spring MVC, JSP, Java, JavaScript, and various internal Amazon tools and frameworks to develop for desktop/mobile web and mobile app platforms',
      'Maintained above 98% line and branch testing coverage via comprehensive unit testing',
      'Owned entire feature life cycle, from writing and presenting a low-level design document to monitoring key operational metrics ',
      'Participated actively in defining project requirements; initiated one-on-ones with PMs and various stakeholders to resolve ambiguity in feature requirements and clear anticipated blockers',
    ],
  },
  {
    img: JuniLogo,
    title: 'Juni Learning',
    position: 'Computer Science Tutor',
    duration: 'Sep 2021 - Jan 2022',
    bullets: [
      'Conducted one-on-one tutoring sessions in Scratch, Python, C++, and JavaScript for students ages 8-18',
      "Provided structured lessons and monitored students' progress through biweekly sessions for 6 hours/week",
      'Maintained long-term relationships with students, tracking and improving student outcomes over a 5-month period',
    ],
  },
  {
    img: OnntekLogo,
    title: 'OnnTek',
    position: 'Fullstack Web Developer',
    duration: 'Feb 2021 - Oct 2021',
    bullets: [
      'Collaborated with 5 developers in a startup environment to develop multiple MERN web applications',
      'Led development of 4+ key full-stack features for an automated RFP generation application',
      'Facilitated a highly interactive and intuitive user experience, using several node packages to implement drag and drop, search/autocomplete functionality, automated email sending, and pdf generation based on user input',
      'Implemented robust front-end functionality using React and Redux; contributed to modern and responsive front-end styling using CSS3, SASS, and Material-UI',
      'Managed user data in a MongoDB database, maintained and utilized using Mongoose and Axios',
    ],
  },
];
export default Experience;
