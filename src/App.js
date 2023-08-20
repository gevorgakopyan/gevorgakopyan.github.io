import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import AboutMe from './AboutMe';
import Experience from './Experience'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

