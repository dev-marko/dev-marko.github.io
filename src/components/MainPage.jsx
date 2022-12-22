import { Box } from "@chakra-ui/react";

import AboutMe from "./AboutMe";
import CoreValues from "./CoreValues";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";

const MainPage = () => {
    return (
        <Box>
            <Navigation />
            <HeroSection />
            <AboutMe />
            <CoreValues />
        </Box>
    );
}

export default MainPage;