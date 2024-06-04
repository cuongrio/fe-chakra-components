import CtabluePanelWithAppScreenShot from '@/preview/cta/brand-panel-with-app-screenshot';
import CtaSimpleCentered from '@/preview/cta/simple-centered';
import CtaSimpleJustified from '@/preview/cta/simple-justified';
import CtaSimpleStacked from '@/preview/cta/simple-stacked';
import CtaSplitWithImage from '@/preview/cta/split-with-image';
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

const CtaPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize' mt={6} mb={6} borderBottomWidth={1} pb={4}>
        Call to action
      </Heading>
      <Box w='full'>
        <LineWrap title='Simple Justified'>
          <CtaSimpleJustified />
        </LineWrap>

        <LineWrap title='Simple stacked'>
          <CtaSimpleStacked />
        </LineWrap>

        <LineWrap title='Simple centered'>
          <CtaSimpleCentered />
        </LineWrap>

        <LineWrap title='Split image'>
          <CtaSplitWithImage />
        </LineWrap>
        <LineWrap title='With app screenshot'>
          <CtabluePanelWithAppScreenShot />
        </LineWrap>
      </Box>
    </Box>
  );
};

export default CtaPage;
