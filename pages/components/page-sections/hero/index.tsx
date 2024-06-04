import HeroKuttySignupForm from '@/preview/hero/kutty-signup-form';
import HeroSimpleCentered from '@/preview/hero/simple-centered';
import HeroSimpleCentered2 from '@/preview/hero/simple-centered-2';
import HeroSplit from '@/preview/hero/split';
import HeroWithAngledImage from '@/preview/hero/with-angled-image';
import HeroWithAppScreenShot from '@/preview/hero/with-app-screenshot';
import HeroWithBgImage from '@/preview/hero/with-background-image';
import HeroWithSignup from '@/preview/hero/with-signup';
import { Box, Heading } from '@chakra-ui/react';

const HeroPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize' mb={5} borderBottomWidth={1} pb={4}>
        Heroes
      </Heading>
      <Box w='full'>
        <HeroWithSignup />
        <HeroSimpleCentered />
        <HeroSimpleCentered2 />
        <HeroSplit />
        <HeroWithAppScreenShot />
        <HeroKuttySignupForm />
        <HeroWithAngledImage />
        <HeroWithBgImage />
      </Box>
    </Box>
  );
};

export default HeroPage;
