import {
    Box, Button, Drawer, DrawerContent, DrawerOverlay, Flex, Heading, Icon, IconButton, Image, Stack, Text, useColorModeValue, useDisclosure
} from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import { FiMenu } from 'react-icons/fi';
import { RiFlashlightFill } from 'react-icons/ri';
import SidebarContent from './content';

const SidebarSimple = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box
      as="section"
      bg={useColorModeValue('gray.50', 'gray.700')}
      minH="100vh"
    >
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          w="full"
          px="4"
          display={{ base: 'flex', md: 'none' }}
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit', 'gray.700')}
          bg={useColorModeValue('white', 'gray.800')}
          justify={{ base: 'space-between', md: 'flex-end' }}
          boxShadow="lg"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="md"
          />

          <Flex align="center">
            <Icon as={RiFlashlightFill} h={8} w={8} />
          </Flex>
        </Flex>

        <Box
          as="main"
          p={14}
          minH="30rem"
          bg={useColorModeValue('auto', 'gray.800')}
        >
          <Stack
            spacing={10}
            direction={{ base: 'column', sm: 'row' }}
            alignItems="center"
            justifyContent="center"
            h="100%"
          >
            <Stack spacing={8}>
              <Box>
                <Heading color="green.400" fontSize="3xl">
                  Point of sale
                </Heading>
                <Text fontSize="md" color="gray.500">
                  Manage your inventory and sale effeciently.
                </Text>
              </Box>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify="center"
              >
                <Button
                  rounded="full"
                  bg="green.400"
                  color="white"
                  _hover={{
                    bg: 'green.500',
                  }}
                >
                  Stocks
                </Button>
                <Button rounded="full">Vendors</Button>
              </Stack>
            </Stack>

            {/* <Image
              alt="Homepage Image"
              objectFit="cover"
              width="60vh"
              src="/images/empty.jpg"
              borderRadius="xl"
            /> */}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarSimple;
