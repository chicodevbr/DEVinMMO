import React from 'react';
import Card from '../UI/Card';
import GameItem from './GameItem';
import List from '../UI/List';

const GamesList = (props) => {
  if (props.length === 0) {
    return (
      <Card>
        <h2>No infos yet.</h2>
      </Card>
    );
  }
  return (
    <List>
      {props.items.map((game) => {
        return (
          <GameItem
            key={game.id}
            id={game.id}
            platform={game.platform}
            thumbnail={game.thumbnail}
            title={game.title}
            short_description={game.short_description}
          />
        );
      })}
    </List>
  );
};

export default GamesList;
