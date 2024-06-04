import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { useAnimation } from '@codechem/chakra-ui-animations';

const WithAnimation = () => {
  const animList = [
    'bounce-in',
    'bounce',
    'flash',
    'flip',
    'head-shake',
    'heart-beat',
    'jello',
    'pulse',
    'rotate-9',
    'rotate-scale',
    'rubber-band',
    'shake-x',
    'shake-y',
    'shake',
    'swing',
    'tada',
    'wobble',
    'shadow-drop-2',
    'shadow-drop',
    'shadow-inset',
    'hinge',
    'jack-in-the-box',
    'roll-in',
    'roll-out',
  ];
  return (
    <Container p={3} minH='100vh' margin='0 auto' alignItems='center' justifyContent='center' maxW='container.lg'>
      <SimpleGrid columns={{base: 4, sm: 4, md: 6, lg: 6}} spacing={4}>
        {animList.map((type, index) => (
          <Box
            key={index}
            bg='red.500'
            w="full" h="full"
            // animation={useAnimation(type, { duration: 4000, iterationCount: 'infinite' })}
          >
            <Heading>Open source rocks!</Heading>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default WithAnimation;
