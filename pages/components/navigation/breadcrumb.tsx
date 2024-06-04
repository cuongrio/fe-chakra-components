import BcBasic from '@/preview/breadcrumb/basic';
import BcIconSeparator from '@/preview/breadcrumb/icon-separator';
import BcSeparator from '@/preview/breadcrumb/separator';
import { Box, Heading, Text } from '@chakra-ui/react';

const LineWrap = ({ children, title }) => {
  return (
    <Box borderRadius='md' borderWidth={1} mb={10}>
      <Box p={2.5} borderBottomWidth={1}>
        <Text>{title}</Text>
      </Box>
      <Box p={2.5} mx='auto' alignItems='center'>
        {children}
      </Box>
    </Box>
  );
};

const BreadcrumbPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize' mb={5} borderBottomWidth={1} pb={4}>
        Breadcrumb
      </Heading>
      <Box py={8}>
        <LineWrap title='Default'>
          <BcBasic />
          <BcSeparator />
          <BcIconSeparator />
        </LineWrap>
      </Box>
    </Box>
  );
};

export default BreadcrumbPage;
