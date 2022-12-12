import { Box, Text, Flex, Spinner } from '@chakra-ui/react';
import React from 'react';
import axios from 'axios';
export default function QuestionCard() {
  const [questions, setQuestions] = React.useState([])
  const base_url = 'https://travellingo.onrender.com/api'
  // const base_url = process.env.REACT_APP_BASE_URL
  React.useEffect(() => {
    axios
      .get(`${base_url}/questions/answered`)
      .then(res => {
        setQuestions(res.data.sort((a,b)=>  new Date(b.updatedAt) -  new Date(a.updatedAt) ));
      })
      .catch(error => console.log(error));
  }, []);
  if (!questions) {
    return (
      <Box width="max-content" margin="0 auto" height="calc(100% - 228px)">
        {' '}
        <Spinner color="red.500" />{' '}
      </Box>
    );
  }
  
  return (
    <Box>
      {questions.map((item, key) => (
        <Flex
          key={key}
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
