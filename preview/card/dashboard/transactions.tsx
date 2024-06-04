import { Avatar, Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react';

const CardTransactions = () => {
  return (
    <Card maxWidth='500px' bgColor='blue.200' justifyContent='start' borderRadius='xl' px={6}>
      <CardBody py={10}>
        <Flex gap={5} justify={'center'}>
          <Heading as='h3' textAlign='center'>
            Latest Transactions
          </Heading>
        </Flex>
        <Flex gap={6} py={4} direction={'column'}>
          <Flex gap={6} alignItems="center" alignContent="flex-start" justify='between'>
            <Avatar
              size='lg'
              cursor='pointer'
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
              borderWidth={1}
              color='gradient'
            />
            <Text fontWeight={'semibold'}>Jose Perez</Text>
            <Text color='gree.600' fontSize={'xs'}>
              4500 USD
            </Text>
            <Text color="white" fontSize={'xs'}>
              9/20/2021
            </Text>
          </Flex>

          <Flex gap={6} alignItems="center" justify='between'>
            <Avatar
              size='lg'
              cursor='pointer'
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
              borderWidth={1}
              color='gradient'
            />
            <Text fontWeight={'semibold'}>Andrew Steven</Text>
            <Text color='green.600' fontSize={'xs'}>
              4500 USD
            </Text>
            <Text color="white" fontSize={'xs'}>
              9/20/2021
            </Text>
          </Flex>
          <Flex gap={6} alignItems="center" justify='between'>
            <Avatar
              size='lg'
              cursor='pointer'
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
              borderWidth={1}
              color='gradient'
            />
            <Text fontWeight={'semibold'}>Ruben Garcia</Text>
            <Text color='green.600' fontSize={'xs'}>
              1500 USD
            </Text>
            <Text color="white" fontSize={'xs'}>
              2/20/2022
            </Text>
          </Flex>
          <Flex gap={6} alignItems="center" justify='between'>
            <Avatar
              size='lg'
              cursor='pointer'
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
              borderWidth={1}
              color='gradient'
            />
            <Text fontWeight={'semibold'}>Perla Garcia</Text>
            <Text color='green.600' fontSize={'xs'}>
              200 USD
            </Text>
            <Text color="white" fontSize={'xs'}>
              3/20/2022
            </Text>
          </Flex>
          <Flex gap={6} align={'center'} justify='between'>
            <Avatar
              size='lg'
              cursor='pointer'
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
              borderWidth={1}
              color='gradient'
            />
            <Text fontWeight={'semibold'}>Mathew Funez</Text>
            <Text color='green.600' fontSize={'xs'}>
              2444 USD
            </Text>
            <Text color="white" fontSize={'xs'}>
              5/20/2022
            </Text>
          </Flex>
          <Flex gap={6} alignItems="center" justify='between'>
            <Avatar
              size='lg'
              cursor='pointer'
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
              borderWidth={1}
              color='gradient'
            />
            <Text fontWeight={'semibold'}>Carlos Diaz</Text>
            <Text color='green.600' fontSize={'xs'}>
              3000 USD
            </Text>
            <Text color='blue.200' fontSize={'xs'}>
              12/20/2022
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CardTransactions;
