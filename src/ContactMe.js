import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './ContactMe.css';
import Navbar from './Navbar';
import { Box, Container, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import styled from '@emotion/styled';

function ContactMe() {
  const ContactLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
  }));

  return (
    <>
      <Navbar />
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant='h2' mt={3}>
          Let's Connect!
        </Typography>
        <Box className='enlarge-on-hover'>
          <ContactLink href='mailto:ethantjackson44@gmail.com'>
            <Typography variant='h5' mt={3}>
              <EmailIcon sx={{ position: 'relative', top: '0.3rem' }} />
              &nbsp;ethantjackson44@gmail.com
            </Typography>
          </ContactLink>
        </Box>
        <Box className='enlarge-on-hover'>
          <ContactLink
            href='https://www.linkedin.com/in/ethantjackson/'
            target='_blank'
          >
            <Typography variant='h5' mt={3}>
              <LinkedInIcon sx={{ position: 'relative', top: '0.3rem' }} />
              &nbsp;ethantjackson
            </Typography>
          </ContactLink>
        </Box>
        <Box className='enlarge-on-hover'>
          <ContactLink href='https://github.com/ethantjackson' target='_blank'>
            <Typography variant='h5' mt={3}>
              <GitHubIcon sx={{ position: 'relative', top: '0.3rem' }} />
              &nbsp;ethantjackson
            </Typography>
          </ContactLink>
        </Box>
        <Box className='enlarge-on-hover'>
          <ContactLink>
            <Typography variant='h5' mt={3}>
              <PhoneEnabledIcon sx={{ position: 'relative', top: '0.3rem' }} />
              &nbsp;(669) 294-1535
            </Typography>
          </ContactLink>
        </Box>
      </Container>
    </>
  );
}

export default ContactMe;
