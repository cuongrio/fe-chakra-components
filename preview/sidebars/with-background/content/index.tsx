import { Box, BoxProps, Divider, Flex, Spacer, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { FaRegBell, FaRegChartBar, FaRegHeart, FaRegPaperPlane, FaRegQuestionCircle, FaUser } from 'react-icons/fa';
import Logo from '../../logo';
import NavLink from './nav-item';
import SearchField from './search-field';
import UserProfile from './user-profile';

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
          <SearchField mb={6} />
          <Stack spacing={6}>
            <Stack>
              <NavLink label='People' icon={FaUser} isActive />
              <NavLink label='Favorites' icon={FaRegHeart} />
              <NavLink label='Workflow' icon={FaRegPaperPlane} />
              <NavLink label='Statistics' icon={FaRegChartBar} />
            </Stack>
            <Divider borderColor='whiteAlpha.400' />
            <Stack>
              <NavLink label='Notifications' icon={FaRegBell} />
              <NavLink label='Help Center' icon={FaRegQuestionCircle} />
            </Stack>
          </Stack>
          <Spacer />
          <UserProfile
            name='Cindy Winston'
            image='https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            email='cindy@example.com'
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default SidebarContent;
