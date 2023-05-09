import React from 'react';
import { Box, Flex, Image,Text} from '@chakra-ui/react';
import { IconButton,Icon } from '@chakra-ui/react'

import { FaSave, FaHeart } from 'react-icons/fa';


const Panel = () => {
  return (
    <Box position={"fixed"} top={"20"} right={"0.5"} width={"15%"}  height={"500px"}  >
     <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}  height={"100%"}>
       

        <Box  borderRadius="full"  width={"60px"} height={"60px"} overflow={"hidden"} marginTop={"20px"}>
          <Image src='https://mir-s3-cdn-cf.behance.net/user/50/18e2fe943188647.63cead83ab3b5.png'></Image> 
         
        </Box>
        <Text fontSize={"15px"}>Follow</Text>
        <Box  borderRadius="full"  width={"60px"} height={"60px"} overflow={"hidden"}  marginTop={"20px"}>
          <Image src='https://a5.behance.net/c2dbbdefb463a33174b6fd60ed3d8207a98dc2f4/img/project/tools/1x/photoshop.png'></Image> 
         
        </Box>
        <Text>Tools</Text> 
        <Box  borderRadius="full"  width={"60px"} height={"60px"} overflow={"hidden"}  marginTop={"20px"}>
        <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
    <IconButton
      aria-label="Toggle menu"
      icon={<Icon as={FaSave} />}
    />
  </Flex>
        </Box>
        <Text>Save</Text>
        <Box  borderRadius="full"  width={"60px"} height={"60px"} overflow={"hidden"}  marginTop={"20px"} backgroundColor={"red.700"}>
        <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
    <IconButton
    backgroundColor={"red.700"}
      // aria-label="Toggle menu"
      icon={<Icon as={FaHeart} />}
    />
  </Flex>
          
        </Box>
        <Text>Appreciate</Text> 

      


     </Flex>
    </Box>
  );
};

export default Panel;