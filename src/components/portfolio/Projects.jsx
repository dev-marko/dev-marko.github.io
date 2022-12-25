import { Box, Heading, VStack, Spinner, Text } from "@chakra-ui/react";
import InfoCard from "./InfoCard";

import { useState, useEffect } from "react";

import projectsList from "../../data/projects.json";

const Projects = () => {

  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProjects(projectsList);
    if (projects) {
      setLoading(false);
    }
  }, [projects]);

  return (
    <>
      <Box>
        <Heading variant={'primary'} size={{ base: 'lg', md: 'xl' }}>Projects</Heading>
        <Text>
          These are just some of my many projects. Some of them are faculty projects that I have
          developed either alone or as part of a team, others are pet-projects or projects
          developed for events 👨‍💻⚡
        </Text>
      </Box>
      <VStack align={{ base: 'center', md: 'start' }} w={'full'} spacing={8}>
        {loading ?
          (
            <Spinner />
          )
          :
          (
            projects.map((item) => {
              return <InfoCard title={item.title} description={item.description} imageUrl={item.imageUrl} buttonLink={item.githubLink} buttonText='View On Github' />;
            })
          )}
      </VStack>
    </>
  );
}

export default Projects;