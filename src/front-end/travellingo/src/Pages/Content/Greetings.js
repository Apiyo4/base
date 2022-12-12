import { Box, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';

export const greetings = [
  { img: require('../../images/hello.jpg'), swahili: 'habari' },
  { img: require('../../images/howareyou.png'), swahili: 'habari yako' },
  { img: require('../../images/goodday.jpeg'), swahili: 'siku njema' },
  {
    img: require('../../images/good-morning-affirmation-free-vector.jpg'),
    swahili: 'habari ya asubuhi',
  },
  { img: require('../../images/goodafternoon.jpg'), swahili: 'mchana njema' },
  { img: require('../../images/goodevening.png'), swahili: 'jioni njema' },
  { img: require('../../images/goodnight.jpg'), swahili: 'usiki njema' },
  { img: require('../../images/goodbye.jpg'), swahili: 'kwaheri' },
];
export default function Greetings() {
  return (
    <Box>
        <Text textAlign= 'center' fontSize="24px"  fontWeight={600}>Greetings</Text>   
      <Text textAlign={'center'} fontSize="22px" marginBottom={'2rem'}>
        Always start or end a converation with...
      </Text>

      <Flex flexWrap={'wrap'} justifyContent="space-around">
        {greetings.map((greeting, indx) => {
          return (
            <Flex
              key={indx}
              py={'2rem'}
              borderRadius={'2rem'}
              textAlign={'center'}
              flexBasis={'28%'}
              background="#fff"
              margin="0 auto"
              marginBottom={'3rem'}
              position="relative"
              flexDirection={'column'}
              alignItems="center"
            >
              <Image src={greeting.img} height="200px" />
              <Text
                textDecoration={'capitalize'}
                color="#390c0b"
                fontSize={'1.25rem'}
                position="relative"
                bottom="5px"
              >
                {greeting.swahili[0].toUpperCase() + greeting.swahili.slice(1)}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}
