import SidebarWithColored from '@/preview/sidebars/with-colored';
import SidebarChocBrand from '@/preview/sidebars/choc-brand';
import ChocSimple from '@/preview/sidebars/choc-simple';

import NextLink from 'next/link';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';

const MainEmpty = () => {
  return (
    <Box as='main' py={6} px={6} w='full' h='full' overflow='hidden'>
      <Heading as='h4' fontSize='2xl'>
        Dashboard
      </Heading>
      <Box my={6} borderWidth={2} borderStyle='dashed' borderRadius='lg' borderColor='gray.200' height='500px'></Box>
    </Box>
  );
};

const SidebarContainer = ({ title, href, children }) => {
  return (
    <Box p={10}>
      <NextLink href={href} passHref>
        <Link>
          <Text fontSize='lg' fontWeight='bold'>
            {title}
          </Text>
        </Link>
      </NextLink>
      <Box
        mt={4}
        width='1280px'
        height='640px'
        rounded='lg'
        boxShadow='lg'
        overflow='hidden'
        borderWidth={1}
        borderColor='gray.100'
        position='relative'
      >
        <Flex height='640px' w='full'>
          {children}
          <MainEmpty />
        </Flex>
      </Box>
    </Box>
  );
};

const SidebarPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize' mb={5} borderBottomWidth={1} pb={4}>
        Sidebar
      </Heading>

      {/* <SidebarContainer title='Sidebar choc brand'>
        <SidebarChocBrand />
      </SidebarContainer> */}

      <SidebarContainer title='Choc brand' href='/components/sidebars/choc-brand'>
        <ChocSimple />
      </SidebarContainer>

      <SidebarContainer title='Sidebar with colored' href='/components/sidebars/with-colored'>
        <SidebarWithColored />
      </SidebarContainer>
    </Box>
  );
};

export default SidebarPage;
