import CarouselSimple from '@/preview/carousel/simple';
import CarouselWithCaption from '@/preview/carousel/with-caption';
import CarouselWithControl from '@/preview/carousel/with-control';
import CarouselWithIndicator from '@/preview/carousel/with-indicator';
import { Box, Heading, Text } from '@chakra-ui/react';

const LineWrap = ({ children, title }) => {
  return (
    <Box borderRadius='md' borderWidth={1} mb={10}>
      <Box p={2.5} borderBottomWidth={6} borderColor='blue.500'>
        <Text>{title}</Text>
      </Box>
      <Box mx='auto' alignItems='center'>
        {children}
      </Box>
    </Box>
  );
};

const CarouselPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize' mb={5} borderBottomWidth={1} pb={4}>
        Carousel
      </Heading>
      <Box py={8}>
        <LineWrap title='Simple'>
          <CarouselSimple />
        </LineWrap>

        <LineWrap title='With caption'>
          <CarouselWithCaption />
        </LineWrap>

        <LineWrap title='With controls'>
          <CarouselWithControl />
        </LineWrap>

        <LineWrap title='With indicator'>
          <CarouselWithIndicator />
        </LineWrap>
      </Box>
    </Box>
  );
};

export default CarouselPage;
