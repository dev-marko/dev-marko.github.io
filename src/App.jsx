import { VStack, Container } from '@chakra-ui/react';
import MainPage from './pages/MainPage';

function App() {
  return (
    <VStack w={'full'} spacing={10} bgGradient='linear(brand.bg, white)'>
      <Container maxW="container.xl">
        <MainPage />
      </Container>
    </VStack>
  );
}

export default App;
