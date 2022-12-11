import { Box, Image, Flex, Text } from '@chakra-ui/react';
import React from 'react';
export const foods = [
    { img: require('../../images/beans.jpeg'), swahili: 'maharagwe' },
    { img: require('../../images/chips.jpg'), swahili: 'chipo' },
    { img: require('../../images/chicken.jpeg'), swahili: 'nyama ya kuku' },
    {
      img: require('../../images/eggs.jpg'),
      swahili: 'mayai',
    },
    { img: require('../../images/fish.jpg'), swahili: 'samaki' },
    { img: require('../../images/kale.webp'), swahili: 'mboga' },
    { img: require('../../images/rice.jpg'), swahili: 'mchele' },
    { img: require('../../images/spaghetti.webp'), swahili: 'tambi' },
   
  ];

export default function Foods(){
    return(
        <Box>
            <Text textAlign= 'center' fontSize="24px"  fontWeight={600}>Food</Text>   
      <Text textAlign={'center'} fontSize="22px" marginBottom={'2rem'}>
        Common foods that we eat...
      </Text>

      <Flex flexWrap={'wrap'} justifyContent="space-around">
        {foods.map(food => {
          return (
            <Flex
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
              <Image borderRadius={'full'} src={food.img} height="280px" width='80%'/>
              <Text
                textDecoration={'capitalize'}
                color="#390c0b"
                fontSize={'1.25rem'}
                marginTop='20px'

              >
                {food.swahili[0].toUpperCase() + food.swahili.slice(1)}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  
    )
}