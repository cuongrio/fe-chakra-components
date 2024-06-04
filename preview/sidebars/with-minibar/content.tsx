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
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai';
import { BsCalendarCheck, BsFolder2 } from 'react-icons/bs';
import { HiLogout } from 'react-icons/hi';
import { RiFlashlightFill } from 'react-icons/ri';
import NavItem from './nav-item';

const SidebarContent = ({ ...props }: BoxProps) => (
  <Box
    as='nav'
    pos='fixed'
    top='0'
    left='0'
    zIndex='sticky'
    h='full'
    // pb="10"
    overflowX='hidden'
    overflowY='auto'
    bgColor='#18c29c'
    borderColor={useColorModeValue('inherit', 'gray.700')}
    borderRightWidth='1px'
    w='60'
    {...props}
  >
    <VStack h='full' w='full' alignItems='flex-start' justify='space-between'>
      <Box w='full' px={4}>
        <Flex px='4' py='5' align='center'>
          <Icon as={RiFlashlightFill} h={8} w={8} />
          <Text fontSize='2xl' ml='2' color={useColorModeValue('blue.500', 'white')} fontWeight='semibold'>
            POS
          </Text>
        </Flex>
        <Flex direction='column' as='nav' fontSize='md' color='gray.600' aria-label='Main Navigation'>
          <NavItem icon={AiOutlineHome}>Dashboard</NavItem>
          <NavItem icon={AiOutlineTeam}>Team</NavItem>
          <NavItem icon={BsFolder2}>Projects</NavItem>
          <NavItem icon={BsCalendarCheck}>Calendar</NavItem>
        </Flex>
      </Box>

      <Box px='4' py='2' mt={10} w='full' bgColor='#8ed7c6'>
        <Menu>
          <MenuButton
            as={Button}
            size={'sm'}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            _hover={{ textDecoration: 'none' }}
            w='full'
          >
            <Flex justifyContent='space-between' alignItems='center'>
              <Avatar size={'sm'} name='Ahmad' src='https://avatars2.githubusercontent.com/u/37842853?v=4' />
              <Stack textAlign='left' spacing={1}>
                <Text fontSize='sm'>Eleanor Pena</Text>
                <Text fontSize='xs'>Veterinária</Text>
              </Stack>
              <Icon as={HiLogout} boxSize={6} />
            </Flex>
          </MenuButton>
          <MenuList fontSize={17} zIndex={5555}>
            <MenuItem as={Link} to='#'>
              My profile
            </MenuItem>
            <MenuItem as={Link} to='#'>
              Change password
            </MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </VStack>
  </Box>
);

export default SidebarContent;
