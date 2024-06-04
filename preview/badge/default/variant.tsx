import { Badge, Heading, Stack } from '@chakra-ui/react';

const BadgeDefaultVariant = () => {
  return (
    <>
      <Heading as='h4' size='md' mt={8} mb={4}>
        Variant
      </Heading>
      <Stack direction='row'>
        <Badge variant='outline' colorScheme='green'>
          Default
        </Badge>
        <Badge variant='solid' colorScheme='green'>
          Success
        </Badge>
        <Badge variant='subtle' colorScheme='green'>
          Removed
        </Badge>
      </Stack>
    </>
  );
};

export default BadgeDefaultVariant;
