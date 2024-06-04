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
}

const NavLink = ({ icon, title, isActive, href = '' }: Props) => {
  const boxProps: FlexProps = isActive
    ? {
        transform: 'scale(0.98)',
        bgColor: 'teal.50',
      }
    : {
        bgColor: 'transparent',
        _hover: {
          bgColor: 'teal.50',
          color: 'blue.600',
        },
      };

  const iconProps: IconProps = isActive
    ? {
        color: 'blue.600',
      }
    : {
        color: 'gray.600',
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
          fontWeight="normal"
        >
          <Icon as={icon} boxSize={5} mr={2} {...iconProps} />
          <Text fontSize='md'>{title}</Text>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default NavLink;
