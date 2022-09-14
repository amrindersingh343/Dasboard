import React, { useEffect, useState } from "react";
import {Box,SkeletonCircle,SkeletonText,Stack,VStack,HStack,Circle,Text, Image} from "@chakra-ui/react"
import VideoEmded from "./VideoEmded";
import InfiniteScroll from "react-infinite-scroll-component";
//import items from '../DataStore/DivItem'
import {selectAction} from '../ItemAddSlice'
import { useDispatch, useSelector } from "react-redux";
function CenterPanel(){
  const  [divItem,setDivItem]=useState([{
    type:'',
    firstText:'',
    secondText:'',
    thridText:'',
    src:''
  }])
   const dispatch=useDispatch();
   const items1=useSelector(state=>state.feeds.item);
   console.log("from store",items1)
  function handleScroll(e){
    console.log("handle handleScroll", items1.length)
    dispatch(selectAction?.addItems({}));
    // setDivItem(previous=>[...previous,...items])
  }

return(
  <>
  <InfiniteScroll
  dataLength={items1.length} //This is important field to render the next data
  next={handleScroll}
  hasMore={true}
  >
 <Box>  
  {items1 && items1.map((ele,index)=>{
    return(

      <Box key={index}>
    <Stack>  
          <Box padding='6'  boxShadow='lg' bg='white'>
          <HStack>
          <Circle size='50px' bg='gray' color='white'/>
          <Text as='b' color="black">
          {ele.firstText}
          </Text>
          <Text color="gray">{ele.secondText}</Text>
          </HStack>
          <Text color="gray" ml="10%">{ele.thridText}</Text>
          {ele.type==="video" ? <VideoEmded videoID={ele.src}/> :< Image src={ele.src}
         borderRadius="10%"
         ml="10%"
          fallback="" width="400px" height="300px" />}
          </Box>
           </Stack>
  </Box>
    );
  }) }
   </Box>
 </InfiniteScroll>


 
  </>
  
);
}
export default CenterPanel;

























































