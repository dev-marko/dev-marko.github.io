import { Container, VStack, Heading, Box, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

import projectsList from "../../data/projects.json";

const Portfolio = () => {

    const [projects, setProjects] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProjects(projectsList);
        if (projects) {
            setLoading(false);
        }
    }, [projects]);

    return (
        <Container
            display={'flex'}
            flexDirection={'column'}
            maxW="container.xl"
            mt={{ base: 8, md: 10 }}
            gap={{ base: 8, md: 8 }}
        >
            <Box>
                <Heading variant={'primary'} size={{ base: 'xl', md: '2xl' }}>Portfolio</Heading>
            </Box>
            <Box>
                <Heading variant={'primary'} size={{ base: 'lg', md: 'xl' }}>Projects</Heading>
            </Box>
            <VStack align={{ base: 'center', md: 'start' }} w={'full'} spacing={8}>
                {
                    loading ?
                        (
                            <Spinner />
                        )
                        :
                        (
                            projects.map((item) => {
                                return <ProjectCard title={item.title} description={item.description} imageUrl={item.imageUrl} githubLink={item.githubLink} />
                            })
                        )
                }
            </VStack>
            <Box>
                <Heading variant={'primary'} size={{ base: 'lg', md: 'xl' }}>Events</Heading>
            </Box>
        </Container>
    );
}

export default Portfolio;