import { Box, Flex, FlexProps, Icon, IconProps, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IconType } from 'react-icons';

interface Props {
  title: string;
  icon?: IconType;
  isActive?: boolean;
  href?: string;

  // style
  textSize?: string;
  textColor?: string;
  bgColor?: string;
  bgActiveColor?: string;
  px?: number;
  py?: number;
}

const NavItem = ({ icon, title, isActive, href = '', px, py, textSize, textColor, bgColor, bgActiveColor }: Props) => {
  const boxProps: FlexProps = isActive
    ? {
        color: textColor,
        bgColor: bgActiveColor,
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
    <NextLink href={href}>
      <Flex
        justifyContent='space-between'
        {...boxProps}
        py={py}
        px={px}
        w='full'
        alignItems='center'
        cursor='pointer'
        align={'center'}
      >
        <Flex w='full' alignItems='center' align={'center'}>
          <Icon as={icon} boxSize={5} mr={2} {...iconProps} />
          <Text fontSize={textSize}>{title}</Text>
        </Flex>
        <Box>
          <Text fontSize='xs' color={textColor} bgColor={bgActiveColor} borderRadius='lg' px={1.5}>
            15
          </Text>
        </Box>
      </Flex>
    </NextLink>
  );
};

export default NavItem;
