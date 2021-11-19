import React from 'react';
import { useHistory } from 'react-router';
import { Image } from '../Games/GameItemStyled';

import {
  CardExplore,
  DescriptionExploreItem,
  TitleExploreItem,
} from './ExploreStyled';

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
    <CardExplore style={{ width: '90vw' }} onClick={clickHandler}>
      <Image src={props.thumbnail} alt={props.title} />

      <TitleExploreItem>{props.title}</TitleExploreItem>

      <DescriptionExploreItem>{props.description}</DescriptionExploreItem>
    </CardExplore>
  );
};

export default ExploreItems;
