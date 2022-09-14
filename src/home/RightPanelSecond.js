import { VStack,
  InputGroup,
  InputLeftElement,
  Input,
   Box, 
   Heading,
   Text,
    HStack,
    Image ,
    Grid,GridItem
  } from "@chakra-ui/react";
import {Search2Icon} from '@chakra-ui/icons'
import React from "react";
function RightPanelSecond(){
  const itemOnTopPanel=[{'title':"Entertainment",'description':"Jaiveer Shergill, 39, was among the youngest spokespersons of the Congress","img":"pic.png"
},
{'title':"sport",'description':"Jaiveer Shergill, 39, was among the youngest spokespersons of the Congress","img":"pic.png"
}
,{'title':"Politics",'description':`Jaiveer Shergill, 39, was among the youngest spokespersons of the Congress`,"img":"pic.png"
},
{'title':"Entertainment",'description':"Jaiveer Shergill, 39, was among the youngest spokespersons of the Congress","img":"pic.png"
}] ;
const itemDiv=itemOnTopPanel.map((e,index)=>{
  return(    
     <VStack ml="1%" alignItems="left" 
     _hover={{
      background: "gray.100",
     }}  >
      <Box key={index}>
      <Heading align="left" as='h1'color="gray" size='sm' noOfLines={1}>
        {e.title}
      </Heading>
      <Box >
        <VStack>
          <HStack>
        <Text  fontSize='13px'  color='tomato' mt="0">
      {e.description}
        </Text>
        <Image src={e.img} fallbackSrc='https://via.placeholder.com/150'  width="100px" height="100px"/>
      </HStack>
        </VStack>
      
      </Box>
      </Box>
     </VStack>
    
  );
}) 
return(
      <VStack mt="5%" width="80%" ml="5%">
      <InputGroup ml="40%">
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon color='gray.300' />}
    />
    <Input variant='outline' type='text' placeholder='Search'
    _placeholder={{color:'gray'}}
    color="gray.400" borderColor="gray" width="60" />
  </InputGroup>
  <Box bg="gray.50"  borderRadius="5%">
  <VStack float="left" ml="1%">
    <Heading>
      News
    </Heading>
{itemDiv}
    </VStack>
  </Box>
    </VStack>
);
}
 export default RightPanelSecond;