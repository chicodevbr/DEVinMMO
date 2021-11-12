import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../UI/Button';
import { ButtonGroup } from '../UI/ButtonStyled';
import Card from '../UI/Card';

import { Description, Image, ItemList, TitleGroup } from './GameItemStyled';
import Platform from './Platform';

const GameItem = (props) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/game/${props.id}`);
  };

  return (
    <ItemList>
      <Card onClick={clickHandler}>
        <div>
          <Image src={props.thumbnail} alt={props.title} />
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
            onClick={clickHandler}
          >
            more
          </Button>
        </ButtonGroup>
      </Card>
    </ItemList>
  );
};

export default GameItem;
