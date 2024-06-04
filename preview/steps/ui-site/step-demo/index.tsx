import { Code, Flex, Heading, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { clickableStepsExample } from '../code/clickable-steps';
import { customCheckIconExample } from '../code/custom-check-icon';
import { customIconsExample } from '../code/custom-icons';
import { descriptionsExample } from '../code/descriptions';
import { horizontalExample } from '../code/horizontal';
import { sizesExample } from '../code/sizes';
import { statesExample } from '../code/states';
import { verticalExample } from '../code/vertical';
import { verticalLabelsExample } from '../code/vertical-labels';
import Section from '../section';
import ClickableSteps from './clickable-steps';
import CustomCheckIcon from './custom-check-icon';
import CustomIcons from './custom-icons';
import Descriptions from './descriptions';
import Horizontal from './horizontal';
import Sizes from './sizes';
import States from './states';
import Vertical from './vertical';
import VerticalLabels from './vertical-labels';

type StepsDemoProps = {};

const StepsDemo = (props: StepsDemoProps): JSX.Element => {
  return (
    <VStack width='100%' p={4}>
      <Flex mb={4} align='center' width='100%' justify='flex-start'>
        <Image alt='image' mt='8px' width='36px' height='36px' rounded='full' src='/images/54212428.png' />
        <Heading ml={4} textAlign='left'>
          chakra-ui-steps
        </Heading>
        <Code display={['none', 'block']} fontSize='lg' ml='auto'>
          v1.0.0
        </Code>
      </Flex>
      <Flex flexDir='column' align='flex-start' justify='flex-start' width='100%'>
        <Text>A fully customisable Stepper component designed to work seamlessly with Chakra UI.</Text>
        <Text mt={4} fontWeight='bold'>
          NOTE: v1.5+ requires Chakra UI v1.6.7 or higher.
        </Text>
      </Flex>
      <Section
        title='Horizontal'
        codeString={horizontalExample}
        subTitle={<Text textAlign='left'>A simple horizontal stepper.</Text>}
      >
        <Horizontal />
      </Section>
      <Section
        title='Vertical'
        codeString={verticalExample}
        subTitle={
          <Text>
            By using the <Code>orientation</Code> prop you are able to switch between <Code>horizontal</Code> (default)
            and <Code>vertical</Code> layouts. By default, when in mobile view the <Code>Steps</Code> component will
            switch to <Code>vertical</Code> orientation. To disable this behaviour you can use the{' '}
            <Code>responsive</Code> prop.
          </Text>
        }
      >
        <Vertical />
      </Section>
      <Section
        title='Descriptions'
        codeString={descriptionsExample}
        subTitle={
          <Text textAlign='left'>
            The <Code>Step</Code> component also accepts a <Code>description</Code> prop which can be used to provide
            some extra information about the step.
          </Text>
        }
      >
        <Descriptions />
      </Section>
      <Section
        title='Custom Icons'
        codeString={customIconsExample}
        subTitle={
          <Text textAlign='left'>
            If you want to show custom icons instead of the default numerical indicators, you can do so by using the{' '}
            <Code>icon</Code> prop on the <Code>Step</Code> component.
          </Text>
        }
      >
        <CustomIcons />
      </Section>
      <Section
        title='Label Orientation'
        codeString={verticalLabelsExample}
        subTitle={
          <Text textAlign='left'>
            If you would like the labels to be positioned below the step icons you can do so using the{' '}
            <Code>labelOrientation</Code> prop on the <Code>Steps</Code> component.
          </Text>
        }
      >
        <VerticalLabels />
      </Section>
      <Section
        title='Custom Check Icon'
        codeString={customCheckIconExample}
        subTitle={
          <Text textAlign='left'>
            If you want to show a custom check icon instead of the default, you can do so by using the{' '}
            <Code>checkIcon</Code> prop on the <Code>Steps</Code> component.
          </Text>
        }
      >
        <CustomCheckIcon />
      </Section>
      <Section
        title='States'
        codeString={statesExample}
        subTitle={
          <Text textAlign='left'>
            Sometimes it is useful to show visual feedback to the user depending on some asynchronous logic. In this
            case we can use the <Code>state</Code> prop.
          </Text>
        }
      >
        <States />
      </Section>
      <Section
        title='Clickable Steps'
        codeString={clickableStepsExample}
        subTitle={
          <Text textAlign='left'>
            By providing the <Code>onClickStep</Code> prop the steps will become clickable.
          </Text>
        }
      >
        <ClickableSteps />
      </Section>
      <Section
        title='Sizes'
        codeString={sizesExample}
        subTitle={
          <Text textAlign='left'>
            By using the <Code>size</Code> prop you are able to quickly and easily adjust the general sizing of the
            component.
          </Text>
        }
      >
        <Sizes />
      </Section>
      <Flex p={8}>
        <HStack>
          <Text>Made with</Text>
          <Image width='32px' height='32px' rounded='full' src='/images/heart.png' alt='heart.png' />
          <Text>by</Text>
          <Link target='_blank' href='#' rel='noopen noreferrer'>
            <Text fontWeight='bold'>Rio</Text>
          </Link>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default StepsDemo;
