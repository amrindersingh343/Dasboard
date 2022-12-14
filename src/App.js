import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Logout from './Logout';
import {useDispatch, useSelector} from "react-redux";
import {selectuser} from "./UserSlice";
import HomePage from './home/HomePage';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import {login} from "./UserSlice"

function App() {
  const user= useSelector(selectuser)
  const dispatch=useDispatch();
function handle(){
  console.log("hello")
};
useEffect(()=>{
const userData=JSON.parse(localStorage.getItem("user"));
const tokendate=localStorage.getItem("Usertime")
const currentdate=new Date().toLocaleDateString()
if(userData){
  const tokenvalidate=currentdate>tokendate;
  if(!tokenvalidate){
    console.log(tokenvalidate)
    dispatch(login({user:true}));
  }
  else{
    localStorage.removeItem("user");
    localStorage.removeItem("Usertime");
  }

}
},[])
  return (
    <>
    
    {/* <HomePage></HomePage> */}
     {user ?<HomePage></HomePage> : <Login></Login>} 
       
       
   </>

  );
}

export default App;
