import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/service';
import DetailsList from '../components/GameDetails/GameDetailsList';

const GameDetails = () => {
  const { gameId } = useParams();

  const [gameDetails, setGameDetails] = useState({});

  useEffect(() => {
    api.get('game', { params: { id: `${gameId}` } }).then((response) => {
      setGameDetails(response.data);
      console.log(response.data);
      console.log(response.data.screenshots[0].image);
    });
  }, [gameId]);

  return <DetailsList items={gameDetails} />;
};

export default GameDetails;
