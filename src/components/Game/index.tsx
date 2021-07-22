import React, { useState, useEffect } from 'react';
import './game.css';
import initialData from '../../data/find-challenge.json'
import Grid from '../Grid'

interface WordProps {
  source_language?: string
  word?: string
  character_grid?: string[][],
  word_locations?: any,
  target_language?: string
}

const Game = () => {
  const [wordInfo, setWordInfo] = useState<WordProps>()
  const [gamePlayed, setGamePlayed] = useState<number>(0)
  const [endGame, setEndGame] = useState<string>("")

  const createGrid = () => {
    const listLength = initialData.length
    if(gamePlayed < listLength) {
      setWordInfo(initialData[gamePlayed])
    } else {
      setEndGame("That's the end of the game, thank you for playing.")
    }
  }

  const startNewGame = (elementSelected) => {
    const count = gamePlayed + 1
    setGamePlayed(count)
    elementSelected?.map(element => {
      return element.style.color = "black"
    })
  }

  useEffect(() => {
    createGrid()
  });
  
  return (
    <div className="game-container">
      <Grid
        word={wordInfo?.word}
        characterGrid={wordInfo?.character_grid}
        wordLocations={wordInfo?.word_locations}
        targetLanguage={wordInfo?.target_language}
        sourceLanguage={wordInfo?.source_language}
        startNewGame={startNewGame}
      />
      <span>{endGame}</span>
    </div>
  );
}

export default Game;
