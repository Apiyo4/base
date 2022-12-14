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
import React, { useState, useEffect, useCallback } from 'react';
import GameCard from '../Components/GameCard';
import GameFooter from '../Components/GameFooter';
import GameHeader from '../Components/GameHeader';
import sadImage from '../images/sad-emoji-character-free-vector.jpg';
import happyImage from '../images/happy-emoji-character.jpg';
import { gameArrayList, ansList, gameObjList } from '../Utils/utils';
import JSConfetti from 'js-confetti';

export default function GamePage() {
  const [wordsFound, setWordsFound] = useState(0);
  const [word, setWord] = useState('');
  const [wordList, setWordList] = useState([]);
  const [imageUrl, setImageUrl] = useState(sadImage);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gameLevel, setGameLevel] = useState(0);
  
  const isThirdLevel = ()=>{
    if(gameLevel === 2){
      return true;
    }
    return false;
  }

  useEffect(() => {
    window.addEventListener('load', ()=>{
      if(localStorage.getItem('gameLevel')){
        setGameLevel(parseInt(localStorage.getItem('gameLevel')))
      }
    });
    
  }, []);

  useEffect(()=>{
    for(let i = 0; i < gameArrayList[gameLevel].length; i++){
      const element = document.querySelector(
        `.letter${0}`
      );
      element.style.color = '#000000'
    
    }
  },[gameLevel])
  useEffect(() => {
    if (wordsFound === 3) {
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
            {gameArrayList[gameLevel].map((ar, index) => (
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
        gameObj={gameObjList[gameLevel]}
        ans={ansList[gameLevel]}
        gameLevel= {gameLevel}
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
              paddingTop="2rem"
            >
              You Won!!!!!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Flex justifyLoginContent={'space-around'}>
              <Button
                colorScheme="blue"
                mr={3}
                disabled={ isThirdLevel() }
                onClick={() => {
                   localStorage.setItem('gameLevel', (gameLevel + 1).toString())
                   
                  setWordsFound(0);
                  setGameLevel(gameLevel=>{
                    if(gameLevel < 2){
                      return gameLevel + 1;
                    }
                    else{
                      return gameLevel;
                    }
                  })
                  onClose();
                  window.location.reload()
                }
              }
                
              >
                Next Level
              </Button>
              <Button
                colorScheme="green"
                onClick={() => {
                  
                  setGameLevel(gameLevel => gameLevel)
                  onClose();
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
