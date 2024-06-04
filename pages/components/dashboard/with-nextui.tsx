import { Box, Flex, Heading, Link } from '@chakra-ui/react';

import CardAgents from '@/preview/card/dashboard/agents';
import CardBalance1 from '@/preview/card/dashboard/balance1';
import CardBalance2 from '@/preview/card/dashboard/balance2';
import CardBalance3 from '@/preview/card/dashboard/balance3';
import CardTransactions from '@/preview/card/dashboard/transactions';
import NextLink from 'next/link';

const DashboardWithNextUi = () => {
  return (
    <Box h='full' overflow={'hidden'}>
      <Flex gap={8} pt={5} height='fit-content' flexWrap={'wrap'} justify={'center'}>
        <Flex px={12} mt={8} gap={12} direction={'column'}>
          {/* Card Section Top */}
          <Box>
            <Heading as='h3' textAlign={{ base: 'center', sm: 'inherit' }}>
              Available Balance
            </Heading>
            <Flex
              gap={10}
              flexWrap={{ base: 'wrap', sm: 'nowrap', lg: 'wrap', xl: 'wrap' }}
              justifyContent='center'
              direction={'row'}
            >
              <CardBalance1 />
              <CardBalance2 />
              <CardBalance3 />
            </Flex>
          </Box>

          {/* Chart */}
          <Box>
            <Heading as='h3' textAlign={{ base: 'center', sm: 'inherit' }}>
              Statistics
            </Heading>
            <Box
              css={{
                width: '100%',
                backgroundColor: '$accents0',
                boxShadow: '$lg',
                borderRadius: '$2xl',
                px: '$10',
                py: '$10',
              }}
            >
              {/* <Chart /> */}
            </Box>
          </Box>
        </Flex>

        {/* Left Section */}
        <Box
          css={{
            px: '$12',
            mt: '$8',
            height: 'fit-content',
            '@xsMax': { px: '$10' },
            gap: '$6',
            overflow: 'hidden',
          }}
        >
          <Heading as='h3' textAlign={{ base: 'center', sm: 'inherit' }}>
            Section
          </Heading>
          <Flex
            direction={'column'}
            justify={'center'}
            css={{
              gap: '$8',
              flexDirection: 'row',
              flexWrap: 'wrap',
              '@sm': {
                flexWrap: 'nowrap',
              },
              '@lg': {
                flexWrap: 'nowrap',
                flexDirection: 'column',
              },
            }}
          >
            <CardAgents />
            <CardTransactions />
          </Flex>
        </Box>
      </Flex>

      {/* Table Latest Users */}
      <Flex
        direction={'column'}
        justify={'center'}
        css={{
          width: '100%',
          py: '$10',
          px: '$10',
          mt: '$8',
          '@sm': { px: '$20' },
        }}
      >
        <Flex justify={'between'} wrap={'wrap'}>
          <Heading as='h3' textAlign={{ base: 'center', sm: 'inherit' }}>
            Latest Users
          </Heading>
          <NextLink href='/accounts'>
            <Link display={'block'} color='primary' textAlign={{ base: 'center', lg: 'inherit' }}>
              View All
            </Link>
          </NextLink>
        </Flex>
        {/* <TableWrapper /> */}
      </Flex>
    </Box>
  );
};

export default DashboardWithNextUi;
