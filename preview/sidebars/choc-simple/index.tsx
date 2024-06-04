import MainEmpty from '@/components/main-empty';
import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';
import { FiMenu, FiSearch } from 'react-icons/fi';
import SidebarContent from './content';
import HeaderNav from './header';

const Sidebar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box as='section' bg='gray.50' _dark={{ bg: 'gray.700' }} minH='100vh'>
      <SidebarContent display={{ base: 'none', md: 'unset' }} />

      <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay />
        <DrawerContent maxW='2xs'>
          <DrawerCloseButton top={3} zIndex={9} color='whiteAlpha.700' />
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box ml={{ base: 0, md: 60 }} transition='.3s ease'>
        <HeaderNav onOpen={onOpen} />
        <MainEmpty />
      </Box>
    </Box>
  );
};

export default Sidebar;
