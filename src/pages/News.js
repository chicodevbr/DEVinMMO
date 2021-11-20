import React, { useEffect, useState } from 'react';
import api from '../api/service';
import NewsFinder from '../components/Search/NewsFinder';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get('latestnews').then((response) => {
      setNews(response.data);
    });
  }, []);

  return (
    <main>
      <NewsFinder items={news} />
    </main>
  );
};

export default News;
