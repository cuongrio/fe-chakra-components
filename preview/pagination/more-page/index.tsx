import React from 'react';
import { chakra, Flex, useColorModeValue, Icon } from '@chakra-ui/react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { HiDotsHorizontal } from 'react-icons/hi';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const PaginationMorePage = () => {
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
      >
        {props.children}
      </chakra.button>
    );
  };
  const MButton = (props) => {
    const DoubleArrow = props.left ? ArrowLeftIcon : ArrowRightIcon;
    const [hovered, setHovered] = React.useState(false);
    const hoverColor = useColorModeValue('blue.800', 'blue.700');
    const unHoverColor = useColorModeValue('blue.500', 'blue.800');

    return (
      <chakra.a
        w={8}
        py={2}
        color='gray.700'
        _dark={{ color: 'gray.200' }}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        cursor='pointer'
        textAlign='center'
      >
        {hovered ? (
          <Icon as={DoubleArrow} boxSize={3} cursor='pointer' color={hoverColor} />
        ) : (
          <Icon as={HiDotsHorizontal} color={unHoverColor} boxSize={4} opacity={0.5} />
        )}
      </chakra.a>
    );
  };
  return (
    <Flex p={6} w='full' alignItems='center' justifyContent="center">
      <Flex color='blue.500'>
        <PagButton>
          <Icon as={IoIosArrowBack} color='gray.700' _dark={{ color: 'gray.200' }} boxSize={4} />
        </PagButton>
        <PagButton>1</PagButton>
        <MButton left />
        <PagButton>5</PagButton>
        <PagButton>6</PagButton>
        <PagButton active>7</PagButton>
        <PagButton>8</PagButton>
        <PagButton>9</PagButton>
        <MButton right />
        <PagButton>50</PagButton>
        <PagButton>
          <Icon as={IoIosArrowForward} color='gray.700' _dark={{ color: 'gray.200' }} boxSize={4} />
        </PagButton>
      </Flex>
    </Flex>
  );
};

export default PaginationMorePage;
