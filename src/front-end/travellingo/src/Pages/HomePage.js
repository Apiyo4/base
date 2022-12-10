import React from 'react';
import { Box, Flex, Textarea, Button } from '@chakra-ui/react';
import QuestionCard from '../Components/QuestionCard';

export default function HomePage() {
  return (
    <Flex justifyContent="center">
      <Box>
        <Flex alignItems={'flex-end'} marginBottom="4rem">
          <Textarea
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
          <Button borderRadius='20px' height='45px' width='120px' marginLeft="32px" color='white' background={'#3182CE'} fontWeight={700} fontSize='24px'>
            SEND
          </Button>
        </Flex>
        <QuestionCard />
      </Box>
    </Flex>
  );
}
