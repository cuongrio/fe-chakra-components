import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const AlertSuccess = () => {
  return (
    <Flex my={3} w='full' shadow='md' alignItems='center' justifyContent='center'>
      <Flex w='full' mx='auto' rounded='lg' overflow='hidden'>
        <Flex justifyContent='center' alignItems='center' w={12} bg='green.500'>
          <Icon as={IoMdCheckmarkCircle} color='white' boxSize={6} />
        </Flex>

        <Box py={2} px={4}>
          <Text color='green.500' _dark={{ color: 'green.400' }} fontWeight='bold'>
            Success
          </Text>
          <Text color='gray.600' _dark={{ color: 'gray.200' }} fontSize='sm'>
            Your account was registered!
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AlertSuccess;
