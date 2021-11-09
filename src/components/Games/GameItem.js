import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../UI/Button';
import { ButtonGroup } from '../UI/ButtonStyled';
import Card from '../UI/Card';

import { ItemList, TitleGroup } from './GameItemStyled';

const GameItem = (props) => {
  const history = useHistory();

  return (
    <ItemList>
      <Card>
        <div>
          <img src={props.thumbnail} alt={props.title} />
        </div>
        <TitleGroup>
          <h2>{props.title}</h2>

          <ButtonGroup>
            <Button
              style={{
                color: '#772DAE',
                border: '1px solid #772DAE',
                background: 'transparent',
              }}
              onClick={() => {
                console.log('pc');
              }}
            >
              {props.platform}
            </Button>
          </ButtonGroup>
        </TitleGroup>
        <div>
          <p>{props.short_description} </p>
        </div>
        <ButtonGroup>
          <Button
            style={{
              color: '#772DAE',
              border: '1px solid #772DAE',
              background: 'transparent',
            }}
            onClick={() => {
              history.push(`/game/${props.gameId}`);
              console.log('clickou');
            }}
          >
            ver mais
          </Button>
        </ButtonGroup>
      </Card>
    </ItemList>
  );
};

export default GameItem;
