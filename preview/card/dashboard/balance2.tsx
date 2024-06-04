import { Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import { RiCommunityLine } from 'react-icons/ri';

const CardBalance2 = () => {
  return (
    <Card maxWidth='375px' bgColor='blue.600' borderRadius='xl' px={6}>
      <CardBody py={10}>
        <Flex gap={5}>
          <RiCommunityLine color={'$accents9'} />
          <Flex direction={'column'}>
            <Text>Healt Insurance</Text>
            <Text fontSize='xs'>+2400 People</Text>
          </Flex>
        </Flex>
        <Flex gap={6} py={4} align={'center'}>
          <Text fontSize='xl' fontWeight={'semibold'}>
            $12,138
          </Text>
          <Text color='red.600' fontSize='xs'>
            + 4.5%
          </Text>
        </Flex>
        <Flex gap={12} align={'center'}>
          <Box>
            <Text fontSize='xs' color='green.600' fontWeight={'semibold'}>
              {'↓'}
            </Text>
            <Text fontSize='xs'>11,930 USD</Text>
          </Box>
          <Box>
            <Text fontSize='xs' color='red.600' fontWeight={'semibold'}>
              {'↑'}
            </Text>
            <Text fontSize='xs'>54,120 USD</Text>
          </Box>
          <Box>
            <Text fontSize='xs' color='green.600' fontWeight={'semibold'}>
              {'⭐'}
            </Text>
            <Text fontSize='xs'>150 VIP</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CardBalance2;
