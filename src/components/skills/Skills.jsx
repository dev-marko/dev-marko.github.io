import { useState, useEffect } from "react";

import { Box, Container, Flex, Heading, Text, VStack, Spinner } from "@chakra-ui/react";

import techSkillsList from "../../data/skills.json";
import TechSkillChart from "./TechSkillChart";

const Skills = () => {

    const [techSkills, setTechSkills] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTechSkills(techSkillsList);
        if (techSkills) {
            setLoading(false);
        }
    }, [techSkills]);

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
            <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 4 }}>
                <VStack w={'full'} align={'start'}>
                    <Heading variant={'primary'} size={{ base: 'lg', md: 'xl' }}>Technical Skills</Heading>
                    {
                        loading ?
                            (
                                <Spinner />
                            )
                            :
                            (

                                techSkills.map((item) => {
                                    return <TechSkillChart tech={item.tech} knowledge={item.knowledge} />
                                })

                            )
                    }
                    <Flex flexWrap={'wrap'}>
                        <Text pt={4}>
                            I'm also familiar with the following:
                            PostgreSQL, SQLite, H2, Firebase, Git & Github, Thymeleaf, ChakraUI,
                            Postman, Cypress, JUnit, NUnit, Moq, Mockito, PiTest, Stryker.
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