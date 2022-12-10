import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
  const navItems = [
    { title: 'home', path: '/' },
    { title: 'quiz', path: '/quiz' },
    { title: 'content', path: '/content' },
    { title: 'game', path: '/game' },
  ];
  return (
    <Flex
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      background="#fff"
      padding="10px"
      margin={0}
    >
      <Flex justifyContent={'space-around'}>
        <Flex id="nav" justifyContent="space-around" width="50vw">
          {navItems.map((navItem, key) => (
            <Text
              fontWeight=" bold"
              margin="0 10px"
              color="#7C7C7C"
              fontSize="20px"
              letterSpacing="2px"
              textDecoration="none"
            >
              <NavLink className={''} to={navItem.path}>
                {navItem.title.toUpperCase()}
              </NavLink>
            </Text>
          ))}
        </Flex>
      </Flex>
      <Text
        fontWeight=" bold"
        margin="0 10px"
        color="#7C7C7C"
        fontSize="20px"
        letterSpacing="2px"
        textDecoration="none"
      >
        <NavLink className={''} to="/signup">
          SIGNUP
        </NavLink>
      </Text>
    </Flex>
  );
}
