import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai';
import { BsCalendarCheck, BsFolder2 } from 'react-icons/bs';
import { RiFlashlightFill } from 'react-icons/ri';
import NavItem from './nav-item';

const SidebarContent = ({ ...props }: BoxProps) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0" 
    h="100vh"
    // pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue('white', 'gray.800')}
    borderColor={useColorModeValue('inherit', 'gray.700')} 
    width={{ base: 40, sm: 60 }}
    {...props}
  >
    <VStack h="full" w="full" alignItems="flex-start" justify="space-between">
      <Box w="full">
        <Flex px="4" py="5" align="center">
          <Icon as={RiFlashlightFill} h={8} w={8} />
          <Text
            fontSize="2xl"
            ml="2"
            color={useColorModeValue('brand.500', 'white')}
            fontWeight="semibold"
          >
            POS
          </Text>
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="md"
          color="gray.600"
          aria-label="Main Navigation"
        >
          <NavItem icon={AiOutlineHome}>Dashboard</NavItem>
          <NavItem icon={AiOutlineTeam}>Team</NavItem>
          <NavItem icon={BsFolder2}>Projects</NavItem>
          <NavItem icon={BsCalendarCheck}>Calendar</NavItem>
        </Flex>
      </Box>

      <Flex px="4" py="5" mt={10} justify="center" alignItems="center">
        <Menu>
          <MenuButton
            as={Button}
            size={'sm'}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            _hover={{ textDecoration: 'none' }}
          >
            <Avatar
              size={'sm'}
              name="Ahmad"
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
            />
          </MenuButton>
          <MenuList fontSize={17} zIndex={5555}>
            <MenuItem as={Link}>My profile</MenuItem>
            <MenuItem as={Link}>Change password</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </VStack>
  </Box>
);

export default SidebarContent;
