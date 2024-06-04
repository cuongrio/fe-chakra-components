import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { IoMdAlert } from 'react-icons/io';

const AlertWarning = () => {
  return (
    <Flex my={3} w='full' alignItems='center' justifyContent='center'>
      <Flex w='full' mx='auto' shadow='md' rounded='lg' overflow='hidden'>
        <Flex justifyContent='center' alignItems='center' w={12} bg='yellow.500'>
          <Icon as={IoMdAlert} color='white' boxSize={6} />
        </Flex>

        <Box py={2} px={4}>
          <Text color='yellow.400' _dark={{ color: 'yellow.300' }} fontWeight='bold'>
            Warning
          </Text>
          <Text color='gray.600' _dark={{ color: 'gray.200' }} fontSize='sm'>
            Your image size is too large!
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AlertWarning;
