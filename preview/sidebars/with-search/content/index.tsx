import { Box, BoxProps, Divider, Spacer, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Logo from '../../logo';

import { FaRegBell, FaRegChartBar, FaRegHeart, FaRegPaperPlane, FaRegQuestionCircle, FaUser } from 'react-icons/fa';
import NavItem from './nav-item';
import SearchField from './search-field';
import UserProfile from './user-profile';

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
      width={{ base: '100vw', md: sidebarWith }}
      {...props}
    >
      <Box overflowY='auto' w='full' height='100vh'>
        <Box
          w='full'
          px={4}
          zIndex={99}
          position={{ base: 'fixed', md: 'relative' }}
          top={0}
          left={0}
          bgColor='white'
          borderBottomWidth={1}
        >
          <Logo />
        </Box>
        <Stack pt={20} px={4} spacing={1}>
          <SearchField mb={6} />
          <Stack spacing={6}>
            <Stack>
              <NavItem label='People' icon={FaUser} isActive />
              <NavItem label='Favorites' icon={FaRegHeart} />
              <NavItem label='Workflow' icon={FaRegPaperPlane} />
              <NavItem label='Statistics' icon={FaRegChartBar} />
            </Stack>
            <Divider />
            <Stack>
              <NavItem label='Notifications' icon={FaRegBell} />
              <NavItem label='Help Center' icon={FaRegQuestionCircle} />
            </Stack>
          </Stack>
          <Spacer />
          <UserProfile
            name='Cindy Winston'
            image='https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            email='cindy@example.com'
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default SidebarContent;
