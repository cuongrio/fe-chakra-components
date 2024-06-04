import { Avatar, Flex, Icon, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';
import { FiMenu, FiSearch } from 'react-icons/fi';

interface HeaderNavProps {
  onOpen: () => void;
}

const HeaderNav = ({ onOpen }: HeaderNavProps) => {
  return (
    <Flex
      as='header'
      align='center'
      justify='space-between'
      w='full'
      py={2}
      px={{ base: 4, md: 8 }}
      bg='white'
      _dark={{ bg: 'gray.800' }}
      h={14}
      boxShadow='sm'
    >
      <IconButton
        aria-label='Menu'
        display={{ base: 'inline-flex', md: 'none' }}
        onClick={onOpen}
        icon={<FiMenu />}
        size='md'
        rounded='md'
      />
      <InputGroup w='96' display={{ base: 'none', md: 'flex' }}>
        <InputLeftElement color='gray.500'>
          <FiSearch />
        </InputLeftElement>
        <Input placeholder='Search for articles...' />
      </InputGroup>

      <Flex align='center'>
        <Icon color='gray.500' as={FaBell} cursor='pointer' />
        <Avatar
          ml='4'
          size='sm'
          name='anubra266'
          src='https://avatars.githubusercontent.com/u/30869823?v=4'
          cursor='pointer'
        />
      </Flex>
    </Flex>
  );
};

export default HeaderNav;
