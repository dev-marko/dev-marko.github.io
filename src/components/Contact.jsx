import { Container, Flex, Heading, Box, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container
      display={'flex'}
      flexDirection={'column'}
      maxW="container.xl"
      mt={{ base: 8, md: 10 }}
      gap={{ base: 8, md: 8 }}
    >
      <Flex flexDirection={'column'} gap={{ base: 2, md: 4 }}>
        <Box>
          <Heading variant={'primary'} size={{ base: 'xl', md: '2xl' }}>Contact</Heading>
          <Text>
            Let's chat! Feel free to contact me via the form below or on any of the social
            media platforms I use. You can find links to them at the top of my page. 💬🤝🏻
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}

export default Contact;