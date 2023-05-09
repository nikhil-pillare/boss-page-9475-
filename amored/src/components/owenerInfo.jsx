import { Box, Avatar, Flex, Text, Button } from "@chakra-ui/react";

function OwnerInfo() {
  return (
    <Box ml={"20px"} pt={"20px"}>
       <Text marginBottom={"10px"}>owners</Text>
      <Flex align="center" justifyContent={"left"}>
        <Avatar size="lg" src="https://mir-s3-cdn-cf.behance.net/user/50/d640f6784150681.635e94c379861.png" mr="4" />
        <Box>
          <Text fontSize="xl" fontWeight="bold">Tanmay Ratna</Text>
          <Text fontSize="md">New Delhi, India</Text>
        </Box>
        <Button ml="170px" colorScheme="blue">Follow</Button>
      </Flex>
      
      <Flex align="center" mt="4" justifyContent={"left"}>
        <Avatar size="lg" src="https://mir-s3-cdn-cf.behance.net/user/50/18e2fe943188647.63cead83ab3b5.png" mr="4" />
        <Box>
          <Text fontSize="xl" fontWeight="bold">Vishal Shanbhag</Text>
          <Text fontSize="md">Mumbai, India</Text>
          
        </Box>
        <Button ml="150px" colorScheme="blue">Follow</Button>
      </Flex>
      
    </Box>
  );
}

export default OwnerInfo;