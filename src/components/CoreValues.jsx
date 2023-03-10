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
                    <Heading variant={'primary'} size={{ base: 'xl', md: '2xl' }}>My Core Values</Heading>
                </Box>
                <Text fontSize='md'>
                    These are fundamental beliefs and principles that I believe a person (and organization) should try to possess.
                </Text>
            </Flex>
            <Flex flexDirection={{ base: 'column', md: 'row' }} align={{base: 'start', md: 'center'}} gap={2} justify={'space-evenly'}>
                <VStack align={'start'}>
                    <Heading variant={'primary'} size={{ base: 'md', md: 'lg' }}>● Honesty</Heading>
                    <Heading variant={'primary'} size={{ base: 'md', md: 'lg' }}>● Respect</Heading>
                    <Heading variant={'primary'} size={{ base: 'md', md: 'lg' }}>● Discipline</Heading>
                    <Heading variant={'primary'} size={{ base: 'md', md: 'lg' }}>● Kindness</Heading>
                </VStack>
                <VStack align={'start'}>
                    <Heading variant={'primary'} size={{ base: 'md', md: 'lg' }}>● Fairness</Heading>
                    <Heading variant={'primary'} size={{ base: 'md', md: 'lg' }}>● Persistence</Heading>
                    <Heading variant={'primary'} size={{ base: 'md', md: 'lg' }}>● Self-Awareness</Heading>
                    <Heading variant={'primary'} size={{ base: 'md', md: 'lg' }}>● Constructive Criticism</Heading>
                </VStack>
            </Flex>
        </Container>
    );
}

export default CoreValues;