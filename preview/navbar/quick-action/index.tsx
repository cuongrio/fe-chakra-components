import React from 'react';

import {
  Avatar,
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';

import { AiFillBell, AiFillHome, AiOutlineInbox, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCameraVideoFill, BsPlus } from 'react-icons/bs';
import Logo from '../logo';

const NavbarQuickAction = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();

  return (
    <Box boxShadow='lg' overflow='hidden'>
      <chakra.header bg={bg} w='full' px={{ base: 2, sm: 4 }} py={4} shadow='md'>
        <Flex alignItems='center' justifyContent='space-between' mx='auto'>
          <HStack display='flex' spacing={3} alignItems='center'>
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label='Open menu'
                fontSize='20px'
                color='gray.800'
                _dark={{ color: 'inherit' }}
                variant='ghost'
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos='absolute'
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection='column'
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded='sm'
                shadow='sm'
              >
                <CloseButton aria-label='Close menu' justifySelf='self-start' onClick={mobileNav.onClose} />
                <Button w='full' variant='ghost' leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button w='full' variant='solid' colorScheme='blue' leftIcon={<AiOutlineInbox />}>
                  Inbox
                </Button>
                <Button w='full' variant='ghost' leftIcon={<BsFillCameraVideoFill />}>
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a href='/' title='Choc Home Page' display='flex' alignItems='center'>
              <Logo />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>

            <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
              <Button variant='ghost' leftIcon={<AiFillHome />} size='sm'>
                Dashboard
              </Button>
              <Button variant='solid' colorScheme='blue' leftIcon={<AiOutlineInbox />} size='sm'>
                Inbox
              </Button>
              <Button variant='ghost' leftIcon={<BsFillCameraVideoFill />} size='sm'>
                Videos
              </Button>
            </HStack>
          </HStack>
          <HStack spacing={3} display={mobileNav.isOpen ? 'none' : 'flex'} alignItems='center'>
            <Button colorScheme='blue' leftIcon={<BsPlus />}>
              New Wallet
            </Button>

            <chakra.a
              p={3}
              color='gray.800'
              _dark={{ color: 'inherit' }}
              rounded='sm'
              _hover={{ color: 'gray.800', _dark: { color: 'gray.600' } }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  );
};
export default NavbarQuickAction;
