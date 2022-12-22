import { Box } from "@chakra-ui/react";

import AboutMe from "./AboutMe";
import CoreValues from "./CoreValues";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

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