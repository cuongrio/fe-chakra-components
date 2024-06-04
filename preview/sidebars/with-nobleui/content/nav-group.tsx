import { AccordionButton, AccordionIcon, AccordionPanel, Box, BoxProps, Flex, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { AccordionItem, Text } from '@chakra-ui/react';
import { PropsWithChildren, ReactNode } from 'react';
import { fadeInUp } from './framer-animations';
import { MotionBox } from './motion';
import { BsFillCircleFill } from 'react-icons/bs';
import styles from './sidebar.module.css';

interface Props {
  icon?: IconType;
  title: string;
  items: any[];
  color?: string;
  colorActive?: string;
}

const NavGroup = ({ icon, items, title, color, colorActive }: Props) => {
  return (
    <AccordionItem border={'none'} position='relative'>
      {({ isExpanded }) => (
        <Box>
          <AccordionButton 
            px={0}
            rounded='md'
            cursor='pointer'
            display='flex'
            justifyContent='space-between'
            color={isExpanded ? colorActive : color}
            _hover={{
              color: colorActive,
            }}
          >
            <Flex alignItems='center'>
              <Icon as={icon} boxSize={6} mr={2} />
              <Text fontSize='sm' noOfLines={1} textAlign='left'>
                {title}
              </Text>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel p={0}>
            {items.map((item, index) => (
              <Flex
                className={styles.subNavItem}
                key={index}
                py={1} 
                w='full'
                alignItems='center'
                borderRadius='md'
                cursor='pointer'
                align='center'
                _hover={{
                  color: colorActive,
                }}
                color={color}
              >
                <Icon className={styles.outlineIcon} as={item.icon} boxSize={2} marginLeft={2} marginRight={4} />
                <Icon
                  className={styles.fillIcon}
                  display='none'
                  as={BsFillCircleFill}
                  boxSize={2}
                  marginLeft={2}
                  marginRight={4}
                />
                <CustomMotionBox whileHover={{ translateX: 3 }}>
                  <Text fontSize='sm' noOfLines={1} textAlign='left'>
                    {item.title}
                  </Text>
                </CustomMotionBox>
              </Flex>
            ))}
          </AccordionPanel>
        </Box>
      )}
    </AccordionItem>
  );
};

interface CustomMotionBoxProps extends BoxProps {
  children: ReactNode;
  whileHover?: any;
}

const CustomMotionBox = ({ children, ...props }: PropsWithChildren<CustomMotionBoxProps>) => {
  return (
    <MotionBox initial='initial' animate='animate' variants={fadeInUp} transition='all 0.3s ease-in-out' {...props}>
      {children}
    </MotionBox>
  );
};

export default NavGroup;
