import { AccordionButton, AccordionIcon, AccordionPanel, Box, Flex, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { AccordionItem, Text } from '@chakra-ui/react';

interface Props {
  icon?: IconType;
  title: string;
  items: any[];
}

const NavGroup = ({ icon, items, title }: Props) => {
  return (
    <AccordionItem border={'none'} position='relative'>
      {({ isExpanded }) => (
        <Box
          borderRadius='md'
          bg={isExpanded ? 'teal.50' : 'transparent'}
          // _before={
          //   isExpanded
          //     ? {
          //         opacity: 0.8,
          //         bgColor: '#000',
          //         content: `""`,
          //         position: 'absolute',
          //         width: '2px',
          //         height: '100%',
          //         zIndex: 3,
          //         top: 0,
          //         left: 0,
          //         display: 'block',
          //       }
          //     : null
          // }
        >
          <AccordionButton
            mt={2}
            borderRadius='md'
            cursor='pointer'
            display='flex'
            justifyContent='space-between'
            bg={isExpanded ? 'teal.50' : 'transparent'}
            _hover={{
              color: 'blue.600',
              bg: 'teal.50',
            }}
          >
            <Flex alignItems='center'>
              <Icon as={icon} boxSize={5} mr={2} />
              <Text fontSize='md'>{title}</Text>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel p={0}>
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
                  color: 'blue.600',
                }}
              >
                <Icon as={item.icon} boxSize={5} mr={2} />
                <Text fontSize='md'>{item.title}</Text>
              </Flex>
            ))}
          </AccordionPanel>
        </Box>
      )}
    </AccordionItem>
  );
};

export default NavGroup;
