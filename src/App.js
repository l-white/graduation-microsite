import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Route path="/" component={Home} exact />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
