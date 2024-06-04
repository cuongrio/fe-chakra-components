import NavbarFullWidthFlyouts from '@/preview/navbar/full-width-flyouts';
import NavbarLinkLeft from '@/preview/navbar/link-left';
import NavbarLinkRight from '@/preview/navbar/link-right';
import NavbarQuickAction from '@/preview/navbar/quick-action';
import NavbarSimple from '@/preview/navbar/simple';
import NavbarSimpleLinksCentered from '@/preview/navbar/simple-links-centered';
import NavbarSimpleLinksOnLeft from '@/preview/navbar/simple-links-on-left';
import NavbarSubnavigation from '@/preview/navbar/sub-navigation';
import NavbarSubNavigation2 from '@/preview/navbar/sub-navigation-2';
import NavbarWithBottomBorder from '@/preview/navbar/with-bottom-border';
import NavbarWithCollapse from '@/preview/navbar/with-collapse';
import NavbarWithIcon from '@/preview/navbar/with-icon';
import { Box, Heading, Text } from '@chakra-ui/react';

const NavBox = ({ children, title }) => {
  return (
    <Box borderRadius='md' borderWidth={1} mb={10}>
      <Box p={2.5} borderBottomWidth={6} borderColor='blue.500'>
        <Text>{title}</Text>
      </Box>
      {children}
      <Box minHeight='100px'></Box>
    </Box>
  );
};

const NavbarPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize' mb={5} borderBottomWidth={1} pb={4}>
        Navbar
      </Heading>
      <Box py={8}>
        <NavBox title='Simple'>
          <NavbarSimple />
        </NavBox>
        
        <NavBox title='Sub navigation'>
          <NavbarSubNavigation2 />
        </NavBox>
        {/* <NavBox title='Sub navigation 2'>
          <NavbarSubnavigation />
        </NavBox> */}

        <NavBox title='With collapse'>
          <NavbarWithCollapse />
        </NavBox>

        <NavBox title='Link right'>
          <NavbarLinkRight />
        </NavBox>

        <NavBox title='Link left'>
          <NavbarLinkLeft />
        </NavBox>

        <NavBox title='Quick action'>
          <NavbarQuickAction />
        </NavBox>

        <NavBox title='With icon'>
          <NavbarWithIcon />
        </NavBox>

        <NavBox title='Bottom border'>
          <NavbarWithBottomBorder />
        </NavBox>

        <NavBox title='Simple link centered'>
          <NavbarSimpleLinksCentered />
        </NavBox>

        <NavBox title='Simple link on left'>
          <NavbarSimpleLinksOnLeft />
        </NavBox>

        <NavBox title='Full width flyouts'>
          <NavbarFullWidthFlyouts />
        </NavBox>
      </Box>
    </Box>
  );
};

export default NavbarPage;
