import { Avatar, Badge, Box, Text, Flex, Heading, Stack } from '@chakra-ui/react';

const BadgeDefaultComposition = () => {
  return (
    <>
      <Heading as='h4' size='md' mt={8} mb={4}>
        Composition
      </Heading>
      <Flex mb={4}>
        <Avatar src='https://bit.ly/sage-adebayo' />
        <Box ml='3'>
          <Text fontWeight='bold'>
            Segun Adebayo
            <Badge ml='1' colorScheme='green'>
              New
            </Badge>
          </Text>
          <Text fontSize='sm'>UI Engineer</Text>
        </Box>
      </Flex>

      <Text fontSize='xl' fontWeight='bold'>
        Segun Adebayo
        <Badge ml='1' fontSize='0.8em' colorScheme='green'>
          New
        </Badge>
      </Text>
    </>
  );
};

export default BadgeDefaultComposition;
