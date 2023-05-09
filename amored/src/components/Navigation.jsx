import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Icon,
  Menu,
  
  Link,
  MenuButton,
  MenuItem,
  MenuList,
  Input,
  InputGroup,
  InputLeftElement,
  
} from "@chakra-ui/react";

import {FaHamburger, FaBell, FaCaretDown} from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg="#131313"
      color="white"
      position={"fixed"}
      width={"100%"}
      zIndex={"2"}
    >



     <Box display={"flex"} justifyContent={"space-between"} width={"40%"}>
      <Box display={{ base: "block", md:"none"  }}>
        <IconButton
          aria-label="Toggle menu"
          backgroundColor={"black"}
          icon={<Icon as={FaHamburger} />}
        />
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Flex >
        <Text paddingLeft="5" fontSize="4xl" fontWeight="bold" fontFamily="monospace">AMORED</Text>
         
        </Flex>


      
        
      </Box>
      <Box
            height={"50px"}
           alignContent={"center"}
           width={"100%"}
           marginLeft={"3"}
      >
        <Flex justifyContent={"space-between"}
            fontSize={"20px"}
            alignItems={"center"}
            height={"100%"}
        >
          <Link display={"flex"}
            alignItems={"center"}
            height={"100%"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid white"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
          > For You</Link>
          <Link display={"flex"}
            alignItems={"center"}
            height={"100%"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid white"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
          > Discover</Link>
          <Link display={"flex"}
            alignItems={"center"}
            height={"100%"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid white"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
          > Live</Link>
          <Link display={"flex"}
            alignItems={"center"}
            height={"100%"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid white"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}
          > Hire</Link>
          <Link 
            display={"flex"}
            alignItems={"center"}
            height={"100%"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" ,borderBottom: "3px solid white"}}
            borderBottom={"3px solid transparent"}
            transition={"border-bottom 0s ease-in-out"}

          > Jobs</Link>
        </Flex>
      </Box>

      </Box> 
      <InputGroup maxW="lg" size="md" width={{ base: "full", md: "auto" }}>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FaSearch} color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
          borderRadius="2xl"
        />
      </InputGroup>
      <Flex align="center">
        <IconButton
          aria-label="Notifications"
          icon={<Icon as={FaBell} />}
          mr="3"
          backgroundColor={"black"}
        />
        <Menu zIndex={"3"}>
          <MenuButton
            as={IconButton}
            aria-label="User menu"
            icon={<FaCaretDown />}
            variant="outline"
            mr="4"
            zIndex={"2"}
          />
          <MenuList
          color={"black"}
          zIndex={"popover"}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navigation;