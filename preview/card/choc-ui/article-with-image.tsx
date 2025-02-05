import { Box, chakra, Flex, Image, Link } from '@chakra-ui/react';

const CardArticleWithImage = () => {
  return (
    <Flex p={4} w='full' alignItems='center' justifyContent='center'>
      <Box rounded='lg' shadow='md' bg='white' _dark={{ bg: 'gray.800' }} maxW='2xl'>
        <Image
          roundedTop='lg'
          w='full'
          h={64}
          fit='cover'
          src='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          alt='Article'
        />

        <Box p={6}>
          <Box>
            <chakra.span fontSize='xs' textTransform='uppercase' color='blue.600' _dark={{ color: 'blue.400' }}>
              Product
            </chakra.span>
            <Link
              display='block'
              color='gray.800'
              _dark={{ color: 'white' }}
              fontWeight='bold'
              fontSize='2xl'
              mt={2}
              _hover={{ color: 'gray.600', textDecor: 'underline' }}
            >
              I Built A Successful Blog In One Year
            </Link>
            <chakra.p mt={2} fontSize='sm' color='gray.600' _dark={{ color: 'gray.400' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel.
              Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada
              lobortis.
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems='center'>
              <Flex alignItems='center'>
                <Image
                  h={10}
                  fit='cover'
                  rounded='full'
                  src='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60'
                  alt='Avatar'
                />
                <Link mx={2} fontWeight='bold' color='gray.700' _dark={{ color: 'gray.200' }}>
                  Jone Doe
                </Link>
              </Flex>
              <chakra.span mx={1} fontSize='sm' color='gray.600' _dark={{ color: 'gray.300' }}>
                21 SEP 2015
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default CardArticleWithImage;
