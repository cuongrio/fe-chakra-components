import {
  AccordionButton,
  AccordionItem,
  Flex,
  FlexProps,
  Icon,
  IconProps,
  Link,
  Text,
  TextProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface Props {
  title: string;
  icon?: IconType;
  isActive?: boolean;
  href?: string;
  color?: string;
  colorActive?: string;
}

const NavItem = ({ icon, title, isActive, href = '', color = 'gray.200', colorActive = 'white' }: Props) => {
  const boxProps: FlexProps = isActive
    ? {
        transform: 'scale(0.98)',
        bgColor: 'blue.200',
      }
    : {
        bgColor: 'transparent',
        _hover: {
          bgColor: 'gray.200',
        },
      };

  return (
    <NextLink href={href}>
      <Link
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Flex
          {...boxProps}
          py={2}
          px={4}
          mt={2}
          w='full'
          alignItems='center'
          borderRadius='md'
          cursor='pointer'
          transition='all 0.15s ease'
          align={'center'}
          color={color}
          _hover={{
            color: colorActive,
          }}
        >
          <Icon as={icon} boxSize={5} mr={2} />
          <Text fontSize='md' noOfLines={1} textAlign="left">{title}</Text>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default NavItem;
