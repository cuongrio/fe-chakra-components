import { Avatar, Box, BoxProps, Divider, Flex, Icon, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HiHome, HiOutlineCog, HiOutlineFilter } from 'react-icons/hi';
import CollapseItems from './collapse-items';
import { GENERAL_MENU_DATA, MAIN_MENU_DATA } from './data';
import Logo from '../../logo';
import NavGroup from './nav-group';
import NavItem from './nav-item';
// nav item
const navItemProps = {
  textSize: 'md',
  textColor: 'blue.100',
  bgColor: 'transparent',
  bgActiveColor: 'whiteAlpha.500',
  px: 3,
  py: 1,
};

const SidebarContent = (props: BoxProps) => {
  const router = useRouter();

  // sidebar
  const sidebarBgColor = 'blue.500';
  const sidebarWith = '250px';

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
        <Logo />
        <Flex mt={4} direction='column' justify='space-between'>
          <Box className='body sidebar'>
            <NavItem title='Home' isActive={true} icon={HiHome} {...navItemProps} />
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
                  <NavItem
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
                  <NavItem
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
              <NavItem isActive={router.pathname === '/changelog'} title='Changelog' {...navItemProps} />
            </NavGroup>
          </Box>
          <Divider />
          <Flex px={2} mt={4} gap={2} justifyContent='flex-start' alignItems='center'>
            <Tooltip label='Settings'>
              <Icon as={HiOutlineCog} boxSize={6} />
            </Tooltip>
            <Tooltip label='Adjustments'>
              <Icon as={HiOutlineFilter} boxSize={6} />
            </Tooltip>
            <Tooltip label='Profile'>
              <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' size={'sm'} />
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default SidebarContent;
