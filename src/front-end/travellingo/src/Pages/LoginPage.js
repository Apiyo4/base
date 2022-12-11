import { Box, Text, Flex, Input, Button, InputRightElement, InputGroup } from "@chakra-ui/react";
import React, {useState, useRef} from "react";
import { useNavigate, Link } from "react-router-dom";
import  axios from 'axios';

import {  FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage(){
    
      const [passwordVisible, setPasswordVisible] = useState(false);
      const base_url = 'https://travellingo.onrender.com/api'
      const emailRef = useRef();
      const passwordRef = useRef();
      const navigate = useNavigate();
      const toggleVisible = e => {
        e.preventDefault();
        setPasswordVisible(prevState => !prevState);
      };
      const submit = () => {
        axios.post(`${base_url}/users/login`, {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
          .then(res => {
            debugger;
            if(res.data.token){
              localStorage.setItem('token', res.data.token);
            }
            localStorage.setItem('loggedIn', 'yes');
            navigate('/')
          })
          .catch(error => {
            alert(error.message);
          });
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
              Travellingo
            </Text>
            <Box>
                  
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
                ref={emailRef}
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
                  ref={passwordRef}
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
                onClick={submit}
              >
                SIGN UP
              </Button>
              <Text>Already have an account? <Link to='/signup'>Signup</Link></Text>
            </Box>
          </Flex>
        </Flex>

    )
}