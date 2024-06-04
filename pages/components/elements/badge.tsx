import BadgeUnreadNotification from '@/preview/badge/choc-ui/unread-notification';
import BadgeWithButton from '@/preview/badge/choc-ui/with-button';
import BadgeWithIcon from '@/preview/badge/choc-ui/with-icon';
import BadgeDefaultBasic from '@/preview/badge/default/basic';
import BadgeDefaultComposition from '@/preview/badge/default/composition';
import BadgeDefaultVariant from '@/preview/badge/default/variant';
import { Box, Flex, Heading } from '@chakra-ui/react';

const BadgePage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Flex gap={10} w='full'>
        <Box w='full'>
          <Heading as='h1' mb={5} borderBottomWidth={1} pb={4}>
            Default
          </Heading> 
          <BadgeDefaultBasic />
          <BadgeDefaultVariant />
          <BadgeDefaultComposition />
        </Box>

        <Box w='full'>
          <Heading as='h1' mb={5} borderBottomWidth={1} pb={4}>
            Choc UI
          </Heading>
          <BadgeWithIcon />
          <BadgeWithButton />
          <BadgeUnreadNotification />
        </Box>
      </Flex>
    </Box>
  );
};

export default BadgePage;
