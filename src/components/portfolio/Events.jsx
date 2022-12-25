import { Flex, Heading, Text } from "@chakra-ui/react";

const Events = () => {
  return (
    <Flex flexDirection={'column'} gap={{ base: 2, md: 4 }}>
      <Heading variant={'primary'} size={{ base: 'lg', md: 'xl' }}>Events</Heading>
      {/* <Text mb={2}>
        Here are some event from the past few years in which I have participated either as an organizer,
        regular participant or both 😁
      </Text> */}
      <Text>Work in progress 🛠️</Text>
    </Flex>
  );
}

export default Events;