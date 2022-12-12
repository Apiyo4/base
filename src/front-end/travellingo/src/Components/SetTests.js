import React, { useRef, useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import axios from '../axios';

export default function SetTests() {
  const base_url = 'https://travellingo.onrender.com/api';
  //   const base_url = process.env.REACT_APP_BASE_URL
  const [value, setValue] = useState(null);
  const questionRef = useRef();
  const answerRef = useRef();
  const choice1Ref = useRef();
  const choice2Ref = useRef();
  const choice3Ref = useRef();
  const choice4Ref = useRef();
  const submit = () => {
    const question = {
      choices: {
        choice1: choice1Ref.current.value,
        choice2: choice2Ref.current.value,
        choice3: choice3Ref.current.value,
        choice4: choice4Ref.current.value,
      },
      question: questionRef.current.value,
      answer: answerRef.current.value,
      difficulty: parseInt(value),
    };
    axios()
      .post(`${base_url}/tests`, question).catch(error => {
        alert(error.response.data.message)
      });
    setValue('');
    choice1Ref.current.value = '';
    choice2Ref.current.value = '';
    choice3Ref.current.value = '';
    choice4Ref.current.value = '';
    questionRef.current.value = '';
    answerRef.current.value = '';
  };
  return (
    <Flex
      height={'max-content'}
      width="70%"
      background="#fff"
      borderRadius="80px"
      justifyContent={'center'}
      margin="0 auto"
    >
      <Flex
        py="4rem"
        flexDirection={'column'}
        textAlign="center"
        width={'400px'}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="36px"
          fontWeight="600"
          lineHeight="44px"
          letterSpacing="0em"
          textAlign="center"
          paddingBottom={'24px'}
        >
          Add A Quiz
        </Text>
        <Box>
          <Input
            type="text"
            placeholder="Enter question"
            pr="4.5rem"
            height="60px"
            background="#fff"
            borderRadius={'20px'}
            border="2px solid #3AA5F3"
            paddingLeft={'2rem'}
            marginY="2rem"
            _placeholder={{ opacity: 1, color: '#000000' }}
            ref={questionRef}
          />
          <Input
            type="text"
            placeholder="Enter answer"
            pr="4.5rem"
            height="60px"
            background="#fff"
            borderRadius={'20px'}
            border="2px solid #3AA5F3"
            paddingLeft={'2rem'}
            marginY="2rem"
            _placeholder={{ opacity: 1, color: '#000000' }}
            ref={answerRef}
          />
          <RadioGroup onChange={setValue} value={value} ml="1rem">
            <Text
              textAlign={'left'}
              fontWeight={500}
              paddingBottom="0.5rem"
              color="#000000"
            >
              Enter difficulty level
            </Text>
            <Stack direction="row">
              <Radio value="1">Easy</Radio>
              <Radio value="2">Medium</Radio>
              <Radio value="3">Hard</Radio>
            </Stack>
          </RadioGroup>
          <Input
            type="text"
            placeholder="Enter choice1"
            pr="4.5rem"
            height="60px"
            background="#fff"
            borderRadius={'20px'}
            border="2px solid #3AA5F3"
            paddingLeft={'2rem'}
            marginY="2rem"
            _placeholder={{ opacity: 1, color: '#000000' }}
            ref={choice1Ref}
          />
          <Input
            type="text"
            placeholder="Enter choice2"
            pr="4.5rem"
            height="60px"
            background="#fff"
            borderRadius={'20px'}
            border="2px solid #3AA5F3"
            paddingLeft={'2rem'}
            marginY="2rem"
            _placeholder={{ opacity: 1, color: '#000000' }}
            ref={choice2Ref}
          />
          <Input
            type="text"
            placeholder="Enter choice3"
            pr="4.5rem"
            height="60px"
            background="#fff"
            borderRadius={'20px'}
            border="2px solid #3AA5F3"
            paddingLeft={'2rem'}
            marginY="2rem"
            _placeholder={{ opacity: 1, color: '#000000' }}
            ref={choice3Ref}
          />
          <Input
            type="text"
            placeholder="Enter choice4"
            pr="4.5rem"
            height="60px"
            background="#fff"
            borderRadius={'20px'}
            border="2px solid #3AA5F3"
            paddingLeft={'2rem'}
            marginY="2rem"
            _placeholder={{ opacity: 1, color: '#000000' }}
            ref={choice4Ref}
          />
          <Button
            marginBottom="32px"
            borderRadius="20px"
            height="60px"
            width="240px"
            color="#fff"
            background={'#3182CE'}
            fontWeight={700}
            fontSize="24px"
            marginTop={'3rem'}
            onClick={submit}
            _hover={{ background: '#3182CE' }}
            _active={{ background: '#3182CE' }}
          >
            Add Question
          </Button>
          <Text></Text>
        </Box>
      </Flex>
    </Flex>
  );
}
