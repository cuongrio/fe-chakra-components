import { AccordionButton, AccordionIcon, AccordionPanel, Box, Flex, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { AccordionItem, Text } from '@chakra-ui/react';

interface Props {
  icon?: IconType;
  title: string;
  items: any[];
  color?: string;
  colorActive?: string;
}

const NavGroup = ({ icon, items, title, color = 'gray.200', colorActive = 'white' }: Props) => {
  return (
    <AccordionItem border={'none'} position='relative'>
      {({ isExpanded }) => (
        <Box
          borderRadius='md'
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
            bg={isExpanded ? 'whiteAlpha.200' : 'transparent'}
            color={color}
            _hover={{
              color: colorActive,
              bg: 'whiteAlpha.200',
            }}
          >
            <Flex alignItems='center'>
              <Icon as={icon} boxSize={6} mr={2} />
              <Text fontSize='md' noOfLines={1} textAlign='left'>
                {title}
              </Text>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel p={0} mt={1}>
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
                  color: 'gray.200',
                }}
                color={color}
              >
                <Icon as={item.icon} boxSize={3} marginLeft='6px' marginRight='8px' />
                <Text fontSize='sm' noOfLines={1} textAlign='left'>
                  {item.title}
                </Text>
              </Flex>
            ))}
          </AccordionPanel>
        </Box>
      )}
    </AccordionItem>
  );
};

export default NavGroup;
