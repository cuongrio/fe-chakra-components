import PaginationBasic from '@/preview/pagination/basic';
import PaginationBasicWithIcon from '@/preview/pagination/basic-with-icon';
import PaginationMorePage from '@/preview/pagination/more-page';
import PaginationJumper from '@/preview/pagination/page-jumper';
import PaginationResponsive from '@/preview/pagination/responsive';
import PaginationSizeChanger from '@/preview/pagination/size-changer';
import { Box, Heading } from '@chakra-ui/react';

const PaginationPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize' mb={5} borderBottomWidth={1} pb={4}>
        Pagination
      </Heading>
      <Box bg='#edf3f8' _dark={{ bg: '#3e3e3e' }} py={8} px={4} rounded='lg' overflow='hidden'>
        <PaginationBasic />
        <PaginationBasicWithIcon />
        <PaginationMorePage />
        <PaginationSizeChanger />
        <PaginationJumper />
        <PaginationResponsive />
      </Box>
    </Box>
  );
};

export default PaginationPage;
