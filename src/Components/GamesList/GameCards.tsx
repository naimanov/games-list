import React from 'react';
import SingleGameCard from './SingleGameCard';

interface GameCardsProps {
  games: any[];
}
function GameCards({ games }: GameCardsProps) {
  return (
    <section className='list-container'>
      {games.map((game, index) => {
        return (
          <SingleGameCard
            key={game.name}
            name={game.name}
            iconUrl={game.icon_url}
            index={index}
          />
        );
      })}
    </section>
  );
}

export default GameCards;
