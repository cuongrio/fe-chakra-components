import { Button, Container, Divider, Heading, Link, Text, useColorMode } from '@chakra-ui/react';

import MultiContainer from '@/preview/layout/container/multi-part/multi-container';

const MultipartContainer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <main>
      <Button position='fixed' right='1rem' top='1rem' onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <Container>
        <Heading as='h1'>Chakra UI: Advanced Multipart Components</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This example page showcases a custom made Container component that supports light/dark mode, variants and
          color schemes. Its two parts (Outer and Inner) and thus supports fullbleed layouts, normal constrained ones
          and different styles for both containers.
        </Text>
        <Text sx={{ mb: 3 }}>
          To learn more about this head to the long in-depth explanation:{' '}
          <Link
            fontWeight='bold'
            href='https://www.lekoarts.de/react/how-to-build-an-advanced-multipart-component-with-chakra-ui'
          >
            How To Build an Advanced Multipart Component with Chakra UI
          </Link>
        </Text>
        <Text>
          Created by{' '}
          <Link fontWeight='bold' href='https://www.lekoarts.de'>
            lekoarts.de
          </Link>
          . Read the source code on{' '}
          <Link fontWeight='bold' href='https://www.github.com/LekoArts/chakra-ui-advanced-multipart-components'>
            GitHub
          </Link>
          .
        </Text>
      </Container>
      <Divider />
      <MultiContainer>
        <Heading as='h2'>No Variant / No Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has no variant set and also no color scheme. The size is also not set.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer variant='solid'>
        <Heading as='h2'>Solid Variant / Default Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the solid variant set and also uses the default color scheme &quot;gray&quot;. The size is
          not set.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer variant='solid' colorScheme='purple'>
        <Heading as='h2'>Solid Variant / Purple Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the solid variant set and also uses the purple color scheme. The size is not set.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer variant='ghost' colorScheme='blue'>
        <Heading as='h2'>&quot;Ghost&quot; Variant / &quot;Blue&quot; Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the &quot;ghost&quot; variant set and also uses the &quot;blue&quot; color scheme. The size
          is not set.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer variant='gradient' colorScheme='orange'>
        <Heading as='h2'>&quot;Gradient&quot; Variant / &quot;Orange&quot; Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the &quot;gradient&quot; variant set and also uses the &quot;Orange&quot; color scheme. The
          size is not set.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer size='prose'>
        <Heading as='h2'>No Variant / No Color Scheme / &quot;Prose&quot; Size</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has no variant set and also no color scheme. The size is set to &quot;prose&quot;.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer variant='ghost' size='3/4'>
        <Heading as='h2'>&quot;Ghost&quot; Variant / No Color Scheme / &quot;3/4&quot; Size</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the &quot;ghost&quot; variant set and also no color scheme. The size is set to
          &quot;3/4&quot; which equals 75%.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
    </main>
  );
};

export default MultipartContainer;
