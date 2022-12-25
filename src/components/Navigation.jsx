import { Container, HStack, Link } from '@chakra-ui/react'
import { Link as ReactScrollLink } from "react-scroll";

function Navigation() {
    return (
        <HStack
            as={'nav'}
            pos={'sticky'}
            top={0}
            align={'center'}
            justify={'center'}
            w={'full'}
            p={8}
        >
            <Container
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}
                maxW="container.xl"
                gap={'8'}
            >
                <Link variant={'primary'}>
                    <ReactScrollLink to="home" spy={true} smooth={true} offset={-50} duration={500}>
                        Home
                    </ReactScrollLink>
                </Link>
                <Link variant={'primary'}>
                    <ReactScrollLink to="about" spy={true} smooth={true} offset={-50} duration={500}>
                        About
                    </ReactScrollLink>
                </Link>
                <Link variant={'primary'}>
                    <ReactScrollLink to="portfolio" spy={true} smooth={true} offset={-35} duration={500}>
                        Portfolio
                    </ReactScrollLink>
                </Link>
                <Link variant={'primary'}>
                    <ReactScrollLink to="contact" spy={true} smooth={true} offset={0} duration={500}>
                        Contact
                    </ReactScrollLink>
                </Link>
            </Container>
        </HStack>
    );
}

export default Navigation;