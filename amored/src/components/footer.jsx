import { Grid, GridItem, Box , Text, Heading, Button, Flex} from "@chakra-ui/react";
import OwnerInfo from "./owenerInfo";
function Footer() {
  return (
    <Grid templateColumns=" 1fr 0.5fr 0.5fr 0.5fr" gap={4} paddingLeft={"20"} width={"85%"} paddingTop={"15"} marginBottom={"60px"}>
      <GridItem colSpan={4}>
        <Box bg="gray.200" h="300px">
        <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Heading size="2xl" fontWeight="bolder" mr="2">
           Sign up to join the conversation
          </Heading>
        </Box>

        <Text mt="4" color="gray.500">
        Add your feedback for Tanmay Ratna’s project by signing in or signing up.
        </Text>
        <Button colorScheme="blue" mt={"10"}>
          Sign Up With Email
        </Button>
      </Box> 
      
        </Box>
      </GridItem>
      <GridItem colSpan={2} >
        <Box bg="gray.400" h="250px">
        <OwnerInfo/>
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Box bg="gray.600" h="230px" paddingLeft={"10px"} paddingTop={"20px"}>
         <Button
              backgroundColor={"gray.600"} border={"2px solid white"} color={"white"} mr={"10px"} marginBottom={"10px"}
              _hover={{bg:"black"}}
         >brand identidy</Button>
         <Button  backgroundColor={"gray.600"} border={"2px solid white"} color={"white"} mr={"10px"} marginBottom={"10px"}  _hover={{bg:"black"}}>Case Study</Button>
         <Button  backgroundColor={"gray.600"} border={"2px solid white"} color={"white"} mr={"10px"} marginBottom={"10px"}  _hover={{bg:"black"}}>fitness app</Button>
         <Button  backgroundColor={"gray.600"} border={"2px solid white"} color={"white"} mr={"10px"} marginBottom={"10px"}  _hover={{bg:"black"}}>workout</Button>
         <Button  backgroundColor={"gray.600"} border={"2px solid white"} color={"white"} mr={"10px"} marginBottom={"10px"}  _hover={{bg:"black"}}>branding</Button>
         <Button  backgroundColor={"gray.600"} border={"2px solid white"} color={"white"} mr={"10px"} marginBottom={"10px"}  _hover={{bg:"black"}}>fitness</Button>
         <Button  backgroundColor={"gray.600"} border={"2px solid white"} color={"white"} mr={"10px"} marginBottom={"10px"}  _hover={{bg:"black"}}>gust</Button>
         <Button  backgroundColor={"gray.600"} border={"2px solid white"} color={"white"} mr={"10px"} marginBottom={"10px"}  _hover={{bg:"black"}}>gym</Button>
         <Button  backgroundColor={"gray.600"} border={"2px solid white"} color={"white"} mr={"10px"} marginBottom={"10px"}  _hover={{bg:"black"}}>UX Case Study</Button>
         <Button backgroundColor={"gray.600"} border={"2px solid white"} color={"white"} mr={"10px"} marginBottom={"10px"}  _hover={{bg:"black"}}>Health</Button>
       
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Box bg="gray.800" h="450px">
        <Text  pt={"40px"} color={"white"} fontSize={"15px"} ml={"10px"}>Tools</Text>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Button mt={"15px"} width={"80%"}>Photoshop</Button>
            <Button mt={"15px"} width={"80%"}>Illustrator</Button>
          </Flex>

          <Text  mt={"40px"} color={"white"} fontSize={"15px"} ml={"10px"}>Figma</Text>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Button mt={"15px"} width={"80%"}>Product Design</Button>
            <Button mt={"15px"} width={"80%"}>Branding</Button>
            <Button mt={"15px"} width={"80%"}>UI/UX</Button>
          </Flex>
          </Box> 
      </GridItem>
     
    </Grid>
  );
}

export default Footer;