import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import GameCard from '../Components/GameCard';
import GameFooter from '../Components/GameFooter';
import GameHeader from '../Components/GameHeader';
import sadImage from '../images/sad-emoji-character-free-vector.jpg';
import happyImage from '../images/happy-emoji-character.jpg';
import { gameArray1 } from '../Utils/utils';

export default function GamePage() {
  const [wordsFound, setWordsFound] = useState(0);
  const [word, setWord] = useState('');
  const [wordList, setWordList] = useState([])
  const [imageUrl, setImageUrl] = useState(sadImage);
  return (
    <Box marginTop="-20px">
      <GameHeader wordsFound={wordsFound} imageUrl={imageUrl} />
      <Flex justifyContent={'center'} margin="0 auto" alignItems={'flex-end'}>
        <Box height="532px" width="681px" background={'white'}>
          <Flex flexWrap={'wrap'}>
            {gameArray1.map((ar, key) => (
              <GameCard index={key} ar={ar} />
            ))}
          </Flex>
        </Box>
      </Flex>
      <GameFooter
        word={word}
        setWord={setWord}
        wordsFound={wordsFound}
        setWordsFound={setWordsFound}
        setImageUrl={setImageUrl}
        imageUrl={happyImage}
        setWordList= {setWordList}
        wordList = {wordList}
      />
    </Box>
  );
}
