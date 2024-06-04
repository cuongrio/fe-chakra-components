import ChocAlertStatus from '@/preview/alert/choc-ui/status';
import DefaultAlertComposition from '@/preview/alert/default/composition';
import DefaultAlertStatus from '@/preview/alert/default/status';
import DefaultAlertVariant from '@/preview/alert/default/variant';
import { Box, Flex, Heading } from '@chakra-ui/react';

const AlertPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Flex gap={10} w='full'>
        <Box w='full'>
          <Heading as='h1' textTransform='capitalize' mb={5} borderBottomWidth={1} pb={4}>
            Default
          </Heading>
          <DefaultAlertStatus />
          <DefaultAlertVariant />
          <DefaultAlertComposition />
        </Box>

        <Box w='full'>
          <Heading as='h1' mb={5} borderBottomWidth={1} pb={4}>
            Choc UI
          </Heading>
          <ChocAlertStatus />
        </Box>
      </Flex>
    </Box>
  );
};

export default AlertPage;
