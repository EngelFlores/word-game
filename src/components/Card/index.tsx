import React, { FC } from 'react'
import './card.css'

interface CardProps {
  letter?: string
  getWord?: any,
  checkWord?: any
}

const Card: FC<CardProps> = ({
  letter,
  getWord,
  checkWord
}) => {

  return (
    <div draggable="true"
      onDragEnter={(event) => getWord(event)}
      onDragEnd={(event) => checkWord(event)}
      className="letter-box">
      {letter}
    </div>
  );
}

export default Card;
