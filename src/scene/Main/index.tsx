import React from 'react'
import { Link } from 'react-router-dom';
import './main.css'

const Home = () => {
  return (
    <div className="main">
      <img src="https://imgs2.dab3games.com/word-search-game.jpg" alt="Word search game" />
      <Link className="main-link" to="/game">Start Game</Link>
    </div>
  );
}

export default Home;
