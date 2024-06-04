import RippedButton from '@/preview/forms/button/ripped-button';
import { Box } from '@chakra-ui/react';

const Button = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <RippedButton />
    </Box>
  );
};

export default Button;
