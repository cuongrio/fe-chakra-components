import Sidebar from '@/preview/sidebars/with-grouped-divider';
import { Box, Flex, Heading } from '@chakra-ui/react';

const SidebarWithGroupedDivider = () => {
  return (
    <Flex>
      <Sidebar />

      <Box
        as='main'
        m={4}
        py={4}
        px={6}
        w='full'
        h='full'
        borderRadius='lg'
        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      >
        <Heading as='h4'>Dashboard</Heading>
        <Box my={6} borderWidth={2} borderStyle='dashed' borderRadius='lg' borderColor='gray.200' height='500px'></Box>
      </Box>
    </Flex>
  );
};

export default SidebarWithGroupedDivider;
