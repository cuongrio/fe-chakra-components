import CardArticle from '@/preview/card/choc-ui/article';
import CardArticleWithIcon from '@/preview/card/choc-ui/article-with-icon';
import CardArticleWithImage from '@/preview/card/choc-ui/article-with-image';
import CardParagraphWithImage from '@/preview/card/choc-ui/paragraph-with-image';
import CardProduct from '@/preview/card/choc-ui/product';
import CardProductEvaluation from '@/preview/card/choc-ui/product-evaluation';
import CardProductEvaluation2 from '@/preview/card/choc-ui/product-evaluation-2';
import CardSimpleProduct from '@/preview/card/choc-ui/simple-product';
import CardTestimonial from '@/preview/card/choc-ui/testimonial';
import CardUser from '@/preview/card/choc-ui/user';
import CardUserLessDetail from '@/preview/card/choc-ui/user-less-detail';
import CardUserMoreDetail from '@/preview/card/choc-ui/user-more-detail';
import CardAgents from '@/preview/card/dashboard/agents';
import CardBalance1 from '@/preview/card/dashboard/balance1';
import CardBalance2 from '@/preview/card/dashboard/balance2';
import CardBalance3 from '@/preview/card/dashboard/balance3';
import CardTransactions from '@/preview/card/dashboard/transactions';
import CardBasic from '@/preview/card/default/basic';
import CardDefaultHorizontal from '@/preview/card/default/horizontal';
import CardWithDeliver from '@/preview/card/default/with-deliver';
import CardDefaultWithImage from '@/preview/card/default/with-image';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const LineWrap = ({ children, title }) => {
  return (
    <Box borderRadius='md' borderWidth={1} mb={10}>
      <Box p={2.5} borderBottomWidth={1}>
        <Text>{title}</Text>
      </Box>
      <Box p={4} bg='#edf3f8' _dark={{ bg: '#111' }} mx='auto' alignItems='center'>
        {children}
      </Box>
    </Box>
  );
};

const CardPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <Heading color='blue.500' as='h1' textTransform='capitalize'>
        Card
      </Heading>
      <Box py={8}>
        <LineWrap title='Default'>
          <SimpleGrid alignItems='flex-start' columns={[2, null, 3]} spacing='40px'>
            <CardBasic />
            <CardWithDeliver />
            <CardDefaultWithImage />
            <CardDefaultHorizontal />
          </SimpleGrid>
        </LineWrap>

        <LineWrap title='Agents'>
          <Flex gap={6}>
            <CardAgents />
            <CardTransactions />
          </Flex>
        </LineWrap>

        <LineWrap title='Balance'>
          <Flex gap={6}>
            <CardBalance1 />
            <CardBalance2 />
            <CardBalance3 />
          </Flex>
        </LineWrap>

        <LineWrap title='Article'>
          <Flex gap={6} alignItems='flex-start'>
            <CardArticle />
            <CardArticleWithIcon />
            <CardArticleWithImage />
          </Flex>
        </LineWrap>

        <LineWrap title='Paragraph'>
          <CardParagraphWithImage />
        </LineWrap>

        <LineWrap title='Product'>
          <SimpleGrid alignItems='flex-start' columns={[2, null, 3]} spacing='40px'>
            <CardProduct />
            <CardProductEvaluation />
            <CardProductEvaluation2 />
            <CardSimpleProduct />
          </SimpleGrid>
        </LineWrap>

        <LineWrap title='Testimonial'>
          <CardTestimonial />
        </LineWrap>

        <LineWrap title='User'>
          <SimpleGrid alignItems='flex-start' columns={[2, null, 3]} spacing='40px'>
            <CardUser />
            <CardUserLessDetail />
            <CardUserMoreDetail />
          </SimpleGrid>
        </LineWrap>
      </Box>
    </Box>
  );
};

export default CardPage;
