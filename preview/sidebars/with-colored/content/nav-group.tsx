import { Flex, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const NavGroup = ({ title, children }: Props) => {
  return (
    <Flex gap={0} direction={'column'}>
      <Text color="blue.200" fontSize='sm' mx={3} my={3}>
        {title}
      </Text>
      {children}
    </Flex>
  );
};

export default NavGroup;
