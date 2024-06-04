import { Alert, AlertIcon, Heading, Stack } from '@chakra-ui/react';

const DefaultAlertStatus = () => {
  return (
    <>
      <Heading as='h4' size='md' mt={8} mb={4}>
        Status
      </Heading>
      <Stack spacing={3}>
        <Alert status='error'>
          <AlertIcon />
          There was an error processing your request
        </Alert>

        <Alert status='success'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='warning'>
          <AlertIcon />
          Seems your account is about expire, upgrade now
        </Alert>

        <Alert status='info'>
          <AlertIcon />
          Chakra is going live on August 30th. Get ready!
        </Alert>
      </Stack>
    </>
  );
};

export default DefaultAlertStatus;
