import React, { useEffect, useState } from 'react';
import api from '../api/service';
import NewsList from '../components/News/NewsList';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get('latestnews').then((response) => {
      setNews(response.data);
    });
  }, []);

  return (
    <main>
      <NewsList items={news} />
    </main>
  );
};

export default News;
