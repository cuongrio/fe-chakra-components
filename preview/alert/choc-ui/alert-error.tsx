import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { BsLightningFill } from 'react-icons/bs';

const AlertError = () => {
  return (
    <Flex my={3} w='full' alignItems='center' justifyContent='center'>
      <Flex w='full' mx='auto' shadow='md' rounded='lg' overflow='hidden'>
        <Flex justifyContent='center' alignItems='center' w={12} bg='red.500'>
          <Icon as={BsLightningFill} color='white' boxSize={6} />
        </Flex>

        <Box py={2} px={4}>
          <Text color='red.500' _dark={{ color: 'red.400' }} fontWeight='bold'>
            Error
          </Text>
          <Text color='gray.600' _dark={{ color: 'gray.200' }} fontSize='sm'>
            Your email is already used!
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AlertError;
