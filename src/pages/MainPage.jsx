import { Box, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Link as ReactScrollLink, Element } from "react-scroll";

import { BsFillArrowUpSquareFill } from "react-icons/bs";

import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import CoreValues from "../components/CoreValues";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import Portfolio from "../components/portfolio/Portfolio";
import Skills from "../components/skills/Skills";

const MainPage = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box>
            <Element id="home">
                <Navigation />
            </Element>
            <HeroSection />
            <Element id="about">
                <AboutMe />
            </Element>
            <CoreValues />
            <Skills />
            <Element id="portfolio">
                <Portfolio />
            </Element>
            <Element id="contact">
                <Contact />
            </Element>
            {
                scrollPosition > 500
                &&
                <Box
                    position='fixed'
                    bottom='20px'
                    right={{ base: ['16px', '84px', '84px', '84px', '24px'], md: ['16px', '84px', '84px', '84px', '44px'] }}
                    zIndex={2}
                >
                    <ReactScrollLink to="home" spy={true} smooth={true} offset={0} duration={500}>
                        <IconButton
                            size={{ base: 'sm', md: 'md' }}
                            variant={'unstyled'}
                            color={'brand.neutral'}
                            _hover={{ color: 'brand.primary' }}
                            icon={<BsFillArrowUpSquareFill size={{ base: 'sm', md: 'md' }} />}
                        ></IconButton>
                    </ReactScrollLink>
                </Box>
            }
        </Box>
    );
}

export default MainPage;