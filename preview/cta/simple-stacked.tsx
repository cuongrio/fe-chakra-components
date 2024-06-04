import React from 'react';
import { chakra, Box, Stack, Flex, SimpleGrid } from '@chakra-ui/react';

const CtaSimpleStacked = () => {
  return (
    <Flex w='full' alignItems='center' justifyContent='center'>
      <Box
        bgGradient='linear(to-r, white, purple.300)'
        _dark={{
          bg: 'gray.800',
        }}
      >
        <SimpleGrid
          maxW='7xl'
          w={{ md: '3xl', lg: '4xl' }}
          alignItems='center'
          columns={{ base: 1, lg: 2, xl: 3 }}
          spacing={4}
          mx='auto'
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: 'flex' }}
        >
          <Box>
            <chakra.h2
              fontSize={{ base: '3xl', sm: '4xl' }}
              fontWeight='extrabold'
              letterSpacing='tight'
              lineHeight='shorter'
              color='gray.900'
              _dark={{ color: 'gray.100' }}
              mb={6}
            >
              <chakra.span display='block'>Ready to dive in?</chakra.span>
              <chakra.span display='block' color='blue.600' _dark={{ color: 'gray.500' }}>
                Start your free trial today.
              </chakra.span>
            </chakra.h2>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={2}>
              <Box display='inline-flex' rounded='md' shadow='md'>
                <chakra.a
                  display='inline-flex'
                  alignItems='center'
                  justifyContent='center'
                  px={5}
                  py={3}
                  border='solid transparent'
                  fontWeight='bold'
                  w='full'
                  rounded='md'
                  _light={{ color: 'white' }}
                  bg='blue.600'
                  _dark={{ bg: 'blue.500' }}
                  _hover={{
                    bg: 'blue.700',
                    _dark: { bg: 'blue.600' },
                  }}
                >
                  Get started
                </chakra.a>
              </Box>
              <Box ml={3} display='inline-flex' rounded='md' shadow='md'>
                <chakra.a
                  w='full'
                  display='inline-flex'
                  alignItems='center'
                  justifyContent='center'
                  px={5}
                  py={3}
                  border='solid transparent'
                  fontWeight='bold'
                  rounded='md'
                  color='blue.600'
                  bg='white'
                  _hover={{
                    bg: 'blue.50',
                  }}
                >
                  Learn more
                </chakra.a>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
export default CtaSimpleStacked;
