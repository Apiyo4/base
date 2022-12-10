import { Box, Flex, Text, RadioGroup, Stack, Radio } from '@chakra-ui/react';
import React from 'react';

export function QuizCard({
  quizQuestion,
  setQuestionNumber,
  questionNumber,
  setCounter,
  time,
  value,
  setValue,
}) {
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
        <RadioGroup
          color={'#000000'}
          onChange={setValue} value={value}
          // onClick={() => {
          //   if (questionNumber < 3) {
          //     setQuestionNumber(questionNumber + 1);
          //   }
          //   setCounter(time);
          // }}
        >
          <Stack align="left" color={'#000000'} paddingX="3.75rem">
            {quizQuestion.choices.map((choice, key) => {
              return (
                <Radio
                  value={(key + 1).toString()}
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
