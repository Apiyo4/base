import { Box, Image, Flex, Text } from '@chakra-ui/react';
import React from 'react';


export const commonWords = [
    { img: require('../../images/please.jpeg'), swahili: 'tafadhali' },
    { img: require('../../images/sorry.jpeg'), swahili: 'samahani' },
    { img: require('../../images/thankyou.jpeg'), swahili: 'asante' },
    {
      img: require('../../images/no.jpeg'),
      swahili: 'hapana',
    },
    { img: require('../../images/yes.jpeg'), swahili: 'ndiyo' },
    { img: require('../../images/kula.jpeg'), swahili: 'kula' },
    { img: require('../../images/jificha.jpeg'), swahili: 'hide' },
    { img: require('../../images/iwantyou.jpeg'), swahili: 'nakutaka' },
    {
      img: require('../../images/imba.jpeg'),
      swahili: 'imba',
    },
    { img: require('../../images/iloveyou.jpeg'), swahili: 'nakupenda' },
    { img: require('../../images/help.jpeg'), swahili: 'saidia' },
    { img: require('../../images/drink.jpeg'), swahili: 'kunywa' },
    {
      img: require('../../images/dontcry.jpeg'),
      swahili: 'usilie',
    },
    { img: require('../../images/dance.jpeg'), swahili: 'cheza' },
    { img: require('../../images/cry.jpeg'), swahili: 'lia' },
    { img: require('../../images/congratulations.jpeg'), swahili: 'hongera' },
    {
      img: require('../../images/cheka.jpeg'),
      swahili: 'laugh',
    },
    { img: require('../../images/celebrate.jpeg'), swahili: 'sheherekea' },
   
  ];
export default function CommonWords(){
    return(
        <Box>
        <Text textAlign={'center'} fontSize="22px" marginBottom={'2rem'}>
          Common words you should know...
        </Text>
  
        <Flex flexWrap={'wrap'} justifyContent="space-around">
          {commonWords.map(commonWord => {
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
                <Image src={commonWord.img} height="200px" />
                <Text
                  textDecoration={'capitalize'}
                  color="#390c0b"
                  fontSize={'1.25rem'}
                  position="relative"
                  bottom="5px"
                >
                  {commonWord.swahili[0].toUpperCase() + commonWord.swahili.slice(1)}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    
    )
}