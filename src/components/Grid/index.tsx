import React, { FC, useState } from 'react'
import Line from '../Line'
import './grid.css';

interface GridProps {
  word?: string
  characterGrid?: string[][],
  wordLocations?: any,
  targetLanguage?: string,
  startNewGame?: any,
  sourceLanguage?: string
}

const Grid: FC<GridProps> = ({
  word,
  characterGrid,
  wordLocations,
  targetLanguage,
  startNewGame,
  sourceLanguage
}) => {
  const [letterSelected, setLetterSelected] = useState<string>("")
  const [translation, setTranslation] = useState<string[]>()
  const [wordsFound, setWordsFound] = useState<number>(0)
  const [elementSelected, setElementSelected] = useState<any>([])
  const [phrase, setPhrase] = useState<string>("")

  const getWord = (event) => {
    event.preventDefault()
    const element = event.target
    element.style.color = 'red'
    setElementSelected([...elementSelected, element]);
    const letter = event.target.innerText
    setTranslation(Object.values(wordLocations))
    return setLetterSelected(letterSelected.concat(letter))
  }

  const checkWord = (event) => {
    event.preventDefault()
    const indexOfWord = translation?.indexOf(letterSelected)
    const element = event.target
    setElementSelected([...elementSelected, element]);
    if (indexOfWord > -1) {
      let count = wordsFound + 1
      setWordsFound(count)
      setLetterSelected("")
      if (count >= translation.length) {
        count = 0
        setWordsFound(count)
        setPhrase("You won! A new game will start in some seconds...")
        setTimeout(() => startNewGame(elementSelected), 5000);
        setTimeout(() => setPhrase(""), 5000);
      }
    } else {
      elementSelected.map(element => {
        return element.style.color = "black"
      })
      setLetterSelected("")
      setPhrase("")
    }
  }
  return (
    <div className="grid-container">
      <h1>Translation Search Game</h1>
      <span className="grid-text">{`Word: ${word}`}</span>
      <span className="grid-text">{`Original Language: ${sourceLanguage}`}</span>
      <span className="grid-text">{`Target Language: ${targetLanguage}`}</span>
      <div className="grid">
        {characterGrid?.map((line, lineIndex) => {
          return <Line key={lineIndex} line={line} getWord={getWord} checkWord={checkWord} />
        })}
      </div>

      <span>{phrase}</span>
    </div>
  );
}

export default Grid;
