import { Alert, AlertIcon, Badge, Heading, Stack } from '@chakra-ui/react';

const BadgeDefaultBasic = () => {
  return (
    <>
      <Heading as='h4' size='md' mt={8} mb={4}>
        Basic
      </Heading>
      <Stack direction='row'>
        <Badge>Default</Badge>
        <Badge colorScheme='green'>Success</Badge>
        <Badge colorScheme='red'>Removed</Badge>
        <Badge colorScheme='purple'>New</Badge>
      </Stack>
    </>
  );
};

export default BadgeDefaultBasic;
