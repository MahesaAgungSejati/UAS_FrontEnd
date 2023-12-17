// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedPages from './components/pages/Pages';

function App() {
  return (
    <Router>
      <AuthenticatedPages />
    </Router>
  );
}

export default App;
