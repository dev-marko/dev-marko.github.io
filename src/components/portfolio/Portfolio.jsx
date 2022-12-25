import { Container, Heading, Box } from "@chakra-ui/react";

import Projects from "./Projects";
import Blog from "./Blog";
import Events from "./Events";

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
            <Events/>
        </Container>
    );
}

export default Portfolio;