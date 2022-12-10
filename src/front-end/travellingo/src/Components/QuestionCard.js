import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { questions } from '../Utils/utils';
export default function QuestionCard() {
  return (
    <Box>
      {questions.map((item, key) => (
        <Flex
          maxWidth={'730px'}
          background="#ffffff"
          height="161px"
          marginBottom={'4rem'}
          borderRadius="30px"
          flexDirection="column"
          justifyContent="center"
        >
          <Text
            fontWeight={700}
            fontFamily="Montserrat"
            margin="0 10px"
            fontSize="20px"
            letterSpacing="2px"
            textDecoration="none"
            textAlign={'center'}
            color='#000000'
          >
            {item.question}
          </Text>
          <Text
            fontWeight={'normal'}
            fontFamily="Montserrat"
            margin="0 10px"
            fontSize="18px"
            letterSpacing="2px"
            textDecoration="none"
            textAlign={'center'}
            color='#000000'
          >
            {item.answer}
          </Text>
        </Flex>
      ))}
    </Box>
  );
}
