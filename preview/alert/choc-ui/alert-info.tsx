import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { IoMdAlert } from 'react-icons/io';

const AlertInfo = () => {
  return (
    <Flex my={3} w='full' alignItems='center' justifyContent='center'>
      <Flex w='full' mx='auto' shadow='md' rounded='lg' overflow='hidden'>
        <Flex justifyContent='center' alignItems='center' w={12} bg='blue.500'>
          <Icon as={IoMdAlert} color='white' boxSize={6} />
        </Flex>

        <Box py={2} px={4}>
          <Text color='blue.500' _dark={{ color: 'blue.400' }} fontWeight='bold'>
            Info
          </Text>
          <Text color='gray.600' _dark={{ color: 'gray.200' }} fontSize='sm'>
            This channel archived by the owner!{' '}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AlertInfo;
