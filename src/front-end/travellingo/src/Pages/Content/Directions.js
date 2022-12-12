import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { directions } from '../../Utils/utils';
export default function Directions(){
    return(
        <Box>
       <Text textAlign= 'center' fontSize="24px"  fontWeight={600}>Directions</Text>     
      <Text textAlign={'center'} fontSize="22px" marginBottom={'2rem'}>
      East, west, south, north...
      </Text>

      <Flex flexWrap={'wrap'} justifyContent="space-around">
        {directions.map((direction, index) => {
          return (
            <Box
              key = {index}
              py={'2rem'}
              borderRadius={'2rem'}
              textAlign={'center'}
              flexBasis={'28%'}
              background="#fff"
              marginBottom={'3rem'}
            >
              <Text
                className="directionGold"
                fontFamily="Arial, sans-serif"
                fontSize="4em"
                fontWeight="bold"
                position="relative"
                zIndex={1}
                display="inline-block"
              >
                {direction.direction}
              </Text>
              {/* <Text><strong>{number.english}</strong></Text> */}
              <Text
                textDecoration={'capitalize'}
                color="#390c0b"
                fontSize={'1.25rem'}
              >
                {direction.swahili[0].toUpperCase() + direction.swahili.slice(1)}
              </Text>
            </Box>
          );
        })}
      </Flex>
      
    </Box>
    )
}