import { Flex, Input, Button } from '@chakra-ui/react';
import React from 'react';

export default function GameFooter({
  word,
  setWord,
  wordsFound,
  setWordsFound,
  setImageUrl,
  imageUrl,
}) {
  return (
    <Flex width="681px" margin={'2rem auto'} justifyContent={'center'}>
      <Input
        type="text"
        pr="4.5rem"
        height="60px"
        borderRadius={'20px'}
        border="2px solid #3AA5F3"
        paddingLeft={'2rem'}
        placeholder="Enter word"
        width="60%"
        background={'#fff'}
      />
      <Button
        onClick={() => {
          if (wordsFound > 4) {
            setImageUrl(imageUrl);
          }
          setWordsFound(wrd => wrd + 1);
        }}
        borderRadius="20px"
        height="60px"
        width="240px"
        marginLeft="32px"
        color="white"
        background={'#3182CE'}
        fontWeight={700}
        fontSize="24px"
        _hover={{ background: '#3182CE' }}
        _active={{ background: '#3182CE' }}
      >
        CHECK WORD
      </Button>
    </Flex>
  );
}
