import { Box, Button, chakra, Flex, Icon, SimpleGrid, VStack } from '@chakra-ui/react';

const FeaturedWithList = () => {
  const Feature = (props) => {
    return (
      <Flex>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color='blue.500'
          _dark={{ color: 'blue.300' }}
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
            clipRule='evenodd'
          ></path>
        </Icon>
        <chakra.p fontSize='lg' color='gray.700' _dark={{ color: 'gray.400' }} {...props} />
      </Flex>
    );
  };

  return (
    <Flex  
      w='auto'
      justifyContent='center'
      alignItems='center'
    >
      <Box  bg='white' _dark={{ bg: 'gray.800' }} px={8} py={20} mx='auto'>
        <SimpleGrid
          alignItems='center'
          columns={{ base: 1, lg: 2 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box>
            <chakra.h2
              mb={3}
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight='extrabold'
              textAlign={{ base: 'center', sm: 'left' }}
              _light={{ color: 'black' }}
              lineHeight='shorter'
              letterSpacing='tight'
            >
              Become a Partner
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: 'lg', md: 'xl' }}
              textAlign={{ base: 'center', sm: 'left' }}
              color='gray.600'
              _dark={{ color: 'gray.500' }}
            >
              Lets put our heads together to build a successful partnership to benefit both your customers and your
              business.
            </chakra.p>
            <Button as='a' variant='solid' w={{ base: 'full', sm: 'auto' }} colorScheme='blue' size='lg'>
              Become a Partner
            </Button>
          </Box>
          <VStack direction='column' flexGrow={1} spacing={5} alignItems='start'>
            <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
            <Feature>Suppression Management</Feature>
            <Feature>Email Tracking and Analytics</Feature>
            <Feature>99.99% Guaranteed Uptime SLA</Feature>
            <Feature>5 Days of Log Retention</Feature>
            <Feature>Limited 24/7 Ticket Support</Feature>
            <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
            <Feature>1,000 Email Address Validations</Feature>
            <Feature>Host events together or get your event sponsored</Feature>
            <Feature>Reach 90,000 customers via our integration page</Feature>
          </VStack>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
export default FeaturedWithList;
