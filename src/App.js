import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Project from './components/Project';
import { Service } from './components/Service';
import Error from './components/Error';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import ReactGA from 'react-ga';
import Career from './components/Career';


function App() {

  useEffect(() => {
    // Initialize react-ga with your tracking ID
    ReactGA.initialize('G-50QBQ9KJY8');

    // Track the initial page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='App'>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
