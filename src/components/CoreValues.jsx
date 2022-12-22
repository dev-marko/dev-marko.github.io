import { Container, Flex, Box, Heading, VStack, Text } from "@chakra-ui/react";

const CoreValues = () => {
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
                    <Heading variant={'primary'} size={{ base: 'xl', md: '2xl' }}>My Core values</Heading>
                </Box>
                <Text fontSize='md'>
                    These are fundamental beliefs and principles that I believe a person (and organization) should try to possess.
                </Text>
            </Flex>
            <Flex flexDirection={{base: 'column', md: 'row'}} align={'center'} gap={2} justify={'space-evenly'}>
                <VStack align={{base: 'center', md: 'start'}}>
                    <Heading variant={'primary'}>Honesty</Heading>
                    <Heading variant={'primary'}>Respect</Heading>
                    <Heading variant={'primary'}>Discipline</Heading>
                </VStack>
                <VStack align={{base: 'center', md: 'start'}}>
                    <Heading variant={'primary'}>Fairness</Heading>
                    <Heading variant={'primary'}>Persistence</Heading>
                    <Heading variant={'primary'}>Constructive Criticism</Heading>
                </VStack>
            </Flex>
        </Container>
    );
}

export default CoreValues;