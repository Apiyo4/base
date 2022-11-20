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
            background={'ffffff'}
            padding="18px 36px"
            width="37.5rem"
            height="126px"
            borderRadius="15px"
            placeholder="Type a question..."
          />
          <Button marginLeft="32px" colorScheme="blue">
            Button
          </Button>
        </Flex>
        <QuestionCard />
      </Box>
    </Flex>
  );
}
