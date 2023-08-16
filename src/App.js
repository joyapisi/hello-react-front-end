/* eslint-disable import/extensions */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greetings from './components/Greeting';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Greetings />} />
    </Routes>
  </Router>
);

export default App;
