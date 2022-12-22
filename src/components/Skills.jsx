import { Box, Container, Flex, Heading, Text, Progress, VStack } from "@chakra-ui/react";

const Skills = () => {

    return (
        <Container
            display={'flex'}
            flexDirection={'column'}
            maxW="container.xl"
            mt={{ base: 8, md: 10 }}
            gap={{ base: 8, md: 8 }}
        >
            <Box>
                <Heading variant={'primary'} size={{ base: 'xl', md: '2xl' }}>Skills</Heading>
            </Box>
            <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{base: 4}}>
                <VStack w={'full'} align={'start'}>
                    <Heading variant={'primary'} size={{ base: 'lg', md: 'xl' }}>Technical Skills</Heading>
                    <Box w={'25vh'}>
                        <Text fontSize={'lg'}>Java</Text>
                        <Progress value={95} colorScheme={'twitter'} borderRadius={5} bg={'brand.subtleShadow'} />
                    </Box>
                    <Box w={'25vh'}>
                        <Text fontSize={'lg'}>Spring Boot</Text>
                        <Progress value={95} colorScheme={'twitter'} borderRadius={5} bg={'brand.subtleShadow'} />
                    </Box>
                    <Box w={'25vh'}>
                        <Text fontSize={'lg'}>C#</Text>
                        <Progress value={90} colorScheme={'twitter'} borderRadius={5} bg={'brand.subtleShadow'} />
                    </Box>
                    <Box w={'25vh'}>
                        <Text fontSize={'lg'}>.NET (MVC 5, WebAPI)</Text>
                        <Progress value={90} colorScheme={'twitter'} borderRadius={5} bg={'brand.subtleShadow'} />
                    </Box>
                    <Box w={'25vh'}>
                        <Text fontSize={'lg'}>C/C++</Text>
                        <Progress value={70} colorScheme={'twitter'} borderRadius={5} bg={'brand.subtleShadow'} />
                    </Box>
                    <Box w={'25vh'}>
                        <Text fontSize={'lg'}>JavaScript</Text>
                        <Progress value={85} colorScheme={'twitter'} borderRadius={5} bg={'brand.subtleShadow'} />
                    </Box>
                    <Box w={'25vh'}>
                        <Text fontSize={'lg'}>React</Text>
                        <Progress value={80} colorScheme={'twitter'} borderRadius={5} bg={'brand.subtleShadow'} />
                    </Box>
                    <Box w={'25vh'}>
                        <Text fontSize={'lg'}>Flutter</Text>
                        <Progress value={40} colorScheme={'twitter'} borderRadius={5} bg={'brand.subtleShadow'} />
                    </Box>
                    <Flex flexWrap={'wrap'} w={'50vh'}>
                        <Text pt={4}>
                            I'm also familiar with the following: 
                            PostgreSQL, SQLite, H2, Git & Github, Thymeleaf, Postman, ChakraUI,
                            Cypress
                        </Text>
                    </Flex>
                </VStack>
                <VStack w={'full'} align={'start'}>
                    <Heading variant={'primary'} size={{ base: 'lg', md: 'xl' }}>Interpersonal Skills</Heading>
                    <VStack w={'full'} align={'start'}>
                        <Text fontSize={'lg'}>● Leadership</Text>
                        <Text fontSize={'lg'}>● Teamwork</Text>
                        <Text fontSize={'lg'}>● Management</Text>
                        <Text fontSize={'lg'}>● Communication</Text>
                        <Text fontSize={'lg'}>● Negotiation</Text>
                        <Text fontSize={'lg'}>● Public Speaking/Presentation skills</Text>
                        <Text fontSize={'lg'}>● Flexible Approach</Text>
                        <Text fontSize={'lg'}>● Working with Adolescents</Text>
                    </VStack>
                </VStack>
            </Flex>
        </Container>
    );
}

export default Skills;