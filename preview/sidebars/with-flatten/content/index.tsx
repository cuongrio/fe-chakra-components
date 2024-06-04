import { Box, BoxProps, HStack, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react';

import { PropsWithChildren, ReactNode } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Logo from '../../logo';
import { FlattenMenuData } from './data';
import { fadeInUp } from './framer-animations';
import { MotionBox } from './motion';

const SidebarContent = (props: BoxProps) => {
  const linkColor = useColorModeValue('steal.500', 'steal.400');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  // sidebar
  const sidebarBgColor = 'white';
  const sidebarWith = '250px';

  return (
    <Box
      as='nav'
      pos='fixed'
      top='0'
      left='0'
      h='100vh'
      pb={6}
      overflowX='hidden'
      overflowY='auto'
      bg={sidebarBgColor}
      width={{ base: 'full', md: sidebarWith }}
      {...props}
    >
      <Box overflowY='auto' w='full' height='100vh'>
        <Stack as='nav' {...props}>
          <Box position='fixed' top={0} left={0} w='full' bgColor='white' borderBottomWidth={1}>
            <Logo />
          </Box>
          <Stack pt={14} spacing={1}>
            {FlattenMenuData.map((c, index) => (
              <CustomMotionBox key={index} whileHover={{ translateX: 3 }} _hover={{ shadow: 'sm' }}>
                <Box
                  rounded='md'
                  pr={4}
                  pl={0}
                  py={1}
                  _hover={{
                    bg: hoverBg,
                    color: linkColor,
                  }}
                  display='flex'
                  cursor='pointer'
                  alignItems='center'
                  justifyContent='space-between' 
                >
                  <HStack px={4} spacing={2} alignItems='center'>
                    <Icon as={FaChevronRight} w={3} h={3} />
                    <HStack spacing={2} justifyContent='space-between'>
                      <Text
                        fontSize='md'
                        letterSpacing={1}
                        _hover={{
                          color: linkColor,
                        }}
                        noOfLines={1}
                      >
                        {c.title}
                      </Text>
                    </HStack>
                  </HStack>
                </Box>
              </CustomMotionBox>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
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

export default SidebarContent;
