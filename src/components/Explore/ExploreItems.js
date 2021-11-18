import React from 'react';
import { useHistory } from 'react-router';
import { Image } from '../Games/GameItemStyled';

import Card from '../UI/Card';
import { DescriptionExploreItem, TitleExploreItem } from './ExploreStyled';

const ExploreItems = (props) => {
  const history = useHistory();

  const clickHandler = () => {
    if (props.id < 1000) {
      history.push(`/game/${props.id}`);
    } else {
      history.push(`/news`);
    }
  };

  return (
    <Card style={{ margin: '1rem' }} onClick={clickHandler}>
      <Image src={props.thumbnail} alt={props.title} />

      <TitleExploreItem>{props.title}</TitleExploreItem>

      <DescriptionExploreItem>{props.description}</DescriptionExploreItem>
    </Card>
  );
};

export default ExploreItems;
