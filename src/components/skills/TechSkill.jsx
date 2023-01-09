import { Box, Heading } from "@chakra-ui/react";

const TechSkillChart = (props) => {
  return (
    <Box w={'25vh'}>
      <Heading variant={'secondary'} size={'sm'}>{props.tech}</Heading>
    </Box>
  );
}

export default TechSkillChart;