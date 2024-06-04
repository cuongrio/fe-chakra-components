import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, Collapse, Flex, Icon, IconProps, Text, useDisclosure } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  icon?: IconType;
  title: string;
  items: any[];

  // style
  textSize?: string;
  textColor?: string;
  bgColor?: string;
  bgActiveColor?: string;
  px?: number;
  py?: number;
}

const CollapseItems = ({ icon, items, title, px, py, textSize, textColor, bgColor, bgActiveColor }: Props) => {
  const { isOpen, onToggle } = useDisclosure();

  const buttonProps: ButtonProps = isOpen
    ? {
        color: textColor,
        _hover: {
          bgColor: bgActiveColor,
        },
      }
    : {
        color: textColor,
        bgColor: bgColor,
        _hover: {
          bgColor: bgActiveColor,
        },
      };

  const iconProps: IconProps = {
    color: textColor,
  };

  return (
    <>
      <Button variant='link' {...buttonProps} onClick={onToggle} cursor='pointer' rounded="none" fontWeight='normal'>
        <Flex w='full' alignItems='center' justifyContent='space-between' px={px} py={py}>
          <Flex w='full' alignItems='center' align={'center'}>
            <Icon as={icon} boxSize={5} mr={2} {...iconProps} />
            <Text fontSize={textSize}>{title}</Text>
          </Flex>
          <Icon as={ChevronDownIcon} boxSize={5} />
        </Flex>
      </Button>

      <Collapse in={isOpen} animateOpacity>
        {items.map((item, index) => (
          <Flex
            key={index}
            py={py}
            px={px}
            my={0}
            w='full'
            alignItems='center'
            cursor='pointer'
            align='center'
            color={textColor}
            _hover={{
              bgColor: bgActiveColor,
            }}
          >
            <Icon as={item.icon} boxSize={3} ml={1} mr={2} {...iconProps} />
            <Text fontSize={textSize}>{item.title}</Text>
          </Flex>
        ))}
      </Collapse>
    </>
  );
};

export default CollapseItems;
