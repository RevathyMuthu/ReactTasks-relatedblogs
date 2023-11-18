
import './App.css';
import RelatedBlogs from './RelatedBlogs';
// import CustomShareIcon from './CustomShareIcon '
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>

      <RelatedBlogs />
      {/* <CustomShareIcon /> */}


    </ChakraProvider>
  );
}

export default App;
