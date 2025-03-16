import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Mentors from './Pages/Mentors';
import TeacherProfile from './Pages/TeacherProfile';
import Shop from './Pages/Shop';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentors/profile/:teacherId" element={<TeacherProfile />} />
          <Route path="/previous_questions" element={<Shop />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
};

export default App;