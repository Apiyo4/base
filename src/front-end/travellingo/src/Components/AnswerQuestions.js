import { Box, Text, Textarea, Button, Flex, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
export default function AnswerQuestions() {
  const [textValue, setTextValue] = React.useState({});
  const [isAnswer, setIsAnswer] = useState({});
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const base_url = 'https://travellingo.onrender.com/api';
  //   const base_url = process.env.REACT_APP_BASE_URL
  const openTextArea = id => {
    setIsAnswer(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };
  const handleInputChange = e => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    setTextValue(prevState => ({ ...prevState, [inputName]: inputValue }));
  };
  const submitHandler = (val, question) => {
    const answeredQxn = {
      ...question,
      answer: val[question._id],
    };
    debugger;
    axios()
      .put(`${base_url}/questions/${question._id}`, answeredQxn)
      .then(() => {
        setTextValue(prevState => ({}));
        setIsAnswer(prevState => ({ ...prevState, [question._id]: false }));
        navigate('/');
      });
  };
  useEffect(() => {
    axios()
      .get(`${base_url}/questions`)
      .then(res => {
        setQuestions(res.data);
      })
      .catch(error => alert(error.response.data));
  }, []);
  if (!questions) {
    return (
      <Box width="max-content" margin="0 auto" height="calc(100% - 228px)">
        {' '}
        <Spinner color="red.500" />{' '}
      </Box>
    );
  }

  if (Array.isArray(questions) && questions.length === 0) {
    return (
      <>
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
        <Text
          fontWeight={700}
          fontFamily="Montserrat"
          margin="0 10px"
          fontSize="20px"
          letterSpacing="2px"
          textDecoration="none"
          textAlign={'left'}
          color="#000000"
        >
          All questions have been answered, check back later!!!
        </Text>
      </>
    );
  }
  return (
    <Box>
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
      {questions.map((question, index) => {
        return (
          <Box key={question._id}>
            <Flex
              background="#fff"
              alignItems={'baseline'}
              paddingBottom="1.5rem"
            >
              <Text
                fontWeight={700}
                fontFamily="Montserrat"
                margin="0 10px"
                fontSize="20px"
                letterSpacing="2px"
                textDecoration="none"
                textAlign={'left'}
                color="#000000"
              >
                {index + 1}. {question.question}
              </Text>
              <Button
                borderRadius="20px"
                height="20px"
                width="120px"
                color="#3182CE"
                background={'#fff'}
                fontWeight={700}
                fontSize="20px"
                onClick={() => openTextArea(question._id)}
                _hover={{ background: '#fff', textDecoration: 'underline' }}
                _active={{ background: '#ff', textDecoration: 'underline' }}
              >
                {isAnswer[question._id] ? 'Close' : 'Answer'}
              </Button>
            </Flex>

            {isAnswer[question._id] && (
              <>
                <Textarea
                  name={question._id}
                  value={textValue[question._id]}
                  onChange={handleInputChange}
                  fontSize="24px"
                  background={'white'}
                  padding="18px 36px"
                  width="40rem"
                  height="126px"
                  borderRadius="15px"
                  placeholder="Answer a question..."
                  color={'#7c7c7c'}
                  _placeholder={{ color: '#7c7c7c' }}
                  marginBottom="1rem"
                  marginLeft={'2rem'}
                />
                <Button
                  borderRadius="20px"
                  height="45px"
                  width="120px"
                  color="white"
                  background={'#3182CE'}
                  fontWeight={700}
                  fontSize="24px"
                  _hover={{ background: '#3182CE' }}
                  _active={{ background: '#3182CE' }}
                  onClick={() => submitHandler(textValue, question)}
                  mb="2rem"
                  marginLeft={'2rem'}
                >
                  SEND
                </Button>
              </>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
