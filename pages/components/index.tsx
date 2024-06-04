import { Box, Link, ListItem, SimpleGrid, Text, List, Heading, OrderedList } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ItemProps {
  title: string;
  href: string;
}

interface DataProps {
  title: string;
  items: ItemProps[];
}

const DATA_COMPONENTS: DataProps[] = [
  {
    title: 'elements',
    items: [
      {
        title: 'alert',
        href: '/components/elements/alert',
      },
      {
        title: 'badge',
        href: '/components/elements/badge',
      },
      {
        title: 'pagination',
        href: '/components/elements/pagination',
      },
      {
        title: 'snackbar',
        href: '/components/elements/snackbar',
      },
    ],
  },
  {
    title: 'typography',
    items: [
      {
        title: 'fonts',
        href: '/components/typography/fonts',
      },
    ],
  },
  {
    title: 'data display',
    items: [
      {
        title: 'avatar',
        href: '/components/data-display/avatar',
      },
      {
        title: 'badge',
        href: '/components/data-display/badge',
      },
      {
        title: 'tag',
        href: '/components/data-display/tag',
      },
      {
        title: 'card',
        href: '/components/data-display/card',
      },
      {
        title: 'collapse',
        href: '/components/data-display/collapse',
      },
      {
        title: 'code',
        href: '/components/data-display/code',
      },
      {
        title: 'carousel',
        href: '/components/data-display/carousel',
      },
      {
        title: 'list',
        href: '/components/data-display/list',
      },
      {
        title: 'grid',
        href: '/components/data-display/grid',
      },
      {
        title: 'table',
        href: '/components/data-display/table',
      },
    ],
  },
  {
    title: 'page sections',
    items: [
      {
        title: 'headers',
        href: '/components/page-sections/header',
      },
      {
        title: 'footers',
        href: '/components/page-sections/footer',
      },
      {
        title: 'navigation',
        href: '/components/page-sections/navigation',
      },
      {
        title: 'sidebars',
        href: '/components/page-sections/sidebar',
      },
      {
        title: 'call to action',
        href: '/components/page-sections/cta',
      },
      {
        title: 'featured',
        href: '/components/page-sections/featured',
      },
      {
        title: 'heroes',
        href: '/components/page-sections/hero',
      },
      {
        title: 'pricing',
        href: '/components/page-sections/pricing',
      },
    ],
  },
  {
    title: 'navigation',
    items: [
      {
        title: 'navbar',
        href: '/components/navigation/navbar',
      },
      {
        title: 'breadcrumb',
        href: '/components/navigation/breadcrumb',
      },
      {
        title: 'link',
        href: '/components/navigation/link',
      },
    ],
  },
  {
    title: 'forms',
    items: [
      {
        title: 'button',
        href: '/components/forms/button',
      },
      {
        title: 'checkbox',
        href: '/components/forms/checkbox',
      },
      {
        title: 'layout',
        href: '/components/forms/layout',
      },
    ],
  },
];

const ComponentPage = () => {
  return (
    <Box maxW={'container.lg'} my={14} mx='auto'>
      <SimpleGrid columns={[2, null, 3]} spacing={10}>
        {DATA_COMPONENTS.map((data, dataIdx) => (
          <Box key={dataIdx}>
            <Heading fontSize='2xl' textTransform='uppercase' as='h1' mb={5} borderBottomWidth={1} pb={4}>
              {data.title}
            </Heading>

            <OrderedList mt={2} gap={4}>
              {data.items.map((item, itemIdx) => (
                <ListItem my={2} key={itemIdx}>
                  <NextLink href={item.href}>
                    <Link _hover={{ textDecoration: 'none', color: 'blue.600' }}>
                      <Text textTransform='capitalize'>{item.title}</Text>
                    </Link>
                  </NextLink>
                </ListItem>
              ))}
            </OrderedList>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ComponentPage;
