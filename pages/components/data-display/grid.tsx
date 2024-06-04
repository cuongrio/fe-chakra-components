import MasonryDog from '@/preview/grid/masonry-dog';
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

const Grid = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize' mb={5} borderBottomWidth={1} pb={4}>
        Grid
      </Heading>
      <Box py={8}>
        <LineWrap title='Masonry image'>
          <MasonryDog />
        </LineWrap>
      
      </Box>
    </Box>
  );
};

export default Grid;
