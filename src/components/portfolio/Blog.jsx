import { Flex, Heading, Text } from "@chakra-ui/react";
import InfoCard from "./InfoCard";

const Blog = () => {
  return (
    <Flex flexDirection={'column'} gap={{ base: 2, md: 4 }}>
      <Heading variant={'primary'} size={{ base: 'lg', md: 'xl' }}>Blog</Heading>
      <Text mb={2}>
        For the past 2 years I have been writing articles on my personal Hashnode blog.
        I don't do it often, only when I feel inspired to write about something 📓✍🏼
      </Text>
      <InfoCard title='Understading Thread Synchronization' imageUrl='./images/blog/blog-post.png' buttonLink='https://mspasenovski.hashnode.dev/' buttonText='View on Hashnode' />
    </Flex>
  );
}

export default Blog;