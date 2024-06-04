import { Box, Flex, Text } from '@chakra-ui/react';
import { AiFillGift } from 'react-icons/ai';
import { BsGearFill } from 'react-icons/bs';
import { FaClipboardCheck, FaRss } from 'react-icons/fa';
import { HiCode, HiCollection } from 'react-icons/hi';
import { MdHome } from 'react-icons/md';
import Logo from '../../logo';
import NavItem from './nav-item';
const sidebarWith = '250px';

const SidebarContent = (props) => (
  <Box
    as='nav'
    pos='fixed'
    top='0'
    left='0'
    h='full'
    pb='10'
    overflowX='hidden'
    overflowY='auto'
    bg='blue.600'
    borderColor='blackAlpha.300'
    borderRightWidth='1px'
    width={{ base: 'full', md: sidebarWith }}
    {...props}
  >
    <Flex borderBottomWidth='1px' borderColor='whiteAlpha.300'>
      <Logo color='whiteAlpha.700' />
    </Flex>
    <Flex mt={2} direction='column' as='nav' fontSize='sm' color='gray.600' aria-label='Main Navigation'>
      <NavItem icon={MdHome}>Home</NavItem>
      <NavItem icon={FaRss}>Articles</NavItem>
      <NavItem icon={HiCollection}>Collections</NavItem>
      <NavItem icon={FaClipboardCheck}>Checklists</NavItem>
      <NavItem icon={HiCode}>Integrations</NavItem>
      <NavItem icon={AiFillGift}>Changelog</NavItem>
      <NavItem icon={BsGearFill}>Settings</NavItem>
    </Flex>
  </Box>
);

export default SidebarContent;
