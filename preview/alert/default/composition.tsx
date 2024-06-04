import { Alert, AlertDescription, AlertIcon, AlertTitle, Heading, Stack } from '@chakra-ui/react';

const DefaultAlertComposition = () => {
  return (
    <>
      <Heading as='h4' size='md' mt={8} mb={4}>
        Composition
      </Heading>
      <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for submitting your application. Our team will get back to you soon.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default DefaultAlertComposition;
