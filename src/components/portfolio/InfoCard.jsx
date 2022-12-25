import { Card, Stack, CardBody, Heading, Text, CardFooter, Button, Flex, Box, Image } from "@chakra-ui/react";

const ProjectCard = (props) => {

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            w={'full'}
        >
            <Stack w={'full'}>
                <CardBody>
                    <Heading size='md'>{props.title}</Heading>

                    <Text py='2'>
                        {props.description}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant={'primary'} onClick={() => window.open(props.buttonLink, '_blank')}>
                        {props.buttonText}
                    </Button>
                </CardFooter>
            </Stack>
            <Flex justify={'center'} align={'center'} w={'full'}>
                <Box>
                    <Image
                        borderRadius={50}
                        py={4}
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '450px' }}
                        src={props.imageUrl === "" ? './images/projects/placeholder.png' : props.imageUrl}
                        alt='Project Image'
                    />
                </Box>
            </Flex>
        </Card>
    );
}

export default ProjectCard;