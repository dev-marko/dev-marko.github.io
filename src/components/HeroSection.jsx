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
    Flex
}
    from "@chakra-ui/react";

import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

const HeroSection = () => {

    return (
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
                    <Button variant={'primary'}>Download CV</Button>
                </HStack>
                <HStack
                    justify={"center"}
                    align={'center'}
                >
                    <IconButton
                        size={{ base: 'sm', md: 'xs' }}
                        variant={'unstyled'}
                        color={'brand.neutral'}
                        _hover={{ color: 'brand.primary' }}
                        icon={<BsGithub size={{ base: 'sm', md: 'xs' }} />}
                    ></IconButton>
                    <IconButton
                        size={{ base: 'sm', md: 'xs' }}
                        variant={'unstyled'}
                        color={'brand.neutral'}
                        _hover={{ color: 'brand.primary' }}
                        icon={<BsLinkedin size={{ base: 'sm', md: 'xs' }} />}
                    ></IconButton>
                    <IconButton
                        size={{ base: 'sm', md: 'xs' }}
                        variant={'unstyled'}
                        color={'brand.neutral'}
                        _hover={{ color: 'brand.primary' }}
                        icon={<BsInstagram size={{ base: 'sm', md: 'xs' }} />}
                    ></IconButton>
                    <IconButton
                        size={{ base: 'sm', md: 'xs' }}
                        variant={'unstyled'}
                        color={'brand.neutral'}
                        _hover={{ color: 'brand.primary' }}
                        icon={<BsFacebook size={{ base: 'sm', md: 'xs' }} />}
                    ></IconButton>
                </HStack>
            </Flex>
            <Box>
                <Image
                    h={{ base: 'sm', md: 'md' }}
                    objectFit='scale-down'
                    src={'./images/portrait.jpg'}
                    alt="picture of marko spasenovski"
                    borderRadius={'20px'}
                />
            </Box>
        </Container>
    );
}

export default HeroSection;