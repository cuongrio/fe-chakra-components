import { Box, Divider, Flex, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const NavGroup = ({ title, children }: Props) => {
  return (
    <Flex gap={0} direction={'column'}>
      <Box my={1} px={3}>
        <Divider bgColor='gray.300' />
      </Box>

      {children}
    </Flex>
  );
};

export default NavGroup;
