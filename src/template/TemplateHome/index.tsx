import { Box, Button, Flex, Image, Text, theme } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';

export function TemplateHome() {
  const { data: session } = useSession();

  return (
    <>
      <Flex
        width="100%"
        height="4rem"
        align="center"
        justifyContent="space-between"
        borderBottom="1px"
        borderBottomColor="primary.400"
        paddingRight="3rem"
        paddingLeft="3rem"
      >
        <Flex alignItems="center">
          {session?.user?.image && (
            <Image
              src={session?.user?.image}
              alt={session?.user?.name as string}
              width="3rem"
              height="3rem"
              borderRadius="full"
              marginRight="1rem"
            />
          )}
          <Text fontSize="xl" color={theme.colors.gray['100']}>
            {' '}
            {session?.user?.name}
          </Text>
        </Flex>
        <Button
          onClick={() => signOut()}
          width="10rem"
          backgroundColor="secondary.500"
          _hover={{ backgroundColor: 'secondary.600' }}
        >
          SAIR
        </Button>
      </Flex>
    </>
  );
}
