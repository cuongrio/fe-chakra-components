import React from 'react';
import { chakra, Box, Flex, Stack, Link } from '@chakra-ui/react';

const CtaSimpleJustified = () => {
  return (
    <Flex w='full' alignItems='center' justifyContent='center'>
      <Box bg='gray.50' _dark={{ bg: 'gray.800' }}>
        <Box
          maxW='7xl'
          w={{ md: '3xl', lg: '4xl' }}
          mx='auto'
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: 'flex' }}
          alignItems={{ lg: 'center' }}
          justifyContent={{ lg: 'space-between' }}
        >
          <chakra.h2
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight='extrabold'
            letterSpacing='tight'
            lineHeight='shorter'
            color='gray.900'
            _dark={{ color: 'gray.100' }}
          >
            <chakra.span display='block'>Ready to dive in?</chakra.span>
            <chakra.span display='block' color='blue.600' _dark={{ color: 'gray.500' }}>
              Start your free trial today.
            </chakra.span>
          </chakra.h2>
          <Stack direction={{ base: 'column', sm: 'row' }} mt={{ base: 8, lg: 0 }} flexShrink={{ lg: 0 }}>
            <Link
              w={['full', , 'auto']}
              display='inline-flex'
              alignItems='center'
              justifyContent='center'
              px={5}
              py={3}
              border='solid transparent'
              fontWeight='bold'
              rounded='md'
              shadow='md'
              _light={{ color: 'white' }}
              bg='blue.600'
              _dark={{ bg: 'blue.500' }}
              _hover={{
                bg: 'blue.700',
                _dark: { bg: 'blue.600' },
              }}
            >
              Get started
            </Link>
            <Link
              w={['full', , 'auto']}
              display='inline-flex'
              alignItems='center'
              justifyContent='center'
              px={5}
              py={3}
              border='solid transparent'
              fontWeight='bold'
              rounded='md'
              shadow='md'
              color='blue.600'
              bg='white'
              _hover={{
                bg: 'blue.50',
              }}
            >
              Learn More
            </Link>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};
export default CtaSimpleJustified;
