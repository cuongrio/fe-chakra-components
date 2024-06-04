import { Heading } from '@chakra-ui/react';
import AlertError from './alert-error';
import AlertInfo from './alert-info';
import AlertNotification from './alert-notification';
import AlertSuccess from './alert-success';
import AlertWarning from './alert-warning';

const ChocAlertStatus = () => {
  return (
    <>
      <Heading as='h4' size='md' mt={8} mb={4}>
        Status
      </Heading>
      <AlertError />
      <AlertInfo />
      <AlertSuccess />
      <AlertWarning />
      <AlertNotification />
    </>
  );
};

export default ChocAlertStatus;
