import { Box, chakra, Flex, Link } from '@chakra-ui/react';

import { AiOutlineLink, AiOutlineTwitter } from 'react-icons/ai';

const CardArticleWithIcon = () => {
  return (
    <Flex p={4} w='full' alignItems='center'>
      <Box w='full' maxW='sm' px={4} py={3} bg='white' _dark={{ bg: 'gray.800' }} shadow='md' rounded='md'>
        <Flex justifyContent='space-between' alignItems='center'>
          <chakra.span fontSize='sm' color='gray.800' _dark={{ color: 'gray.400' }}>
            Courses and MOOCs
          </chakra.span>
          <chakra.span
            color='blue.800'
            _dark={{ color: 'blue.900' }}
            px={3}
            py={1}
            rounded='full'
            textTransform='uppercase'
            fontSize='xs'
          >
            psychology
          </chakra.span>
        </Flex>

        <Box>
          <chakra.h1 fontSize='lg' fontWeight='bold' mt={2} color='gray.800' _dark={{ color: 'white' }}>
            AP® Psychology - Course 5: Health and Behavior
          </chakra.h1>
          <chakra.p fontSize='sm' mt={2} color='gray.600' _dark={{ color: 'gray.300' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio
            libero vitae accusamus cupiditate laborum eos.
          </chakra.p>
        </Box>

        <Box>
          <Flex alignItems='center' mt={2} color='gray.700' _dark={{ color: 'gray.200' }}>
            <span>Visit on:</span>
            <Link mx={2} cursor='pointer' textDecor='underline' color='blue.600' _dark={{ color: 'blue.400' }}>
              edx.org
            </Link>
            <span>or</span>
            <Link
              mx={2}
              cursor='pointer'
              textDecor='underline'
              color='blue.600'
              _dark={{ color: 'blue.400' }}
              wordBreak='break-word'
            >
              classcentral.com
            </Link>
          </Flex>

          <Flex alignItems='center' justifyContent='center' mt={4}>
            <Link
              mr={2}
              color='gray.800'
              _dark={{ color: 'gray.400' }}
              _hover={{ color: 'gray.700', _dark: { color: 'gray.300' } }}
              cursor='pointer'
            >
              <AiOutlineTwitter />
            </Link>

            <Link
              mr={2}
              color='gray.800'
              _dark={{ color: 'gray.400' }}
              _hover={{ color: 'gray.700', _dark: { color: 'gray.300' } }}
              cursor='pointer'
            >
              <AiOutlineLink />
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default CardArticleWithIcon;
