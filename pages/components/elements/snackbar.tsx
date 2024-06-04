import SnackBar from '@/preview/snackbar';
import { Box } from '@chakra-ui/react';

const SnackbarPage = () => {
  return (
    <Box maxW={'container.xl'} p={10} mx='auto'>
      <SnackBar />
    </Box>
  );
};

export default SnackbarPage;
