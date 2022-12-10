import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';
import './App.css'

import { Box } from '@chakra-ui/react';
import AppRoutes from './Routes/AppRoute';

function App() {
  return (
    <ChakraProvider>
      <Box height='100vh' background={'#EBF2FA'}>
        <Header />
        <Box maxWidth="1200px" margin='4rem auto' height='calc(100% - 112px)'>
          <AppRoutes />
        </Box>
      </Box>
      
    </ChakraProvider>
  );
}

export default App;
