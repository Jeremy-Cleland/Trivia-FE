import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom';
import Header from './Header/Header';
import App from './App';
import About from './About/About';
import Leaderboard from './Leaderboard/Leaderboard';

class Routes extends React.Component {

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/" element={<App />} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
