import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import ContentCard from '../Components/ContentCard';
import numbers from '../images/numbers.png';
import food from '../images/food.svg';
import directions from '../images/directions.svg';
import greetings from '../images/greetings.svg';
import common_words from '../images/common_words.svg';
import { Link } from 'react-router-dom';

export default function ContentPage() {
  const contents = [
    { imgUrl: numbers, text: 'Numbers' },
    { imgUrl: greetings, text: 'Greetings' },
    { imgUrl: common_words, text: 'Common words' },
    { imgUrl: food, text: 'Foods' },
    { imgUrl: directions, text: 'Directions' },
  ];

  return (
    <Box color="#000000" height={'max-content'}
    // height="calc(100vh - 50px )"
    
    >
      <Text textAlign={'center'} fontSize="18px" fontWeight={500}>
        Achanikaye kwenye mpini hafi njaa
      </Text>
      <Text textAlign={'center'} fontSize="18px" fontWeight={500}>
        ~Swahili saying
      </Text>
      <Flex justifyContent={'space-around'}>
        <Link to="numbers">
          <ContentCard content={contents[0]} />
        </Link>

        <Link to="greetings">
          <ContentCard content={contents[1]} />
        </Link>
      </Flex>
      <Flex justifyContent={'space-around'}>
        <Link to="common_words">
          <ContentCard content={contents[2]} />
        </Link>
      </Flex>
      <Flex justifyContent={'space-around'}>
        <Link to="foods">
          {' '}
          <ContentCard content={contents[3]} />
        </Link>

        <Link to="directions">
          <ContentCard content={contents[4]} />
        </Link>
      </Flex>
    </Box>
  );
}
