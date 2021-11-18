import React from 'react';

import ExploreItems from './ExploreItems';
import { ExploreBox } from './ExploreStyled';

const Explore = (props) => {
  return (
    <ExploreBox>
      <ExploreItems
        id={props.id0}
        title={props.title0}
        thumbnail={props.thumbnail0}
        description={props.description0}
      />
      <ExploreItems
        id={props.id1}
        title={props.title1}
        thumbnail={props.thumbnail1}
        description={props.description1}
      />
      <ExploreItems
        id={props.id2}
        title={props.title2}
        thumbnail={props.thumbnail2}
        description={props.description2}
      />
    </ExploreBox>
  );
};

export default Explore;
