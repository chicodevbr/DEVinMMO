import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGroup } from '../UI/ButtonStyled';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './button.css';

import {
  Description,
  Image,
  ItemList,
  ListTitle,
  TitleGroup,
} from './GameItemStyled';
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

        <ul>
          <ListTitle>
            <h3>{props.title}</h3>
            <Platform platform={props.platform} />
          </ListTitle>
        </ul>

        <TitleGroup></TitleGroup>
        <Description>
          <p>{props.short_description} </p>
        </Description>
        <ButtonGroup>
          <Button className="btn" onClick={clickHandler}>
            more
          </Button>
        </ButtonGroup>
      </Card>
    </ItemList>
  );
};

export default GameItem;
