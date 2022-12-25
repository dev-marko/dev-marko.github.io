import { Box } from "@chakra-ui/react";

import AboutMe from "../components/AboutMe";
import CoreValues from "../components/CoreValues";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import Portfolio from "../components/portfolio/Portfolio";
import Skills from "../components/skills/Skills";

const MainPage = () => {
    return (
        <Box>
            <Navigation />
            <HeroSection />
            <AboutMe />
            <CoreValues />
            <Skills />
            <Portfolio />
        </Box>
    );
}

export default MainPage;