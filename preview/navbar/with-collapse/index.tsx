import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Logo from '../logo';
import DesktopNav from './desktop-nav';

const navItems = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
];
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [NAV_ITEMS, setNAV_ITEMS] = React.useState(navItems);
  // console.log(NAV_ITEMS);

  return (
    <>
      <Flex
        boxShadow='md'
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo />

          <Flex alignItems="center" display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav NAV_ITEMS={NAV_ITEMS} />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            _hover={{
              bg: 'pink.300',
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity>
        <MobileNav NAV_ITEMS={NAV_ITEMS} />
      </Collapse> */}
    </>
  );
};

export default Navbar;
