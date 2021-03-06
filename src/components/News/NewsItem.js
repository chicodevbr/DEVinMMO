import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import './Button.css';

import {
  ImageNews,
  ListItemNews,
  NewsContainer,
  NewsSideContainer,
} from './NewsListItemStyled';
import { Link } from 'react-router-dom';

const NewsItem = (props) => {
  return (
    <ListItemNews>
      <Card>
        <NewsContainer>
          <ImageNews src={props.image} alt={props.title} />

          <NewsSideContainer>
            <h4>{props.title}</h4>
            <p>{props.news}</p>
            <Link to={{ pathname: props.url }} target="_blank">
              <Button>Read More</Button>
            </Link>
          </NewsSideContainer>
        </NewsContainer>
      </Card>
    </ListItemNews>
  );
};

export default NewsItem;
