import { Alert, AlertIcon, Heading, Stack } from '@chakra-ui/react';

const DefaultAlertVariant = () => {
  return (
    <>
      <Heading as='h4' size='md' mt={8} mb={4}>
        Variant
      </Heading>
      <Stack spacing={3}>
        <Alert status='success' variant='subtle'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='success' variant='solid'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='success' variant='left-accent'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='success' variant='top-accent'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      </Stack>
    </>
  );
};

export default DefaultAlertVariant;
