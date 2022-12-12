import { Box, Grid, GridItem , Text} from '@chakra-ui/react';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function GuruTools() {
  return (
    <Box>
      <Grid
        templateAreas={`
                  "nav main"
                  `}
        // gridTemplateRows={'1fr 30px'}
        gridTemplateColumns={'240px 1fr'}
        minHeight='calc(100vh - 200px)'
        gap="24"
        color="blackAlpha.700"
        fontWeight="bold"
      >

        <GridItem p="4rem 1rem" bg="#fff" area={'nav'} borderRadius='4px'>
          <Box textAlign={'left'}>
          <Text
            fontWeight=" bold"
            margin="0 10px"
            color="#7C7C7C"
            fontSize="16px"
            letterSpacing="2px"
            textDecoration="none"
            pb='1rem'
          ><NavLink to='answer' className={" "}>Answer Questions</NavLink> </Text>
            <Text
            fontWeight=" bold"
            margin="0 10px"
            color="#7C7C7C"
            fontSize="16px"
            letterSpacing="2px"
            textDecoration="none"
            py='1rem'
          ><NavLink to='set' className={" "}>Set Test</NavLink></Text>
        </Box>
        </GridItem>
        <GridItem p="4rem" bg="#fff" area={'main'} borderRadius='20px'>
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
}
