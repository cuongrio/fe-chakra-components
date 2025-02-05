import {
    Button, Card,
    CardBody,
    CardFooter, Heading, Image, Stack, Text
} from '@chakra-ui/react';
const CardDefaultHorizontal = () => {
  return (
    <Card bgColor="white"
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>The perfect latte</Heading>
  
        <Text py='2'>
          Caffè latte is a coffee beverage of Italian origin made with espresso
          and steamed milk.
        </Text>
      </CardBody>
  
      <CardFooter>
        <Button variant='solid' colorScheme='blue'>
          Buy Latte
        </Button>
      </CardFooter>
    </Stack>
  </Card>
  );
};

export default CardDefaultHorizontal;
