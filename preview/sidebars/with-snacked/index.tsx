import { Accordion, Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import CompaniesDropdown from './companies-dropdown';
import { MenuData } from './data';

import NavGroup from './nav-group';
import NavItem from './nav-item';

const Sidebar = () => {
  const router = useRouter();
  const sidebarBg = 'gray.700';
  const textColor = 'gray.400';
  const textColorActive = 'white';

  return (
    <Box
      as='aside'
      bg={sidebarBg}
      position='sticky'
      top={0}
      width='20rem'
      borderRightWidth={1}
      transition='padding 0.15s'
    >
      <Box overflowY='auto' w='full' h='100vh' px={6}>
        <Box mt={6}>
          <CompaniesDropdown />
        </Box>
        <Flex direction='column' justify='space-between' my={4} pb={4}>
          <Accordion allowToggle>
            {MenuData.map((data, dataIdx) => {
              return (
                <div key={dataIdx}>
                  {data.label && (
                    <Text fontSize='xs' textTransform='uppercase' color={textColor} mt={5}>
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
                </div>
              );
            })}
          </Accordion>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
