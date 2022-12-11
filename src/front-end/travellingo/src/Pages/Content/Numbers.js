import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { numbers } from '../../Utils/utils';

export default function Numbers() {
  return (
    <Box>
      
      <Text textAlign="center" fontSize="24px" fontWeight={600}>
        Numbers
      </Text>
      <Text textAlign={'center'} fontSize="22px" marginBottom={'2rem'}>
        Great! Let us have some fun counting...
      </Text>

      <Flex flexWrap={'wrap'} justifyContent="space-around">
        {numbers.map(number => {
          return (
            <Box
              py={'2rem'}
              borderRadius={'2rem'}
              textAlign={'center'}
              flexBasis={'28%'}
              background="#fff"
              marginBottom={'3rem'}
            >
              <Text
                className="numberGold"
                fontFamily="Arial, sans-serif"
                fontSize="5em"
                fontWeight="bold"
                position="relative"
                zIndex={1}
                display="inline-block"
              >
                {number.number}
              </Text>
              {/* <Text><strong>{number.english}</strong></Text> */}
              <Text
                textDecoration={'capitalize'}
                color="#390c0b"
                fontSize={'1.25rem'}
              >
                {number.swahili[0].toUpperCase() + number.swahili.slice(1)}
              </Text>
            </Box>
          );
        })}
      </Flex>
      <Text textAlign={'center'} fontSize="1rem" mt="2rem">
        {' '}
        <span class="spanRed">Hint!</span> For all numbers after ten, for
        example eleven, we say kumi na moja i.e 10 + 1 where na stands for + .
      </Text>
      <Text textAlign={'center'} fontSize="1rem" mb="2rem">
        <span class="spanRed">Example: </span>12= 12 + 1 This is read as Kumi na
        mbi
      </Text>
    </Box>
  );
}
