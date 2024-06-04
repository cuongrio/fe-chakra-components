import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonProps,
  Collapse,
  Flex,
  FlexProps,
  Icon,
  IconProps,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { HiServer } from 'react-icons/hi';

interface Props {
  icon?: IconType;
  title: string;
  items: any[];
}

const CollapseItems = ({ icon, items, title }: Props) => {
  const { isOpen, onToggle } = useDisclosure();

  const buttonProps: ButtonProps = isOpen
    ? {
        transform: 'scale(0.98)',
        bgColor: 'blue.200',
        _hover: {
          bgColor: 'blue.200',
        },
      }
    : {
        bgColor: 'transparent',
        _hover: {
          bgColor: 'gray.200',
        },
      };

  const iconProps: IconProps = isOpen
    ? {
        color: 'blue.600',
      }
    : {
        color: 'gray.600',
      };

  return (
    <>
      <Button
        {...buttonProps}
        onClick={onToggle}
        w='full'
        textAlign='left'
        alignItems='center'
        justifyContent='space-between'
        borderRadius='md'
        cursor='pointer'
        transition='all 0.15s ease'
        fontWeight='normal'
      >
        <Flex alignItems='center'>
          <Icon as={icon} boxSize={5} mr={2} {...iconProps} />
          <Text fontSize='md'>{title}</Text>
        </Flex>
        <Box>
          <Icon as={ChevronDownIcon} boxSize={5} />
        </Box>
      </Button>
      <Collapse in={isOpen} animateOpacity>
        {items.map((item, index) => (
          <Flex
            key={index}
            py={2}
            px={4}
            w='full'
            alignItems='center'
            borderRadius='md'
            cursor='pointer'
            transition='all 0.15s ease'
            align='center'
            _hover={{
              bgColor: 'gray.200',
            }}
          >
            <Icon as={item.icon} boxSize={5} mr={2} {...iconProps} />
            <Text fontSize='md'>{item.title}</Text>
          </Flex>
        ))}
      </Collapse>
    </>
  );
};

export default CollapseItems;
