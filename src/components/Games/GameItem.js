import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGroup } from '../UI/ButtonStyled';
import Card from '../UI/Card';
import './button.css';

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
        <Image src={props.thumbnail} alt={props.title} />

        <TitleGroup>
          <h2>{props.title}</h2>

          <Platform platform={props.platform} />
        </TitleGroup>
        <Description>
          <p>{props.short_description} </p>
        </Description>
        <ButtonGroup>
          <button className="btn" onClick={clickHandler}>
            more
          </button>
        </ButtonGroup>
      </Card>
    </ItemList>
  );
};

export default GameItem;
