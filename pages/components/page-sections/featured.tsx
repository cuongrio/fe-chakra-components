import FeaturedCentered22Grid from '@/preview/featured/centered-22-grid';
import FeaturedOffset22Grid from '@/preview/featured/offset-22-grid';
import FeaturedSideBySide from '@/preview/featured/side-by-side';
import FeaturedSimple3Column from '@/preview/featured/simple-3-column';
import FeaturedWithGridList from '@/preview/featured/with-grid-list';
import FeaturedWithList from '@/preview/featured/with-list';
import { Box, Heading, Text } from '@chakra-ui/react';

const LineWrap = ({ children, title }) => {
  return (
    <Box borderRadius='md' borderWidth={1} mb={10}>
      <Box p={2.5} borderBottomWidth={1}>
        <Text>{title}</Text>
      </Box>
      <Box mx='auto' alignItems='center'>
        {children}
      </Box>
    </Box>
  );
};

const FeaturedPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize' mb={5} borderBottomWidth={1} pb={4}>
        Features
      </Heading>
      <Box py={8}>
        <LineWrap title='Simple three column'>
          <FeaturedSimple3Column />
        </LineWrap>

        <LineWrap title='Centered tow column'>
          <FeaturedCentered22Grid />
        </LineWrap>

        <LineWrap title='With grid list'>
          <FeaturedWithGridList />
        </LineWrap>

        <LineWrap title='With list'>
          <FeaturedWithList />
        </LineWrap>

        <LineWrap title='Offset two column'>
          <FeaturedOffset22Grid />
        </LineWrap>

        <LineWrap title='Side by side'>
          <FeaturedSideBySide />
        </LineWrap>
     
      </Box>
    </Box>
  );
};
export default FeaturedPage;
