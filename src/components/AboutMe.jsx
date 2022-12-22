import { Container, Flex, Box, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";

import { FiCoffee, FiMusic } from "react-icons/fi";
import { FaHiking, FaSkiing, FaBasketballBall } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { GiCookingPot } from "react-icons/gi";
import { GoBook } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";

const AboutMe = () => {
    return (
        <Container
            display={'flex'}
            flexDirection={'column'}
            maxW="container.xl"
            mt={{ base: 8, md: 10 }}
            gap={{ base: 8, md: 8 }}
        >
            {/* About Me heading and text */}
            <Flex flexDirection={'column'} gap={{ base: 2, md: 4 }}>
                <Box>
                    <Heading variant={'primary'} size={{ base: 'xl', md: '2xl' }}>About Me</Heading>
                </Box>
                <VStack spacing={4}>
                    <Text>
                        Resourceful, dedicated with excellent analytical skills and strong organizational abilities with proven
                        successes managing multiple academic projects and volunteering events. Bringing forth a motivated
                        attitude to the team and committed to utilizing my skills to further the company and myself.
                    </Text>
                    <Text>
                        My current passions are web and mobile development (preferably on the backend side of things). One day
                        I hope to utilize my BSc to the fullest extent and be a part of a team responsible for
                        software achitecture and design.
                    </Text>
                </VStack>
            </Flex>

            {/* Personal Details and My Interests */}
            <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 8 }} flex={1}>
                <Box w={'full'}>
                    <Heading variant={'primary'} size={{ base: 'lg', md: 'xl' }}>Personal Details</Heading>
                    <HStack align={'start'} spacing={{ base: 8, md: 10 }} p={{ base: 0, md: 4 }}>
                        <Box>
                            <Text>Age: </Text>
                            <Text>Residence: </Text>
                            <Text>Year Of Study: </Text>
                            <Text>Job Status: </Text>
                        </Box>
                        <Box>
                            <Text color={'brand.primary'}>22</Text>
                            <Text color={'brand.primary'}>Skopje, Macedonia</Text>
                            <Text color={'brand.primary'}>Senior (4th year)</Text>
                            <Text color={'brand.primary'}>Unemployed</Text>
                        </Box>
                    </HStack>
                </Box>
                <Box w={'full'}>
                    <Heading variant={'primary'} size={{ base: 'lg', md: 'xl' }}>My Interests</Heading>
                    <Flex w={'full'} align={'center'} justify={'start'} flexWrap={'wrap'} gap={3} p={{ base: 0, md: 4 }}>
                        <VStack spacing={0} bg={'brand.neutral'} p={2} align={'center'} justify={'center'} borderRadius={5}>
                            <Icon ms={1} as={FiCoffee} boxSize={6} color={'brand.primaryContainer'} />
                            <Text color={'brand.primaryContainer'}>Coffee</Text>
                        </VStack>
                        <VStack spacing={0} bg={'brand.neutral'} p={2} align={'center'} justify={'center'} borderRadius={5}>
                            <Icon ms={1} as={FiMusic} boxSize={6} color={'brand.primaryContainer'} />
                            <Text color={'brand.primaryContainer'}>Music</Text>
                        </VStack>
                        <VStack spacing={0} bg={'brand.neutral'} p={2} align={'center'} justify={'center'} borderRadius={5}>
                            <Icon ms={1} as={FaHiking} boxSize={6} color={'brand.primaryContainer'} />
                            <Text color={'brand.primaryContainer'}>Hiking</Text>
                        </VStack>
                        <VStack spacing={0} bg={'brand.neutral'} p={2} align={'center'} justify={'center'} borderRadius={5}>
                            <Icon ms={1} as={FaSkiing} boxSize={6} color={'brand.primaryContainer'} />
                            <Text color={'brand.primaryContainer'}>Skiing</Text>
                        </VStack>
                        <VStack spacing={0} bg={'brand.neutral'} p={2} align={'center'} justify={'center'} borderRadius={5}>
                            <Icon ms={1} as={IoCarSportSharp} boxSize={6} color={'brand.primaryContainer'} />
                            <Text color={'brand.primaryContainer'}>Cars</Text>
                        </VStack>
                        <VStack spacing={0} bg={'brand.neutral'} p={2} align={'center'} justify={'center'} borderRadius={5}>
                            <Icon ms={1} as={FaBasketballBall} boxSize={6} color={'brand.primaryContainer'} />
                            <Text fontSize={{ base: 'sm', md: 'md' }} color={'brand.primaryContainer'}>Basketball</Text>
                        </VStack>
                        <VStack spacing={0} bg={'brand.neutral'} p={2} align={'center'} justify={'center'} borderRadius={5}>
                            <Icon ms={1} as={GoBook} boxSize={6} color={'brand.primaryContainer'} />
                            <Text color={'brand.primaryContainer'}>Reading</Text>
                        </VStack>
                        <VStack spacing={0} bg={'brand.neutral'} p={2} align={'center'} justify={'center'} borderRadius={5}>
                            <Icon ms={1} as={BiCameraMovie} boxSize={6} color={'brand.primaryContainer'} />
                            <Text color={'brand.primaryContainer'}>Movies</Text>
                        </VStack>
                        <VStack spacing={0} bg={'brand.neutral'} p={2} align={'center'} justify={'center'} borderRadius={5}>
                            <Icon ms={1} as={GiCookingPot} boxSize={6} color={'brand.primaryContainer'} />
                            <Text color={'brand.primaryContainer'}>Cooking</Text>
                        </VStack>
                    </Flex>
                </Box>
            </Flex>
        </Container>
    );
}

export default AboutMe;