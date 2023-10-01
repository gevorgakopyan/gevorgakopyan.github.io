import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Resume from './Resume';
import ContactMe from './ContactMe';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

