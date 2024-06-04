import { ChevronDownIcon, DragHandleIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Text,
  Button,
  Heading,
  Flex,
  Box,
  VStack,
  Portal,
  BoxProps,
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

const companyList = [
  {
    code: 1,
    name: 'Facebook',
    location: 'San Fransico, CA',
    logo: <DragHandleIcon />,
  },
  {
    code: 2,
    name: 'Instagram',
    location: 'Austin, Tx',
    logo: <DragHandleIcon />,
  },
  {
    code: 3,
    name: 'Twitter',
    location: 'Brooklyn, NY',
    logo: <DragHandleIcon />,
  },
  {
    code: 4,
    name: 'Acme Co.',
    location: 'Palo Alto, CA',
    logo: <DragHandleIcon />,
  },
];

const CompanyItem = ({ company }) => {
  return (
    <Flex alignItems='center'>
      <Box py={2} px={2.5} borderRadius='md'>
        {company.logo}
      </Box>
      <VStack align={'flex-start'} spacing={0} mx={2}>
        <Heading as='h3' fontSize='lg'>
          {company.name}
        </Heading>
        <Text fontSize='xs' color={'gray.300'}>
          {company.location}
        </Text>
      </VStack>
    </Flex>
  );
};

const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: 'Acme Co.',
    location: 'Palo Alto, CA',
    logo: <DragHandleIcon />,
  });
  var companyMap = new Map(companyList.map((i) => [i.code, i]));

  const onMenuChange = (code: number) => {
    var currentCompany = companyMap.get(code);
    setCompany(currentCompany);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bgColor='gray.100'
        px={4}
        rounded="md"
        py={2}
        height='unset'
        w='full'
        color='black'
        _hover={{
          bgColor: 'transparent',
          color: 'gray.300',
        }}
        _active={{
          bgColor: 'transparent',
          color: 'gray.300',
        }}
      >
        <CompanyItem company={company} />
      </MenuButton>

      <MenuList borderRadius='lg' boxShadow={'lg'}>
        {companyList.map((item, index) => (
          <MenuItem my={1} key={index} onClick={() => onMenuChange(item.code)}>
            <CompanyItem company={item} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CompaniesDropdown;
