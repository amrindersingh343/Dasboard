import React, { useRef, useState } from "react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
 Box,
 Heading,
 Stack,
 VStack,
 HStack,
 Button,
 InputLeftAddon,
 InputRightElement,
 InputGroup,
 Input,Text,
  Flex,
  FormControl,
  FormLabel,
  Checkbox,

  Link,
 
 useColorModeValue,
} from '@chakra-ui/react'
import {useDispatch} from "react-redux"
import Logout from "./Logout";
import { login } from "./UserSlice";
function Login(){
  const [user,setUser]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    password:''
    
      });
  const [showLogin,setShowLogin]=useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [firstNameValidate,setFirstNameValidate]=useState(true);
  const [firstNameTouchedValidate,setfirstNameTouched]=useState(false);
  const firstNameIsValid=user.firstName.trim() !=="";
  const firstNameIsInValid=!firstNameIsValid && firstNameTouchedValidate
  const bg1=useColorModeValue('gray.50', 'gray.800')
  const bg2=useColorModeValue('white', 'gray.700')
  const bg3=useColorModeValue('gray.50', 'gray.800')
  const bg4=useColorModeValue('white', 'gray.700')
  const userLogin=useRef();
  const userPassword=useRef();
  
  const dispatch =useDispatch();
  function handleEvent(e){
    setUser(e.target.value);
      }
  function handleLogin(e){
    e.preventDefault();
    const email=userLogin.current.value;
    const password=userPassword.current.value;
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjqKsyY64-6RBpYUeZSBbd9GbQnwuKF0o",{
  method:"POST",
  body:JSON.stringify({
    "email":email,
    "password":password,
    "returnSecureToken":true
  }),headers:{
    "Content-Type":"application/json"
  }
}).then(res=>res.json())
.then(data=>{
  if(data.registered){
    const currenDate = new Date().toLocaleDateString();
    console.log("currenDate",currenDate)
        localStorage.setItem("user",JSON.stringify(data));
        localStorage.setItem("Usertime",currenDate)
        dispatch(login({
      user:true}))
  }
})
// .then((res)=>{
//   console.log("login response",res)
//   if(res.ok){
//     console.log("login response",res)
//     dispatch(login({
//       user:true}))
//   }
//   else{
//     return res.json().then((data)=>{
//       let errormessage="Authnication failed"
//       if(data && data.error && data.error.message){
//         errormessage=data.error.message;
//         alert(errormessage);
//       }
//     })
//   }
// }

      

  }
  function handleData(event){
    const name=event.target.name;
    const value=event.target.value;
    setUser({...user,[name]:value})
    
  }
  async function datapush(event){
    event.preventDefault();
    const{firstName,lastName,email,phone,password}=user
    await fetch("https://logindemo-6f845-default-rtdb.firebaseio.com/userdata.json",
    {
method:"POST",
headers:{
"Content-Type":"application/json",
},
  body:JSON.stringify({
    firstName,
    lastName,
    email,
    phone,password}),
}

)
 fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjqKsyY64-6RBpYUeZSBbd9GbQnwuKF0o",{
  method:"POST",
  body:JSON.stringify({
    email:email,
    password:password,
    returnSecureToken:true
  }),headers:{
    "Content-Type":"application/json"
  }
}).then((res)=>{
  if(res.ok){
setShowLogin(true)
  }
  else{
    return res.json().then((data)=>{
      let errormessage="Authnication failed"
      if(data && data.error && data.error.message){
        errormessage=data.error.message;
        alert(errormessage);
      }
    })
  }
})
  }

  function signUpClick(){
     setShowLogin(false);
  }
  function validation(event){
    const name=event.target.name;
    const value=event.target.value;
    setfirstNameTouched(true);
  }
  return(
    <>
{/* {showLogin ?    
 <Box bg='white' w='20%' p={4} mt={100} ml="40%" borderRadius="20%">
      <form onSubmit={(e)=>{
        handleLogin(e)
      }}>
            <Stack>
    <VStack>
      
      <Heading as='h1' size='sm' noOfLines={1} color="gray.500">LOGIN </Heading>
        <VStack>

        <Text  color="gray.500">
         User
        </Text>
        <Input placeholder='Basic usage' size='sm' color="gray.500"
         borderColor='gray.500' ref={userLogin}/>
        </VStack>
        <VStack>
        <Text  color="gray.500">
         Password
        </Text>
        <Input placeholder='Basic usage' 
         type= 'password'
        size='sm' color="gray.500" borderColor='gray.500'
        ref={userPassword}/>
        </VStack>
        <VStack>
        <Button colorScheme='teal' size='md' type="submit">
         Login
        </Button>
        <Button colorScheme='teal' size='md' type="button" onClick={signUpClick}>
         create account 
        </Button>
        </VStack>
      </VStack>
    </Stack>
    </form>
</Box>:
<Box bg='white' w='50%' p={4} mt={100} ml="30%" >
<form method="post">
<Stack>
  <VStack>
  <Heading as='h1' size='sm' noOfLines={1} color="gray.500">
  SignUp
</Heading>
<VStack>
<HStack>
<InputGroup>
    <InputLeftAddon children='First Name'  color="green.500" />
    <Input type='text' placeholder='First Name'
    value={user.firstName}
    name="firstName"
    onChange={handleData}
    color="gray.500" borderColor="black"/>
  </InputGroup>
  <InputGroup>
    <InputLeftAddon children='First Name'  color="green.500"/>
    <Input type='text' placeholder='Last Name'
    value={user.lastName}
    name="lastName"
     color="gray.500"  
     onChange={handleData}
     borderColor="black"/>
  </InputGroup>
</HStack>
<HStack>
<InputGroup>
    <InputLeftAddon children='Email'  color="green.500" />
    <Input type='text' ml="10"
    value={user.email}
    onChange={handleData}
    name="email"
    placeholder='Email' color="gray.500" borderColor="black"/>
  </InputGroup>
  <InputGroup>
    <InputLeftAddon children='Phone'  color="green.500"/>
    <Input type='text'
    value={user.phone}
    onChange={handleData}
    name="phone"
    ml="8" placeholder='Phone' color="gray.500"  borderColor="black"/>
  </InputGroup>
</HStack>
<HStack>
<InputGroup>
    <InputLeftAddon children='Password'  color="green.500" />
    <Input type='text' ml="3"
    value={user.password} 
    onChange={handleData}
    name="password"
    placeholder='Password' color="gray.500" borderColor="black"/>
  </InputGroup>
  <InputGroup>
    <InputLeftAddon children='Confirm Password'  color="green.500"/>
    <Input type='text'  placeholder='Confirm Password' color="gray.500"  borderColor="black"/>
  </InputGroup>
</HStack>
<Button colorScheme='teal' size='md' type="submit" onClick={datapush}>
    SignUp
  </Button>
</VStack>

  </VStack>
</Stack>
</form>
    </Box>} */}

    {/* //template */}
    {showLogin ? 
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={bg1}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={bg2}
          boxShadow={'lg'}
          p={8}>
             <form onSubmit={(e)=>{
        handleLogin(e)
      }}>
          <Stack spacing={4}>
            
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" ref={userLogin}  />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" ref={userPassword} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                type="submit"
                >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Create Account? <Link color={'blue.400'} onClick={signUpClick}>signUp</Link>
              </Text>
            </Stack>
          </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>:<Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={bg3}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={bg4}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" 
                  value={user.firstName}
                  name="firstName"
                  onChange={handleData}
                  onBlur={validation}/>
                  {firstNameIsInValid &&<p>Invalid</p>} 
                </FormControl>
                
              </Box>
              
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text"
                  value={user.lastName}
                  name="lastName"
                  
                   onChange={handleData} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="phone">
              <FormLabel>Phone</FormLabel>
              <Input type="number" 
              value={user.phone}
              onChange={handleData}
              name="phone" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"
               value={user.email}
               onChange={handleData}
               name="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} 
                 value={user.password} 
    onChange={handleData}
    name="password"/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
              type="submit"
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={datapush}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex> }
   
 

    </>
  );

}

export default Login;