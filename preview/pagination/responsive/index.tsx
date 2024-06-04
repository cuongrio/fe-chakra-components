import React from 'react';
import { chakra, Flex, Icon } from '@chakra-ui/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PaginationResponsive = () => {
  const PagButton = (props) => {
    const activeStyle = {
      bg: 'blue.600',
      _dark: { bg: 'blue.500' },
      color: 'white',
    };
    return (
      <chakra.button
        mx={1}
        px={4}
        py={2}
        rounded='md'
        bg='white'
        _dark={{ bg: 'gray.800' }}
        color='gray.700'
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        cursor={props.disabled && 'not-allowed'}
        {...(props.active && activeStyle)}
        display={props.p && !props.active && { base: 'none', sm: 'block' }}
      >
        {props.children}
      </chakra.button>
    );
  };
  return (
    <Flex p={6} w='full' alignItems='center' justifyContent='center'>
      <Flex>
        <PagButton>
          <Icon as={IoIosArrowBack} color='gray.700' _dark={{ color: 'gray.200' }} boxSize={4} />
        </PagButton>
        <PagButton p>1</PagButton>
        <PagButton p active>
          2
        </PagButton>
        <PagButton p>3</PagButton>
        <PagButton p>4</PagButton>
        <PagButton p>5</PagButton>
        <PagButton>
          <Icon as={IoIosArrowForward} color='gray.700' _dark={{ color: 'gray.200' }} boxSize={4} />
        </PagButton>
      </Flex>
    </Flex>
  );
};

export default PaginationResponsive;
