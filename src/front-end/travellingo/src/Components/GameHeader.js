import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

export default function GameHeader({ wordsFound, imageUrl }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      flexDirection={'column'}
      width="681px"
      margin={'0 auto'}
      justifyContent={'center'}
    >
      <Text
        fontWeight={700}
        fontFamily="Montserrat"
        margin="0 10px"
        fontSize="2rem"
        letterSpacing="2px"
        textDecoration="none"
        textAlign={'center'}
        color="#000000"
        onClick={onOpen}
      >
        Instructions
      </Text>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent background={'#fff'} color="#000000">
          <ModalHeader color="3AA5F3" textDecoration={'underline'}>
            Instructions
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              If you find a word, type it in the box and press the check word
              button.
            </Text>
            <Text paddingY={'1rem'} fontWeight={700}>
              Hints
            </Text>
            <UnorderedList>
              <ListItem>I am a popular drink</ListItem>
              <ListItem>You use me to type</ListItem>
              <ListItem>I was a popular phrase in Lion King</ListItem>
              <ListItem>I'm the opposite of north</ListItem>
              <ListItem>
                I'm a word one answer for, isn't Elon Musk the worst boss ever?
              </ListItem>
            </UnorderedList>
          </ModalBody>
          <ModalFooter>
            <Button
              background={'#fff'}
              border="2px solid #3182CE"
              _hover={{ background: '#fff' }}
              _active={{ background: '#fff' }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex justifyContent={'space-between'} alignItems="center">
        <Text
          fontWeight={700}
          fontFamily="Montserrat"
          fontSize="5rem"
          textDecoration="none"
          color="#3AA5F3"
        >
          {wordsFound}
        </Text>
        <Image src={imageUrl} height="5rem" width="5rem" />
      </Flex>
    </Flex>
  );
}
