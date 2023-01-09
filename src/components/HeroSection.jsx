import {
    HStack,
    Container,
    Box,
    Heading,
    Button,
    VStack,
    Text,
    Image,
    IconButton,
    Flex,
    Divider
}
    from "@chakra-ui/react";

import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import MyCV from "../assets/cv.pdf";

const HeroSection = () => {

    return (
        <>
            <Container
                display={'flex'}
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                maxW="container.xl"
                mt={{ base: 10, md: 20 }}
                gap={{ base: 8 }}
            >
                <Flex
                    flexDirection={'column'}
                    justifyContent={'space-evenly'}
                    gap={8}
                >
                    <VStack
                        spacing={4}
                        align={'start'}
                    >
                        <Heading variant={'primary'} size={{ base: 'sm', md: 'md' }}>Hello,</Heading>
                        <Heading variant={'primary'} size={{ base: 'xl', md: '2xl' }}>I'm <Text color={'brand.primary'} as={'span'}>Marko Spasenovski</Text></Heading>
                        <Heading variant={'primary'} size={{ base: 'sm', md: 'md' }}>Nice to meet you and welcome to my personal website, feel free to look around!</Heading>
                    </VStack>
                    <HStack
                        justify={{ base: 'center', md: 'start' }}
                        align={{ base: 'center', md: 'start' }}
                    >
                        <a href={MyCV} download="Marko-Spasenovski-CV.pdf">
                            <Button variant={'primary'}>Download CV</Button>
                        </a>
                    </HStack>
                    <HStack
                        justify={"center"}
                        align={'center'}
                        spacing={4}
                    >
                        <IconButton
                            size={'sm'}
                            variant={'unstyled'}
                            color={'brand.neutral'}
                            _hover={{ color: 'brand.primary' }}
                            icon={<BsGithub size={'sm'}/>}
                            onClick={() => window.open('https://github.com/dev-marko', '_blank')}
                        ></IconButton>
                        <IconButton
                            size={'sm'}
                            variant={'unstyled'}
                            color={'brand.neutral'}
                            _hover={{ color: 'brand.primary' }}
                            icon={<BsLinkedin size={'sm'} />}
                            onClick={() => window.open('https://www.linkedin.com/in/marko-spasenovski-6a002b212/', '_blank')}
                        ></IconButton>
                        <IconButton
                            size={'sm'}
                            variant={'unstyled'}
                            color={'brand.neutral'}
                            _hover={{ color: 'brand.primary' }}
                            icon={<BsInstagram size={'sm'} />}
                            onClick={() => window.open('https://www.instagram.com/marko.spasenovski/', '_blank')}
                        ></IconButton>
                        <IconButton
                            size={'sm'}
                            variant={'unstyled'}
                            color={'brand.neutral'}
                            _hover={{ color: 'brand.primary' }}
                            icon={<BsFacebook size={'sm'} />}
                            onClick={() => window.open('https://www.facebook.com/markospasenovski00', '_blank')}
                        ></IconButton>
                        <IconButton
                            size={'sm'}
                            variant={'unstyled'}
                            color={'brand.neutral'}
                            _hover={{ color: 'brand.primary' }}
                            icon={<SiHashnode size={'sm'} />}
                            onClick={() => window.open('https://mspasenovski.hashnode.dev/', '_blank')}
                        ></IconButton>
                    </HStack>
                </Flex>
                <Box>
                    <Image
                        h={{ base: 'sm', md: 'md' }}
                        objectFit='scale-down'
                        src={'./images/portrait.JPG'}
                        alt="picture of marko spasenovski"
                        borderRadius={'20px'} />
                </Box>
            </Container>
            <Divider borderColor={'brand.subtleShadow'} my={8} />
        </>
    );
}

export default HeroSection;