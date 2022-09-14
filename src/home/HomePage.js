import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,Text
 } from '@chakra-ui/react'
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
function HomePage(){
  function handle(){
    console.log("hello")
  }
  return(
    <>
    <Flex bg='white' >
      <Box bg='white'height="100%" width="20%" mt="1%"
      >
      <LeftPanel></LeftPanel>
      </Box >
      <Box   bg='white'>
        <RightPanel></RightPanel>
      </Box>
      <Box></Box>
    </Flex>
  

</>
  );
}
export default HomePage;
{/* <Grid
templateColumns='repeat(5, 1fr)'
gap={0}
mt="1%"onScroll={handle} 

>
<GridItem rowSpan={2} colSpan={1} bg='white' >
  <LeftPanel></LeftPanel>
</GridItem>
<GridItem colSpan={4} bg="white"><RightPanel/></GridItem>
{/* <GridItem colSpan={2} bg='white' ></GridItem>
<GridItem colSpan={2} bg='white' ><RightPanel/></GridItem>
<GridItem colSpan={4} bg='white' /> */}
//</Grid> */}