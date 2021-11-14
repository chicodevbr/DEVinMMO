import React from 'react';
import Card from '../UI/Card';

import NewsItem from './NewsItem';
import { ListNews } from './NewsListStyled';

const NewsList = (props) => {
  if (props.length === 0) {
    return (
      <Card>
        <h2>No news yet.</h2>
      </Card>
    );
  }
  return (
    <ListNews>
      {props.items.map((news) => (
        <NewsItem
          key={news.id}
          id={news.id}
          image={news.main_image}
          title={news.title}
          news={news.short_description}
          url={news.article_url}
        />
      ))}
    </ListNews>
  );
};

export default NewsList;
