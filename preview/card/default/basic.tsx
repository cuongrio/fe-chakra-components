import { Card, CardBody, Text } from '@chakra-ui/react';

const CardBasic = () => {
  return (
    <Card bgColor='white'>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
  );
};

export default CardBasic;
