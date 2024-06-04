import PricingThreeTierWithEmphasized from '@/preview/pricing/three-tier-with-emphasized';
import PricingThreeTierWithToggle from '@/preview/pricing/three-tier-with-toggle';
import PricingTwoSimpleTier from '@/preview/pricing/two-simple-tier';
import PricingWithDetail from '@/preview/pricing/with-detail';
import PricingWithExtraTier from '@/preview/pricing/with-extra-tier';
import PricingWithInfo from '@/preview/pricing/with-info';
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

const PricingPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize' mb={5} borderBottomWidth={1} pb={4}>
        Pricing
      </Heading>
      <Box py={8}>
        <LineWrap title='With info'>
          <PricingWithInfo />
        </LineWrap>

        <LineWrap title='With defail'>
          <PricingWithDetail />
        </LineWrap>

        <LineWrap title='Two simple tier'>
          <PricingTwoSimpleTier />
        </LineWrap>

        <LineWrap title='With extra tier'>
          <PricingWithExtraTier />
        </LineWrap>

        <LineWrap title='Three tier with emphasized'>
          <PricingThreeTierWithEmphasized />
        </LineWrap>

        <LineWrap title='Three tier with toggle'>
          <PricingThreeTierWithToggle />
        </LineWrap>
      </Box>
    </Box>
  );
};

export default PricingPage;
