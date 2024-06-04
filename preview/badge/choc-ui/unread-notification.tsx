import { Flex, Heading, Icon, IconButton, Text } from '@chakra-ui/react';
import { AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';

const BadgeUnreadNotification = () => {
  return (
    <>
      <Heading as='h4' size='md' mt={8} mb={4}>
        Unread notification
      </Heading>
      <Flex w='full' alignItems='center'>
        <IconButton
          aria-label='label'
          isRound
          variant='ghost'
          size='md'
          icon={
            <>
              <AiOutlineShoppingCart />
              <Text
                pos='absolute'
                top='-1px'
                right='-1px'
                p='4px'
                fontSize='xs'
                fontWeight='bold'
                lineHeight='none'
                color='red.100'
                transform='translate(50%,-50%)'
                bg='red.600'
                rounded='full'
              />
            </>
          }
        />

        <IconButton
          aria-label='label'
          size='md'
          isRound
          variant='ghost'
          ml={8}
          icon={
            <>
              <AiOutlineMessage />
              <Text
                pos='absolute'
                top='-1px'
                right='-1px'
                p='4px'
                fontSize='xs'
                fontWeight='bold'
                lineHeight='none'
                color='red.100'
                transform='translate(50%,-50%)'
                bg='red.600'
                rounded='full'
              />
            </>
          }
        />
      </Flex>
    </>
  );
};

export default BadgeUnreadNotification;
