import React from 'react';
import Card from '../UI/Card';
import DetailsItem from './GameDetailsItem';

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
      image={items.screenshots && items.screenshots[0].image}
      description={items.short_description}
      platform={items.platform}
      genre={items.genre}
      os={
        items['minimum_system_requirements'] &&
        items['minimum_system_requirements'].os
      }
      processor={
        items['minimum_system_requirements'] &&
        items['minimum_system_requirements'].processor
      }
      memory={
        items['minimum_system_requirements'] &&
        items['minimum_system_requirements'].memory
      }
      graphics={
        items['minimum_system_requirements'] &&
        items['minimum_system_requirements'].graphics
      }
      storage={
        items['minimum_system_requirements'] &&
        items['minimum_system_requirements'].storage
      }
    />
  );
};

export default DetailsList;
