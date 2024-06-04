import MainEmpty from '@/components/main-empty';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import SidebarContent from './content';
import HeaderNav from './header';

const Sidebar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box as='section' bg={useColorModeValue('gray.50', 'gray.700')} minH='100vh'>
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement='left' size='full'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex={9} color='gray.800' top={3} />
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box ml={{ base: 0, md: 60 }}>
        <HeaderNav onOpen={onOpen} />
        <MainEmpty />
      </Box>
    </Box>
  );
};

export default Sidebar;
