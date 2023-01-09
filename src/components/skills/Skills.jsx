import { useState, useEffect } from "react";

import { Box, Container, Flex, Heading, Text, VStack, Spinner } from "@chakra-ui/react";

import comfortTechSkillsList from "../../data/comfort-skills.json";
import furtherDevelopingSkillsList from "../../data/further-developing-skills.json";
import TechSkill from "./TechSkill";

const Skills = () => {

    const [comfortTechSkills, setComfortTechSkills] = useState();
    const [developingTechSkills, setDevelopingTechSkills] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setComfortTechSkills(comfortTechSkillsList);
        setDevelopingTechSkills(furtherDevelopingSkillsList);
        if (comfortTechSkills && developingTechSkills) {
            setLoading(false);
        }
    }, [comfortTechSkills, developingTechSkills]);

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
                    <Heading variant={'primary'} size={'md'}>📖 Focused on further developing:</Heading>
                    {
                        loading ?
                            (
                                <Spinner />
                            )
                            :
                            (
                                developingTechSkills.map((item) => {
                                    return <TechSkill tech={item.tech} />
                                })

                            )
                    }
                    <Heading pt={3} variant={'primary'} size={'md'}>🛏️ Comfort zone:</Heading>
                    {
                        loading ?
                            (
                                <Spinner />
                            )
                            :
                            (
                                comfortTechSkills.map((item) => {
                                    return <TechSkill tech={item.tech} />
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
                        <Text fontSize={'lg'} color={'brand.neutral'}>● Leadership</Text>
                        <Text fontSize={'lg'} color={'brand.neutral'}>● Teamwork</Text>
                        <Text fontSize={'lg'} color={'brand.neutral'}>● Management</Text>
                        <Text fontSize={'lg'} color={'brand.neutral'}>● Communication</Text>
                        <Text fontSize={'lg'} color={'brand.neutral'}>● Negotiation</Text>
                        <Text fontSize={'lg'} color={'brand.neutral'}>● Public Speaking/Presentation skills</Text>
                        <Text fontSize={'lg'} color={'brand.neutral'}>● Flexible Approach</Text>
                        <Text fontSize={'lg'} color={'brand.neutral'}>● Working with Adolescents</Text>
                        <Text fontSize={'lg'} color={'brand.neutral'}>● Patience</Text>
                        <Text fontSize={'lg'} color={'brand.neutral'}>● Responsibility</Text>
                    </VStack>
                </VStack>
            </Flex>
        </Container>
    );
}

export default Skills;