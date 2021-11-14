import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import {
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
          <img src={props.image} alt={props.title} />

          <NewsSideContainer>
            <h4>{props.title}</h4>
            <p>{props.news}</p>
            <Link to={{ pathname: props.url }} target="_blank">
              <Button
                style={{
                  color: '#772DAE',
                  border: '1px solid #772DAE',
                  background: 'transparent',
                }}
              >
                Read More
              </Button>
            </Link>
          </NewsSideContainer>
        </NewsContainer>
      </Card>
    </ListItemNews>
  );
};

export default NewsItem;
