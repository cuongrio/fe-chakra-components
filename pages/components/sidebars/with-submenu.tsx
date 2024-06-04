import MainEmpty from '@/components/main-empty';
import Sidebar from '@/preview/sidebars/with-submenu';
import { Flex } from '@chakra-ui/react';

const SidebarWithSubmenu = () => {
  return (
    <Flex w='full' height='100vh'>
      <Sidebar />
      <MainEmpty />
    </Flex>
  );
};

export default SidebarWithSubmenu;
