import { Box, Button, Heading, Stack, Text, Image } from '@chakra-ui/react';

const MainEmpty = () => {
  return (
    <Box as='main' py={2} px={{ base: 4, md: 8 }} w='full' h='full' overflow='hidden'>
      <Heading as='h4' fontSize='2xl'>
        Dashboard
      </Heading>
      <Box my={4} borderWidth={2} borderStyle='dashed' borderRadius='lg' borderColor='gray.200' minHeight='500px'>
        <Stack p={6} direction={{ base: 'column', sm: 'row' }} alignItems='center' justifyContent='center' h='100%'>
          <Stack spacing={8}>
            <Box>
              <Heading color='blue.400' fontSize='3xl'>
                Point of sale
              </Heading>
              <Text fontSize='md' color='gray.500'>
                Manage your inventory and sale effeciently.
              </Text>
            </Box>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded='full'
                bg='blue.400'
                color='white'
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Stocks
              </Button>
              <Button rounded='full'>Vendors</Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default MainEmpty;
