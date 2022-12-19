import { Box } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";

const MainPage = () => {
    return (
        <Box>
            <Navigation />
            <HeroSection />
        </Box>
    );
}

export default MainPage;