import {
  Box,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  Button,
  ModalContent,
  ModalBody,
  Text,
  ModalFooter,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import GameCard from '../Components/GameCard';
import GameFooter from '../Components/GameFooter';
import GameHeader from '../Components/GameHeader';
import sadImage from '../images/sad-emoji-character-free-vector.jpg';
import happyImage from '../images/happy-emoji-character.jpg';
import { gameArray1 } from '../Utils/utils';
import JSConfetti from 'js-confetti';

export default function GamePage() {
  const [wordsFound, setWordsFound] = useState(0);
  const [word, setWord] = useState('');
  const [wordList, setWordList] = useState([]);
  const [imageUrl, setImageUrl] = useState(sadImage);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (wordsFound === 10) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
      document.querySelector('#gameButton').disabled = true;
      document.querySelector('#gameInput').disabled = true;
      setTimeout(onOpen(), 3000);
    } else {
      document.querySelector('#gameButton').disabled = false;
      document.querySelector('#gameInput').disabled = false;
    }
  });
  return (
    <Box marginTop="-20px">
      <GameHeader wordsFound={wordsFound} imageUrl={imageUrl} />
      <Flex justifyContent={'center'} margin="0 auto" alignItems={'flex-end'}>
        <Box height="532px" width="681px" background={'white'}>
          <Flex flexWrap={'wrap'}>
            {gameArray1.map((ar, index) => (
              <Box key={index}>
                <GameCard index={index} ar={ar} />
              </Box>
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
        setWordList={setWordList}
        wordList={wordList}
      />
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody pb={6}>
            <Text
              fontWeight={'semi-bold'}
              fontFamily="Montserrat"
              fontSize="20px"
              letterSpacing="2px"
              textDecoration="none"
              textAlign={'center'}
              paddingTop='2rem'
            >
              You Won!!!!!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Flex justifyContent={'space-around'}>
              <Button
                colorScheme="blue"
                ml={3}
                onClick={() => {
                  onClose();
                  window.location.reload();
                }}
              >
                Next Level
              </Button>
              <Button
                colorScheme="green"
                onClick={() => {
                  onClose();
                  window.location.reload();
                }}
              >
                Play Again
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
