import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../UI/Button';
import { ButtonGroup } from '../UI/ButtonStyled';
import Card from '../UI/Card';

import { Description, ItemList, TitleGroup } from './GameItemStyled';
import Platform from './Platform';

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

          <Platform platform={props.platform} />
        </TitleGroup>
        <Description>
          <p>{props.short_description} </p>
        </Description>
        <ButtonGroup>
          <Button
            style={{
              color: '#772DAE',
              border: '1px solid #772DAE',
              background: 'transparent',
            }}
            onClick={() => {
              history.push(`/game/${props.id}`);
            }}
          >
            more
          </Button>
        </ButtonGroup>
      </Card>
    </ItemList>
  );
};

export default GameItem;
