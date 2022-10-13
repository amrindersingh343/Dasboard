import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../UserSlice";
import { Heading, Button, Box } from '@chakra-ui/react'

function Logout() {
  const dispatch = useDispatch();

  function handleLogOut(e) {
    e.preventDefault();
    console.log("hello")
    dispatch(logout())
  }
  return (
    <Box bg='white' w='20%' p={4} mt={100} ml="40%" >

      <Heading as='h1' size='sm' noOfLines={1} color="gray.500">Welcome </Heading>

      <Button colorScheme='teal' size='md' type="submit" onClick={e => { handleLogOut(e) }}>
        LogOut
      </Button>
    </Box>

  );
}

export default Logout;