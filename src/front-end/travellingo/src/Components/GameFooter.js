import { Flex, Input, Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { ans, colors, gameObj } from '../Utils/utils';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default function GameFooter({
  word,
  setWord,
  wordsFound,
  setWordsFound,
  setImageUrl,
  imageUrl,
  setWordList,
  wordList
}) {
  const handleInputChange = e => {
    let inputValue = e.target.value;
    setWord(inputValue);
  };
  useEffect(() => {}, [wordsFound]);
  console.log(wordsFound);
  return (
    <Flex width="681px" margin={'2rem auto'} justifyContent={'center'}>
      <Input
        value={word}
        onChange={handleInputChange}
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
          if (ans.includes(word.trim().toLowerCase()) && !wordList.includes(word.trim().toLowerCase())) {
            const no = getRandomInt(17);
            for (let i = 0; i < gameObj[word.trim().toLowerCase()].length; i++) {
              const element = document.querySelector(
                `.letter${gameObj[word.trim().toLowerCase()][i]}`
              );
              setWordList([...wordList, word.trim().toLowerCase()])
              element.style.color = colors[no];
            }
            if (wordsFound > 3) {
              setImageUrl(imageUrl);
            }
            setWordsFound(wrd => wrd + 1);
          }
          setWord('')
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
