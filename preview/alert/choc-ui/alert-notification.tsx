import { Avatar, Box, Flex, Link, Text } from '@chakra-ui/react';

const AlertNotification = () => {
  return (
    <Flex my={3} w='full' alignItems='center' justifyContent='center'>
      <Flex w='full' mx='auto' shadow='md' rounded='lg' overflow='hidden'>
        <Flex w={2} bg='gray.800' _dark={{ bg: 'gray.900' }}></Flex>

        <Flex alignItems='center' px={2} py={3}>
          <Avatar boxSize={10} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <Box mx={3}>
            <Text color='gray.600' _dark={{ color: 'gray.200' }}>
              Dan has replied on the
              <Link
                color='blue.500'
                _dark={{ color: 'blue.300' }}
                _hover={{ color: 'blue.400', textDecor: 'underline' }}
              >
                uploaded image
              </Link>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AlertNotification;
