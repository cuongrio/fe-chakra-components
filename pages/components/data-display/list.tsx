import { Box, Heading, Text } from '@chakra-ui/react';

const LineWrap = ({ children, title }) => {
  return (
    <Box borderRadius='md' borderWidth={1} mb={10}>
      <Box p={2.5} borderBottomWidth={6} borderColor='blue.500'>
        <Text>{title}</Text>
      </Box>
      <Box mx='auto' alignItems='center'>
        {children}
      </Box>
    </Box>
  );
};

const List = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize' mb={5} borderBottomWidth={1} pb={4}>
        List
      </Heading>
      <Box py={8}>
        <LineWrap title='Masonry image'>
          <Text>Masony List</Text>
        </LineWrap>
      </Box>
    </Box>
  );
};

export default List;
