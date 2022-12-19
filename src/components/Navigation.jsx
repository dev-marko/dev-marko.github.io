import { Container, HStack, Link } from '@chakra-ui/react'

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
                    Home
                </Link>
                <Link variant={'primary'}>
                    About
                </Link>
                <Link variant={'primary'}>
                    Projects
                </Link>
                <Link variant={'primary'}>
                    Contact
                </Link>
            </Container>
        </HStack>
    );
}

export default Navigation;