import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function ContentCard({ content }) {
  return (
    <Flex
    margin='0 auto'
      marginTop="1rem"
      height="240px"
      width="240px"
      background={'#fff'}
      borderRadius="200px"
      flexDirection= 'column'
      alignItems= 'center'
      justifyContent= 'center'
    >
      <Image src={content.imgUrl} height="150px" width="150px" />
      <Text fontSize={'20px'} fontWeight={700}> {content.text}</Text>
    </Flex>
  );
}
