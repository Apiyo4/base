import {
  Box,
  Flex,
  Text,
  Spinner,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import React from 'react';

export function QuizCard({ quizQuestion, value, setValue }) {
  if (!quizQuestion) {
    return (
      <Box width="max-content" margin="0 auto" height="calc(100% - 228px)">
        {' '}
        <Spinner color="red.500" />{' '}
      </Box>
    );
  }

  return (
    <Box>
      <Flex
        width={'600px'}
        background="#ffffff"
        height="269px"
        marginBottom={'4rem'}
        borderRadius="60px"
        flexDirection="column"
        justifyContent="center"
        color={'#000000'}
      >
        <Text
          fontWeight={700}
          fontFamily="Montserrat"
          margin="0 10px"
          fontSize="20px"
          letterSpacing="2px"
          textDecoration="none"
          textAlign={'left'}
          marginBottom="16px"
          color={'#000000'}
          paddingX="2.5rem"
        >
          {quizQuestion.question}
        </Text>
        <RadioGroup color={'#000000'} onChange={setValue} value={value}>
          <Stack align="left" color={'#000000'} paddingX="3.75rem">
            {Object.values(quizQuestion.choices).map((choice, key) => {
              return (
                <Radio
                  value={choice.toString()}
                  fontWeight={'normal'}
                  fontFamily="Montserrat"
                  fontSize="18px"
                  letterSpacing="2px"
                  textDecoration="none"
                  textAlign={'center'}
                  color={'#000000'}
                >
                  {choice}
                </Radio>
              );
            })}
          </Stack>
        </RadioGroup>
      </Flex>
      {/* ))} */}
    </Box>
  );
}
