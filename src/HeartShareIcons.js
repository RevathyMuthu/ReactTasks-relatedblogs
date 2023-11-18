import React from 'react';
import { IconButton, Box, ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
      },
    },
  },
});

const CustomHeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="white"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    <path
      className="heart-fill"
      fill="transparent"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </svg>
);

const CustomShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="white"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.07-4.11c.55.47 1.25.76 2.01.76 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.48 9.34 6.78 9.06 6 9.06 4.34 9.06 3 10.4 3 12s1.34 3 3 3c.78 0 1.48-.28 2.04-.74l7.07 4.11c-.05.23-.09.46-.09.7 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z" />
    <path
      className="heart-fill"
      fill="transparent"
      d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.07-4.11c.55.47 1.25.76 2.01.76 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.48 9.34 6.78 9.06 6 9.06 4.34 9.06 3 10.4 3 12s1.34 3 3 3c.78 0 1.48-.28 2.04-.74l7.07 4.11c-.05.23-.09.46-.09.7 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"
    />

  </svg>
);


const HeartShareIcons = () => {

  return (
    <ChakraProvider theme={theme}>
      <Box >
        <IconButton
          icon={<CustomHeartIcon />}
          aria-label="Add to Wishlist"
          size="lg"
          bg="transparent"
          _hover={{ '.heart-fill': { color: '#0b0c7c', fill: '#0b0c7c' } }}
        />
        <IconButton
          icon={<CustomShareIcon />}
          bg="transparent"
          aria-label="Share"
          size="lg"
          _hover={{ '.heart-fill': { color: '#0b0c7c', fill: '#0b0c7c' } }}
        />
      </Box>
    </ChakraProvider>

  );
};

export default HeartShareIcons;
