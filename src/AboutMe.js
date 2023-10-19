import React from 'react';
import Navbar from './Navbar';
import { Box, Container, Typography } from '@mui/material';
import Headshot from './img/headshot.png';

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <Container mt={0} sx={{ paddingBottom: '2rem' }}>
        <Box textAlign={'center'}>
          <Box
            component='img'
            src={Headshot}
            alt='headshot'
            className='my-picture'
            sx={{
              borderRadius: '100%',
              maxWidth: 'calc(min(90%, 400px))',
              aspectRatio: '1/1',
              objectFit: 'cover',
            }}
          />
          <Typography variant='h4' mt={3}>
            Ethan Jackson
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
            }}
          >
            I am a rising senior at UCLA with a genuine passion for software
            engineering and technology. In my free time I enjoy tinkering with
            websites or Unity projects. I also enjoy learning about game dev and
            graphics. Beyond programming, I enjoy working out and making music.
            Through my internship, project, and club experiences, I enjoy
            developing creative and robust software that users love!
          </Typography>

          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              fontWeight: 'bold',
              textAlign: 'justify',
            }}
          >
            I am currently seeking new grad Software Engineering roles, don't
            hesitate to reach out!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default AboutMe;
