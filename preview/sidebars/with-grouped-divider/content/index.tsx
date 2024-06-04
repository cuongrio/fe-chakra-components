import { Avatar, Box, BoxProps, Button, Divider, Flex, Text, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HiHome } from 'react-icons/hi';
import CollapseItems from './collapse-items';
import { GENERAL_MENU_DATA, MAIN_MENU_DATA } from './data';

import Logo from '../../logo';
import NavGroup from './nav-group';
import NavLink from './nav-item';

const SidebarContent = (props: BoxProps) => {
  const router = useRouter();

  // sidebar
  const sidebarBgColor = '#f3f4f6';
  const sidebarWith = '250px';

  // nav item
  const navItemProps = {
    textSize: 'md',
    textColor: '#6a7181',
    bgColor: 'transparent',
    bgActiveColor: 'whiteAlpha.500',
    px: 2,
    py: 1.5,
  };

  return (
    <Box
      as='nav'
      pos='fixed'
      top='0'
      left='0'
      h='100vh'
      overflowX='hidden'
      overflowY='auto'
      bg={sidebarBgColor}
      width={{ base: 'full', md: sidebarWith }}
      {...props}
    >
      <Box overflowY='auto' w='full' px={4} height='100vh'>
        <Box px={4} position='fixed' top={0} left={0} w='full' bgColor='white' borderBottomWidth={1}>
          <Logo />
        </Box>
        <Flex pt={16} direction='column' justify='space-between'>
          <Box className='body sidebar'>
            <NavLink title='Home' isActive={true} icon={HiHome} {...navItemProps} />
            <NavGroup title='Main Menu'>
              {MAIN_MENU_DATA.map((item, index) => {
                if (item.children) {
                  return (
                    <CollapseItems
                      key={index}
                      title={item.title}
                      icon={item.icon}
                      items={item.children}
                      {...navItemProps}
                    />
                  );
                }
                return (
                  <NavLink
                    key={index}
                    isActive={router.pathname === item.matchPath}
                    icon={item.icon}
                    title={item.title}
                    href={item.link}
                    {...navItemProps}
                  />
                );
              })}
            </NavGroup>

            <NavGroup title='General'>
              {GENERAL_MENU_DATA.map((item, index) => {
                if (item.children) {
                  return <CollapseItems key={index} title={item.title} icon={item.icon} items={item.children} />;
                }
                return (
                  <NavLink
                    key={index}
                    isActive={router.pathname === item.matchPath}
                    icon={item.icon}
                    title={item.title}
                    href={item.link}
                    {...navItemProps}
                  />
                );
              })}
            </NavGroup>

            <NavGroup title='Updates'>
              <NavLink isActive={router.pathname === '/changelog'} title='Changelog' {...navItemProps} />
            </NavGroup>
          </Box>
          <Divider />
          <Button variant='link'>
            <Flex w='full' px={2} mt={4} gap={2} justifyContent='flex-start' alignItems='flex-start'>
              <Tooltip label='Profile'>
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' size={'sm'} />
              </Tooltip>
              <Text>My Profile</Text>
            </Flex>{' '}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default SidebarContent;
