import { Button, Icon, Stack, VStack,Box,Image } from "@chakra-ui/react";
import { EmailIcon ,RepeatClockIcon,CopyIcon,CalendarIcon,BellIcon} from '@chakra-ui/icons'
import React from "react";

function LeftPanel(){
  let colorchange="white";
  function handleButtonColor(){
     colorchange="gray"
     console.log("hrllo")
  } 
   return(
    <>
    <Stack mt="5%">
      <Box ml="50%">
      <Image src="Twitter-logo.svg (1).svg" fallbackSrc="" width="20px" height="20px"></Image>
      </Box>
    <VStack>

    <Button leftIcon={<EmailIcon />}  colorScheme="white"
    ml
  _hover={{
    background: "gray.100",
    color: "white.500",
  }} >
    Home
    </Button>
  
    <Button leftIcon={<RepeatClockIcon />}  colorScheme="white"
  _hover={{
    background: "gray.100",
    color: "white.500",
  }} variant='solid' >
    Explore
    </Button>
    <Button leftIcon={<BellIcon />}  colorScheme="white"
  _hover={{
    background: "gray.100",
    color: "white.500",
  }} variant='solid' >
    Notification
    </Button>
    <Button leftIcon={<EmailIcon />}  colorScheme="white"
  _hover={{
    background: "gray.100",
    color: "white.500",
  }} variant='solid' >
    Message
    </Button>
    <Button leftIcon={<CopyIcon />}  colorScheme="white"
  _hover={{
    background: "gray.100",
    color: "white.500",
  }} variant='solid' >
    Bookmark
    </Button>
    <Button leftIcon={<CalendarIcon />}  colorScheme="white"
  _hover={{
    background: "gray.100",
    color: "white.500",
  }} variant='solid' >
    List
    </Button>
    <Button leftIcon={<RepeatClockIcon />}  colorScheme="white"
  _hover={{
    background: "gray.100",
    color: "white.500",
  }} variant='solid' >
    Profile
    </Button>
    </VStack>
    </Stack>
    </>
   
  );
}
export default LeftPanel;