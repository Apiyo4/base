import React from 'react';
import { Box, Flex, Textarea, Button } from '@chakra-ui/react';
import QuestionCard from '../Components/QuestionCard';
import axios from 'axios';

export default function HomePage() {
  const [value, setValue] = React.useState('');
  const base_url = process.env.REACT_APP_BASE_URL

  const handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  const submitHandler = val =>{
    axios.post(`${base_url}/questions`, {question: value})
    setValue('')
  }
  return (
    <Flex justifyContent="center">
      <Box>
        <Flex alignItems={'flex-end'} marginBottom="4rem">
          <Textarea
            value={value}
            onChange={handleInputChange}
            fontSize="24px"
            background={'white'}
            padding="18px 36px"
            width="40rem"
            height="126px"
            borderRadius="15px"
            placeholder="Type a question..."
            color={'#7c7c7c'}
            _placeholder={{ color: '#7c7c7c' }}
          />
          <Button
            borderRadius="20px"
            height="45px"
            width="120px"
            marginLeft="32px"
            color="white"
            background={'#3182CE'}
            fontWeight={700}
            fontSize="24px"
            onClick={()=>submitHandler(value)}
          >
            SEND
          </Button>
        </Flex>
        <QuestionCard />
      </Box>
    </Flex>
  );
}
