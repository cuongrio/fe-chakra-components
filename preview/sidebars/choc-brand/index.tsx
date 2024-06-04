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
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';
import { FiMenu, FiSearch } from 'react-icons/fi';
import SidebarContent from './content';
import HeaderNav from './header';

const Sidebar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box as='section' bg='gray.50' _dark={{ bg: 'gray.700' }} minH='full'>
      <SidebarContent display={{ base: 'none', md: 'unset' }} />

      <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay />
        <DrawerContent maxW='2xs'>
          <DrawerCloseButton zIndex={9} color='gray.800' top={3} />
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
