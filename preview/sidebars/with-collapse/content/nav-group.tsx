import { Flex, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const NavGroup = ({ title, children }: Props) => {
  return (
    <Flex gap={2} direction={'column'} mt={4} mb={2}>
      <Text fontSize='xs'>{title}</Text>
      {children}
    </Flex>
  );
};

export default NavGroup;
