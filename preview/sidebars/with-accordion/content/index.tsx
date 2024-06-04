import { Box, BoxProps, Flex } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { Accordion, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { GENERAL_MENU_DATA, MAIN_MENU_DATA } from './data';
import Logo from '../../logo';
import NavGroup from './nav-group';
import NavLink from './nav-item';
import SearchField from './search-field';

const SidebarContent = (props: BoxProps) => {
  const router = useRouter();

  // sidebar
  const sidebarBgColor = 'white';
  const sidebarWith = '250px';

  return (
    <Box
      as='nav'
      pos='fixed'
      top='0'
      left='0'
      h='full' 
      overflowX='hidden'
      overflowY='auto'
      bg={sidebarBgColor}
      borderColor='blackAlpha.300'
      borderRightWidth='1px'
      width={{ base: 'full', md: sidebarWith }}
      {...props}
    >
      <Flex px='4' h={14} py={2} align='center' borderBottomWidth='1px' borderColor='whiteAlpha.300'>
        <Logo color='gray.700' />
      </Flex>

      <Flex direction='column' justify='space-between' my={4} px={4}>
        <SearchField mb={6} />

        <Accordion allowToggle>
          <Text fontSize='xs' textTransform='uppercase' color='steal.500' mb={4}>
            Main Menu
          </Text>

          {MAIN_MENU_DATA.map((item, index) => {
            if (item.children) {
              return <NavGroup key={index} title={item.title} icon={item.icon} items={item.children} />;
            }
            return (
              <NavLink
                key={index}
                isActive={router.pathname === item.matchPath}
                icon={item.icon}
                title={item.title}
                href={item.link}
              />
            );
          })}

          <Text fontSize='xs' textTransform='uppercase' color='steal.500' my={4}>
            General Menu
          </Text>

          {GENERAL_MENU_DATA.map((item, index) => {
            if (item.children) {
              return <NavGroup key={index} title={item.title} icon={item.icon} items={item.children} />;
            }
            return (
              <NavLink
                key={index}
                isActive={router.pathname === item.matchPath}
                icon={item.icon}
                title={item.title}
                href={item.link}
              />
            );
          })}
        </Accordion>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
