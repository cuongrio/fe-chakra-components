import {
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { MotionBox } from '@/components/motion';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

const ColorModeSwitcher: FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const mode = useColorModeValue('dark', 'light');

  const handleClick = () => {
    toggleColorMode();
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <MotionBox
        onClick={handleClick}
        key={mode === 'dark' ? 'dark-icon' : 'light-icon'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        cursor="pointer"
        fontSize="3xl"
        width="2rem"
      >
        {mode === 'dark' ? '🌤' : '🌙'}
      </MotionBox>
    </AnimatePresence>
  );
};

export default ColorModeSwitcher;
