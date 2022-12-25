import { Container, Heading, Box } from "@chakra-ui/react";

import Blog from "./Blog";
import Projects from "./Projects";

const Portfolio = () => {
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
            <Projects/>
            <Blog/>
        </Container>
    );
}

export default Portfolio;