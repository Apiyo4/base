import { Box, Text, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Header() {
  const navItems = [
    { title: 'home', path: '/' },
    { title: 'quiz', path: '/quiz' },
    { title: 'content', path: '/content' },
    { title: 'game', path: '/game' },
  ];
  const navigate = useNavigate();
  const logout = () => {
    if (sessionStorage.hasOwnProperty('loggedIn')) {
      sessionStorage.clear();
      // window.location.reload();
    }
  };
  useEffect(() => {}, [sessionStorage]);

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
          {navItems.map((navItem, index) => (
            <Text
              key = {index}
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
          <Text
            fontWeight=" bold"
            margin="0 10px"
            color="#7C7C7C"
            fontSize="20px"
            letterSpacing="2px"
            textDecoration="none"
            // onClick={() => window.location.reload()}
          >
            {sessionStorage.getItem('token') && (
              <NavLink className={''} to={'guru'}>
                GURUTOOLS
              </NavLink>
            )}
          </Text>
        </Flex>
      </Flex>

      <Text
        fontWeight=" bold"
        margin="0 10px"
        color="#7C7C7C"
        fontSize="20px"
        letterSpacing="2px"
        textDecoration="none"
        onClick={logout}
      >
        {!sessionStorage.getItem('loggedIn') ? (
            <NavLink className={''} to="/signup">
            SIGNUP
          </NavLink>
        ) : (
          
          <NavLink className={''} to="/login" >LOGOUT</NavLink>
        )}
      </Text>
    </Flex>
  );
}
