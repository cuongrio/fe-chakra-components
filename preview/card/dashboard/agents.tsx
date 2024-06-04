import { Avatar, AvatarGroup, Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react';

const pictureUsers = [
  'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  'https://i.pravatar.cc/150?u=a04258114e29026702d',
  'https://i.pravatar.cc/150?u=a048581f4e29026701d',
  'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
  'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  'https://i.pravatar.cc/150?u=a04258114e29026702d',
];

const CardAgents = () => {
  return (
    <Card
      py={10}
      bgColor={'blue.200'}
      height='275px'
      maxWidth='375px'
      borderRadius='xl'
      alignContent='center'
      justifyContent='center'
      px='6'
      gap={4}
    >
      <CardBody gap={4} py={10}>
        <Flex w='full' justify={'center'} justifyContent='center'>
          <Flex
            align='center'
            alignItems='center'
            direction={'row'}
            justify={'center'}
            width='150px'
            borderWidth='2.5px'
            borderStyle='dashed'
            borderRadius='base'
          >
            {'⭐'}
            <Flex direction={'column'} p={2}>
              <Heading as={'h3'} fontSize='2xl'>
                Agents
              </Heading>
            </Flex>
          </Flex>
        </Flex>
        <Flex gap={6} py={4} align={'center'}>
          <Text fontSize='xs'>Meet your agenda and see their ranks to get the best results</Text>
        </Flex>
        <Flex py={4} align={'center'} justify={'center'}>
          <AvatarGroup max={3}>
            {pictureUsers.map((url, index) => (
              <Avatar key={index} size='lg' cursor='pointer' src={url} borderWidth={1} color='gradient' />
            ))}
          </AvatarGroup>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CardAgents;
