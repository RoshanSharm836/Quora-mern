import { Box, Button, Image, Text } from "@chakra-ui/react";
import React ,{useEffect,useState}from "react";
import { user } from "../../Api/Url";
import { useSelector } from "react-redux";
import { Adddata, Logedinuser } from "./Allfun";

function Followers({data,setLogedinUser}) {
  return (
    <div style={{margin:'20px',}}>
          <Box p={"25px"}  display={'flex'} gap={'50px'}  boxShadow='xl' rounded='md' bg='white' border={'ActiveBorder'}>
            <Box>
              <Image
                w={"50px"}
                borderRadius={"25px"}
                src="https://picsum.photos/200"></Image>
            </Box>
            <Box width={'80%'}>
              <Text fontSize={'24px'} fontFamily={'heading'}>{data.name}</Text>
              <Text fontWeight={'bold'}>{data.followers}</Text>
              <Text fontWeight={'medium'}>{data.titles}</Text>
            </Box>
            
            <Button onClick={()=>{(setLogedinUser({Followers:1}))}}>FOLLOW</Button>
          </Box>
    </div>
  );
}

export default Followers;
