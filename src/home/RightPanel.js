import { VStack,
  InputGroup,
  InputLeftElement,
  Input,
   Box, 
   Heading,
   Text,
    HStack,
    Image ,
    Grid,GridItem, Stack, Flex
  } from "@chakra-ui/react";
import {Search2Icon} from '@chakra-ui/icons'
import React from "react";
import RightPanelSecond from "./RightPanelSecond";
import CenterPanel from "./CenterPanel";

function RightPanel(){


  return(
    <>
    <Flex marginTop="1%" >
      <Box border="1px solid  gray"   bg='white'>
      <CenterPanel></CenterPanel>
      </Box>
      <Box bg="white"  alignItems="center" >
      <RightPanelSecond></RightPanelSecond>
      </Box>
    </Flex>
    <Grid
    templateColumns='repeat(2, 1fr)'
    gap={2}
    mt="1%"
  >
    <GridItem border="1px solid  gray" borderTop="0"  bg='white' >
     <CenterPanel></CenterPanel>
    </GridItem>
    <GridItem  bg="white"  alignItems="center">
      <RightPanelSecond></RightPanelSecond>
    </GridItem>
   
  </Grid>
    </>
    
  

  );
}
export default RightPanel;