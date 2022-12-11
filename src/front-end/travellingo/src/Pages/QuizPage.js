import { Button, Flex, Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { QuizCard } from '../Components/QuizCard';
import QuizProgress from '../Components/QuizProgress';
import { quiz } from '../Utils/utils';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
export default function QuizPage() {
  const time = 15;
  const [counter, setCounter] = React.useState(time);
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [value, setValue] = React.useState(null);
  const [questions, setQuestions] = useState([])
  const location = useLocation()
  const base_url = 'https://travellingo.onrender.com/api/'
  React.useEffect(()=>{
    axios.get(`${base_url}/tests`).then(
      res=>{

        setQuestions(res.data)
      }
    )
  },[questions])
  React.useEffect(()=>{
    if(location.state.guru && questions.length > 1){
      setQuestions(questions.sort((a, b) => b.difficulty - a.difficulty).slice(0,  5))
    }
    
  }, [location.state])
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter, questionNumber]);

  React.useEffect(() => {
    if (counter === 0 && questionNumber < 4) {
      setQuestionNumber(questionNumber + 1);
      setCounter(counter + time);
    }
  }, [counter, questionNumber, value]);
  if(questions.length < 1){
    return <p>Loading</p>
  }

  return (
    <Flex
      width="max-content"
      margin="0 auto"
      height="calc(100% - 228px)"
      alignItems="center"
    >
      <Flex alignItems="flex-start" justifyContent="center">
        <Box width={'70%'}>
          <QuizProgress questionNumber={questionNumber} />
          <Flex alignItems={'flex-end'} marginBottom="4rem">
            <QuizCard
              quizQuestion={quiz[questionNumber]}
              setQuestionNumber={setQuestionNumber}
              questionNumber={questionNumber}
              setCounter={setCounter}
              time={time}
              value={value}
              setValue={setValue}
            />
          </Flex>
        </Box>
        <Box marginLeft={'15%'}>
          <Text
            fontWeight={'semi-bold'}
            fontFamily="Montserrat"
            fontSize="20px"
            letterSpacing="2px"
            textDecoration="none"
            textAlign={'center'}
            marginBottom={'2rem'}
          >
            Time remaining
          </Text>
          <Flex
            borderRadius="50%"
            background={'#3182CE'}
            height="212px"
            width="212px"
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection="column"
            marginBottom={'2rem'}
          >
            <Text
              fontWeight={'bold'}
              fontFamily="Montserrat"
              fontSize="32px"
              letterSpacing="2px"
              textDecoration="none"
              textAlign={'center'}
              color="white"
            >
              {counter}
            </Text>
            <Text
              fontWeight={'bold'}
              fontFamily="Montserrat"
              fontSize="32px"
              letterSpacing="2px"
              textDecoration="none"
              textAlign={'center'}
              color="white"
            >
              sec{counter === 0 ? '' : 's'}
            </Text>
          </Flex>

          <Button
            marginBottom="64px"
            borderRadius="20px"
            height="45px"
            width="133px"
            marginLeft="32px"
            color="#fff"
            background={'#3182CE'}
            fontWeight={700}
            fontSize="24px"
          >
            SEND
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
