import { Box, Collapse, Flex, Icon, useDisclosure } from '@chakra-ui/react';
import { AiFillGift } from 'react-icons/ai';
import { BsGearFill } from 'react-icons/bs';
import { FaClipboardCheck, FaRss } from 'react-icons/fa';
import { HiCode, HiCollection } from 'react-icons/hi';
import { MdHome, MdKeyboardArrowRight } from 'react-icons/md';
import Logo from '../../logo';

import NavItem from './nav-item';

const SidebarContent = (props) => {
  const integrations = useDisclosure();
  const sidebarWith = '250px';

  return (
    <Box
      as='nav'
      pos='fixed'
      top='0'
      left='0'
      h='full'
      pb='10'
      overflowX='hidden'
      overflowY='auto'
      bg='white'
      _dark={{ bg: 'gray.800' }}
      borderRightWidth={1}
      color='inherit'
      width={{ base: 'full', md: sidebarWith }}
      {...props}
    >
      <Logo color='gray.800' />
      <Flex direction='column' as='nav' fontSize='sm' color='gray.600' aria-label='Main Navigation'>
        <NavItem icon={MdHome}>Home</NavItem>
        <NavItem icon={FaRss}>Articles</NavItem>
        <NavItem icon={HiCollection}>Collections</NavItem>
        <NavItem icon={FaClipboardCheck}>Checklists</NavItem>
        <NavItem icon={HiCode} onClick={integrations.onToggle}>
          Integrations
          <Icon as={MdKeyboardArrowRight} ml='auto' transform={integrations.isOpen && 'rotate(90deg)'} />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem pl='12' py='2'>
            Shopify
          </NavItem>
          <NavItem pl='12' py='2'>
            Slack
          </NavItem>
          <NavItem pl='12' py='2'>
            Zapier
          </NavItem>
        </Collapse>
        <NavItem icon={AiFillGift}>Changelog</NavItem>
        <NavItem icon={BsGearFill}>Settings</NavItem>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
