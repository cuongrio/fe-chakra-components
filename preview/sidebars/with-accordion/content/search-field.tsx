import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input, useColorModeValue as mode, InputGroupProps } from '@chakra-ui/react';

const SearchField = (props: InputGroupProps) => {
  return (
    <InputGroup {...props}>
      <InputLeftElement pointerEvents='none'>
        <SearchIcon opacity={0.82} />
      </InputLeftElement>
      <Input
        placeholder='Search'
        background={mode('gray.50', 'gray.700')}
        focusBorderColor={mode('teal.500', 'teal.300')}
        _placeholder={{ color: mode('black', 'white') }}
      />
    </InputGroup>
  );
};

export default SearchField;
