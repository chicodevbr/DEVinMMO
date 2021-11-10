import React from 'react';
import Card from '../UI/Card';
import DetailsItem from './DetailsItem';

const DetailsList = (props) => {
  const { items } = props;
  if (props.length === 0) {
    return (
      <Card>
        <h2>Loading...</h2>
      </Card>
    );
  }
  return (
    <DetailsItem
      key={items.id}
      title={items.title}
      thumbnail={items.thumbnail}
      description={items.short_description}
    />
  );
};

export default DetailsList;
