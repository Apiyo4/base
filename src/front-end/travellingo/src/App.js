import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import './App.css'

import { Box } from '@chakra-ui/react';
import AppRoutes from './Routes/AppRoute';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box height='100vh' background={'#EBF2FA'}>
        <Header />
        <Box maxWidth="1200px" margin='4rem auto'>
          {/* <HomePage /> */}
          <AppRoutes />
        </Box>
      </Box>
      
    </ChakraProvider>
  );
}

export default App;
