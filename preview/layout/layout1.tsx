import { Box, Center, Grid, GridItem, Heading } from '@chakra-ui/react';

const Layout1 = () => {
  return ( 
      <Grid mb={4}
        h='100px'
        templateRows={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
        }}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1} bg='blue'>
          <Center>
            <Heading>NAV</Heading>
          </Center>
        </GridItem>
        <GridItem colSpan={2} bg='green'>
          <Center height='100px' overflowY='auto'>
            <Heading>CONTENT</Heading>
          </Center>
        </GridItem>
        <GridItem colSpan={1} bg='red'>
          <Center>
            <Heading>WIDGET</Heading>
          </Center>
        </GridItem>
      </Grid> 
  );
};

export default Layout1;
