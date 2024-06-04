import { Flex, Icon, useColorModeValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons

const NavItem = (props: any) => {
  const textColor = '#084236';

  const { icon, children } = props;
  return (
    <Flex
      align='center'
      px={2}
      py={3}
      mt={4}
      cursor='pointer'
      role='group'
      fontWeight='semibold'
      transition='.15s ease'
      borderRadius='xl'
      color={textColor}
      _hover={{
        bg: '#8ed7c6',
        color: useColorModeValue('gray.900', 'gray.200'),
      }}
    >
      {icon && (
        <Icon
          mx='2'
          boxSize={6}
          _groupHover={{
            color: textColor,
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

export default NavItem;
