import { Avatar, Box, BoxProps, Divider, Flex, Icon, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HiHome, HiOutlineCog, HiOutlineFilter } from 'react-icons/hi';
import CollapseItems from './collapse-items';
import CompaniesDropdown from './companies-dropdown';
import { GeneralMenuData, MainMenuData } from './data';
import NavGroup from './nav-group';
import NavItem from './nav-item';

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
      h='100vh'
      overflowX='hidden'
      overflowY='auto'
      bg={sidebarBgColor}
      width={{ base: 'full', md: sidebarWith }}
      {...props}
    >
      <Box overflowY='auto' w='full' px={4} height='100vh'>
      <Box mt={6}>
          <CompaniesDropdown />
        </Box>
        <Flex mt={8} direction='column' justify='space-between' h='full'>
          <Box className='body sidebar'>
            <NavItem title='Home' isActive={true} icon={HiHome} />
            <NavGroup title='Main Menu'>
              {MainMenuData.map((item, index) => {
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
                  />
                );
              })}
            </NavGroup>

            <NavGroup title='General'>
              {GeneralMenuData.map((item, index) => {
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
                  />
                );
              })}
            </NavGroup>

            <NavGroup title='Updates'>
              <NavItem isActive={router.pathname === '/changelog'} title='Changelog' />
            </NavGroup>
          </Box>
          <Divider />
          <Flex px={3} mt={6} gap={4} justifyContent='flex-start' alignItems='center'>
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
