import React, { FC } from 'react'
import Card from '../Card'
import './line.css'

interface ListProps {
  line?: string[],
  getWord?: any
  checkWord?: any
}

const List: FC<ListProps> = ({
  line,
  getWord,
  checkWord
}) => {
  return (
    <div className="line-container">
      {line?.map((letter, letterIndex) => {
        return <Card key={letterIndex} letter={letter} getWord={getWord} checkWord={checkWord}/>
      })}
    </div>
  );
}

export default List;
