import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { FaBeer, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignUpPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const toggleVisible = e => {
    e.preventDefault();
    setPasswordVisible(prevState => !prevState);
  };
  return (
    <Flex height={'max-content'} width='70%' background="#fff" borderRadius="80px" justifyContent={'center'}   margin="0 auto">
      <Flex py="4rem" flexDirection={'column'} textAlign='center' width={'400px'}>
        <Text
          fontFamily="Montserrat"
          fontSize="36px"
          fontWeight="600"
          lineHeight="44px"
          letterSpacing="0em"
          textAlign="center"
          paddingBottom={'24px'}
        >
          Create your account
        </Text>

        <Text
          fontFamily="Montserrat"
          fontSize="26px"
          fontWeight="400"
          lineHeight="32px"
          letterSpacing="0em"
          textAlign="center"
        >
          Sign up as a language expert and start sharing your knowledge today!
        </Text>
        <Box>
          <Input
            type="text"
            placeholder="Full names"
            pr="4.5rem"
            height="60px"
            borderRadius={'20px'}
            background="#fff"
            border="2px solid red"
            paddingLeft={'2rem'}
            marginTop="2rem"
            _placeholder={{ opacity: 1, color: '#000000' }}
          />

          <Input
            type="email"
            placeholder="Enter email"
            pr="4.5rem"
            height="60px"
            background="#fff"
            borderRadius={'20px'}
            border="2px solid #3AA5F3"
            paddingLeft={'2rem'}
            marginY="2rem"
            _placeholder={{ opacity: 1, color: '#000000' }}
          />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter password"
              height="60px"
              borderRadius={'20px'}
              background="#fff"
              border="2px solid #3AA5F3"
              paddingLeft={'2rem'}
              _placeholder={{ opacity: 1, color: '#000000' }}
            />
            <InputRightElement width="4.5rem">
              <Button as="span" h="1.75rem" size="sm" onClick={toggleVisible} margin='2 rem auto'>
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            marginBottom="32px"
            borderRadius="20px"
            height="60px"
            width="240px"
            color="#fff"
            background={'#3182CE'}
            fontWeight={700}
            fontSize="24px"
            marginTop={'3rem'}
          >
            SIGN UP
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
