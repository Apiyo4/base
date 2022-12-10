import { Flex } from '@chakra-ui/react';
import React from 'react';

export default function GameCard({ar}){
    console.log('ar', ar)
    return(
        <Flex height='66px' width='68px' border='2px solid black ' color='#000000' justifyContent={'center'} fontSize={'2.5rem'}>{ar}</Flex>
    )
}