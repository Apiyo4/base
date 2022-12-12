import { Progress, Box } from "@chakra-ui/react";
import React from "react";

export default function QuizProgress({questionNumber}){
    return(
        <Box marginBottom={'10%'}>
            <Progress color={'#3182CE'} value={(questionNumber ) * 16.67} background='#fff' height='40px' borderRadius='20px' width= '600px'></Progress>
        </Box>
        
    )
}