import { Box, Text, Progress } from "@chakra-ui/react";

const TechSkillChart = (props) => {
  return (
    <Box w={'25vh'}>
      <Text fontSize={'lg'}>{props.tech}</Text>
      <Progress value={props.knowledge} colorScheme={'twitter'} borderRadius={5} bg={'brand.subtleShadow'} />
    </Box>
  );
}

export default TechSkillChart;