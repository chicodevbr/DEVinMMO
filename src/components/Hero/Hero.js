import React from 'react';

import { Grid } from '@react-spectrum/layout';
import { Content, View } from '@react-spectrum/view';

import CarouselHero from './CarouselHero';
import Explore from '../Explore/Explore';
import { FooterBox, Span, TitleExplore } from './HeroStyled';
import { Link } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';

const Hero = (props) => {
  const { items } = props;
  const { lastNews } = props;

  const getImageUrl = (url, array) => {
    const pathArray = String(url).split('/');
    const host = pathArray[3];
    const imgUrl = `https://www.mmobomb.com/g/${
      array && array.id
    }/${host}-1.jpg`;
    return imgUrl;
  };

  const imgUrl0 = getImageUrl(`${items[0] && items[0].profile_url}`, items[0]);

  return (
    <React.Fragment>
      <Grid
        areas={['header  header', 'content content', 'footer  footer']}
        columns={['1fr', '3fr']}
        rows={['size-1000', 'auto', 'size-1000']}
        height="size-6000"
        gap="size-100"
      >
        <View width="100%" gridArea="header">
          <CarouselHero
            image0={imgUrl0}
            caption0={`<a href='/popularity'>Most Popular Games</a>`}
            image1={lastNews[0] && lastNews[0].main_image}
            caption1={`<a href='/news'>${lastNews[0] && lastNews[0].title}</a>`}
            image2={lastNews[1] && lastNews[1].main_image}
            caption2={`<a href='/news'>${lastNews[1] && lastNews[1].title}</a>`}
          />
        </View>

        <View gridArea="content">
          <Content>
            <TitleExplore>
              Explore:{' '}
              <Link to="/games">
                <Span>All Games </Span>
              </Link>
            </TitleExplore>
            <Explore
              id0={items[0] && items[0].id}
              title0={items[0] && items[0].title}
              thumbnail0={items[0] && items[0].thumbnail}
              id1={items[1] && items[1].id}
              title1={items[1] && items[1].title}
              thumbnail1={items[1] && items[1].thumbnail}
              id2={items[2] && items[2].id}
              title2={items[2] && items[2].title}
              thumbnail2={items[2] && items[2].thumbnail}
            />
          </Content>
          <Content>
            <TitleExplore>
              <Link to="/news">
                <Span>News</Span>
              </Link>
            </TitleExplore>
            <Explore
              id0={lastNews[2] && lastNews[2].id}
              title0={lastNews[2] && lastNews[2].title}
              thumbnail0={lastNews[2] && lastNews[2].main_image}
              description0={lastNews[2] && lastNews[2].short_description}
              id1={lastNews[3] && lastNews[3].id}
              title1={lastNews[3] && lastNews[3].title}
              thumbnail1={lastNews[3] && lastNews[3].main_image}
              description1={lastNews[3] && lastNews[3].short_description}
              id2={lastNews[4] && lastNews[4].id}
              title2={lastNews[4] && lastNews[4].title}
              thumbnail2={lastNews[4] && lastNews[4].main_image}
              description2={lastNews[4] && lastNews[4].short_description}
            />
          </Content>
        </View>

        <View gridArea="footer" padding="1rem">
          <FooterBox>
            <h3 id="wellLabel">Developer by Chico</h3>
            <Link
              to={{ pathname: 'https://github.com/chicodevbr' }}
              target="_blank"
            >
              <FaGithub color="#772dae" size="1.5rem" />
            </Link>
          </FooterBox>
        </View>
      </Grid>
    </React.Fragment>
  );
};

export default Hero;
