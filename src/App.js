import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Resume from './Resume';
import ContactMe from './ContactMe';
import Projects from './Projects';
import { ThemeProvider, createTheme } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#a0a0a0',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/projects' element={<Projects />} />
            <Route path='/about-me' element={<AboutMe />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact-me' element={<ContactMe />} />
            <Route path='/' element={<MainPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
