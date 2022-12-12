import {
  Button,
  Flex,
  Box,
  Text,
  Modal,
  ModalBody,
  useDisclosure,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Spinner,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { QuizCard } from '../Components/QuizCard';
import QuizProgress from '../Components/QuizProgress';
// import { quiz } from '../Utils/utils';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
export default function QuizPage() {
  const time = 15;
  const [counter, setCounter] = React.useState(time);
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [value, setValue] = React.useState(null);
  const [questions, setQuestions] = useState([]);
  const [indA, setIndA] = useState(0);
  const [indB, setIndB] = useState(0);
  const [indC, setIndC] = useState(0);
  const [level, setLevel] = useState('C');
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const base_url = 'https://travellingo.onrender.com/api';
  // const base_url = process.env.REACT_APP_BASE_URL;
  React.useEffect(() => {
    axios.get(`${base_url}/tests`).then(res => {
      setQuestions(res.data);
    });
  }, []);
  React.useEffect(() => {
    if (value) {
      markAns(value, level);

      if (questionNumber < 6) {
        if (questionNumber >= 5) {
          setQuestionNumber(questionNumber - 1);
          document.querySelector('#closeQuiz').click();
        } else {
          setQuestionNumber(questionNumber + 1);
        }
      }

      setCounter(time);
      setValue('');
    }
  }, [value, questionNumber]);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter, questionNumber]);

  React.useEffect(() => {
    if (counter === 0 && questionNumber < 6) {
      setQuestionNumber(questionNumber + 1);
      setValue('a');
      setCounter(counter + time);
    }
  }, [counter, questionNumber, value]);

  if (!questions) {
    return (
      <Box width="max-content" margin="0 auto" height="calc(100% - 228px)">
        {' '}
        <Spinner color="red.500" />{' '}
      </Box>
    );
  }
  const CL = questions.filter(test => test.difficulty === 3);
  const BL = questions.filter(test => test.difficulty === 2);
  const AL = questions.filter(test => test.difficulty === 1);
  const getQuestion = level => {
    let arr = level.concat('L');
    if (arr === 'CL') {
      return CL[indC];
    } else if (arr === 'BL') {
      return BL[indB];
    } else {
      return AL[indB];
    }
  };
  const markAns = (value, level) => {
    if (level === 'A') {
      setIndA(ind => ind + 1);
    } else if (level === 'B') {
      setIndB(ind => ind + 1);
    } else {
      setIndC(ind => ind + 1);
    }
    const ans = getQuestion(level).answer;

    if (value === ans) {
      setCorrectAnsCount(count => count + 1);
      if (level === 'A') {
        setLevel('B');
      } else {
        setLevel('C');
      }
    } else {
      if (level === 'C') {
        setLevel('B');
      } else {
        setLevel('A');
      }
    }
  };
  
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
              quizQuestion={getQuestion(level)}
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
            id="closeQuiz"
            marginBottom="64px"
            borderRadius="20px"
            height="45px"
            width="133px"
            marginLeft="32px"
            color="#fff"
            background={'#3182CE'}
            fontWeight={700}
            fontSize="24px"
            _hover={{ background: '#3182CE' }}
            _active={{ background: '#3182CE' }}
            onClick={() => {
              if (location?.state) {
                const updateGrade = {
                  ...location.state.user,
                  grade: Math.floor((correctAnsCount * 100) / 5),
                };
                axios
                  .put(
                    `${base_url}/users/${location.state.user._id}`,
                    updateGrade
                  )
                  .then(res => {
                    if (res.data.token) {
                      sessionStorage.setItem('token', res.data.token);
                      window.location.reload();
                    }
                  });
                navigate('/');
              } else {
                onOpen();
              }
            }}
          >
            SEND
          </Button>
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                fontFamily="Montserrat"
                fontSize="20px"
                letterSpacing="2px"
                textDecoration="none"
                textAlign={'center'}
                marginTop={'2rem'}
              >
                {correctAnsCount === 0
                  ? `You need to do extra practice`
                  : `Congratulations`}
              </ModalHeader>
              <ModalBody pb={6}>
                <Text
                  fontWeight={'semi-bold'}
                  fontFamily="Montserrat"
                  fontSize="20px"
                  letterSpacing="2px"
                  textDecoration="none"
                  textAlign={'center'}
                >
                  You got {Math.floor((correctAnsCount * 100) / 6)}{' '}
                </Text>
              </ModalBody>

              <ModalFooter>
                <Flex justifyContent={'space-around'}>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => {
                      onClose();
                      navigate('/');
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    colorScheme="green"
                    onClick={() => {
                      onClose();
                      setQuestionNumber(0);
                      setCorrectAnsCount(0);
                      navigate('/content');
                    }}
                  >
                    Content
                  </Button>
                </Flex>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </Flex>
  );
}
