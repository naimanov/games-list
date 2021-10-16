import React from 'react';
import GameCardButtons from './GameCardButtons';

interface CardProps {
  name: string;
  iconUrl: string;
  index: number;
}

function SingleGameCard({ name, iconUrl, index }: CardProps) {
  return (
    <article className='card-container'>
      <div className='game-container'>
        <div className='position-number'>
          <span>{index + 1}</span>
        </div>
        <div className='icon-container'>
          <img className='icon' src={iconUrl} alt='' />
        </div>
        <div className='game-name'>{name}</div>
      </div>
      <GameCardButtons name={name} index={index} />
    </article>
  );
}

export default SingleGameCard;
