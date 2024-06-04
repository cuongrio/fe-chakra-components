import { Accordion, Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Logo from '../../logo';
import CompaniesDropdown from './companies-dropdown';
import { MenuData } from './data';

import NavGroup from './nav-group';
import NavItem from './nav-item';

const SidebarContent = (props: BoxProps) => {
  const router = useRouter();

  // sidebar
  const sidebarWith = '250px';
  const sidebarBgColor = 'white';
  const sidebarShadow = 'md';
  const textColor = 'gray.500';
  const textColorActive = 'blue.500';

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
      boxShadow={sidebarShadow}
      width={{ base: 'full', md: sidebarWith }}
      {...props}
    >
      <Box overflowY='auto' w='full' h='full'>
        <Flex direction='column' justify='space-between'>
          <Box mt={4} px={4}>
            <CompaniesDropdown />
          </Box>

          <Accordion allowToggle px={4}>
            {MenuData.map((data, dataIdx) => {
              return (
                <Box key={dataIdx}>
                  {data.label && (
                    <Text fontSize='xs' textTransform='uppercase' color={textColor} mt={4} mb={4}>
                      {data.label}
                    </Text>
                  )}
                  {data.items.map((item, itemIdx) => {
                    if (item.children) {
                      return (
                        <NavGroup
                          key={itemIdx}
                          title={item.title}
                          icon={item.icon}
                          items={item.children}
                          color={textColor}
                          colorActive={textColorActive}
                        />
                      );
                    }
                    return (
                      <NavItem
                        key={itemIdx}
                        isActive={router.pathname === item.matchPath}
                        icon={item.icon}
                        title={item.title}
                        href={item.link}
                        color={textColor}
                        colorActive={textColorActive}
                      />
                    );
                  })}
                </Box>
              );
            })}
          </Accordion>
        </Flex>
      </Box>
    </Box>
  );
};

export default SidebarContent;
