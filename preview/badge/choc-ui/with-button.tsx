import { Flex, Heading, Icon, IconButton, Text } from '@chakra-ui/react';
import { AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';

const BadgeWithButton = () => {
  return (
    <>
      <Heading as='h4' size='md' mt={8} mb={4}>
        With button
      </Heading>
      <Flex w='full' alignItems='center'>
        <IconButton
          aria-label='label'
          isRound
          size='md'
          icon={
            <>
              <AiOutlineShoppingCart />
              <Text
                pos='absolute'
                top='-1px'
                right='-1px'
                px={2}
                py={1}
                fontSize='xs'
                fontWeight='bold'
                lineHeight='none'
                color='red.100'
                transform='translate(50%,-50%)'
                bg='red.600'
                rounded='full'
              >
                99
              </Text>
            </>
          }
        />

        <IconButton
          aria-label='label'
          size='md'
          isRound
          ml={8}
          icon={
            <>
              <AiOutlineMessage />
              <Text
                pos='absolute'
                top='-1px'
                right='-1px'
                px={2}
                py={1}
                fontSize='xs'
                fontWeight='bold'
                lineHeight='none'
                color='red.100'
                transform='translate(50%,-50%)'
                bg='red.600'
                rounded='full'
              >
                99
              </Text>
            </>
          }
        />
      </Flex>
    </>
  );
};

export default BadgeWithButton;
