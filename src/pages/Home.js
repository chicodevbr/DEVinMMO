import React from 'react';
import GamesList from '../components/Games/GamesList';

const Home = () => {
  const DUMMY_GAMES = [
    {
      id: 1,
      title: 'Dauntless',
      thumbnail: 'https://www.mmobomb.com/g/1/thumbnail.jpg',
      short_description:
        'Gather your friends, forge your weapons, and hunt ferocious behemoths in Dauntless, the co-op multiplayer RPG from Phoenix Labs, a studio consisting of developers from some of the biggest MMORPG ever made. Set adrift in a lush fantasy world known as the Shattered Isles,  must band together to contend with a harsh environment and even harsher enemies Each Slayer can choose his or her weapon and attack style, from lightning-fast sword attacks to powerful axe strikes.',
      game_url: 'https://www.mmobomb.com/open/dauntless',
      genre: 'MMORPG',
      platform: 'PC (Windows)',
      profile_url: 'https://www.mmobomb.com/dauntless',
    },
    {
      id: 2,
      title: 'Dauntless',
      thumbnail: 'https://www.mmobomb.com/g/1/thumbnail.jpg',
      short_description:
        'Gather your friends, forge your weapons, and hunt ferocious behemoths in Dauntless, the co-op multiplayer RPG from Phoenix Labs, a studio consisting of developers from some of the biggest MMORPG ever made. Set adrift in a lush fantasy world known as the Shattered Isles,  must band together to contend with a harsh environment and even harsher enemies Each Slayer can choose his or her weapon and attack style, from lightning-fast sword attacks to powerful axe strikes.',
      game_url: 'https://www.mmobomb.com/open/dauntless',
      genre: 'MMORPG',
      platform: 'PC (Windows)',
      profile_url: 'https://www.mmobomb.com/dauntless',
    },
    {
      id: 3,
      title: 'Dauntless',
      thumbnail: 'https://www.mmobomb.com/g/1/thumbnail.jpg',
      short_description:
        'Gather your friends, forge your weapons, and hunt ferocious behemoths in Dauntless, the co-op multiplayer RPG from Phoenix Labs, a studio consisting of developers from some of the biggest MMORPG ever made. Set adrift in a lush fantasy world known as the Shattered Isles,  must band together to contend with a harsh environment and even harsher enemies Each Slayer can choose his or her weapon and attack style, from lightning-fast sword attacks to powerful axe strikes.',
      game_url: 'https://www.mmobomb.com/open/dauntless',
      genre: 'MMORPG',
      platform: 'PC (Windows)',
      profile_url: 'https://www.mmobomb.com/dauntless',
    },
  ];
  return (
    <main>
      <GamesList items={DUMMY_GAMES} />
    </main>
  );
};

export default Home;
