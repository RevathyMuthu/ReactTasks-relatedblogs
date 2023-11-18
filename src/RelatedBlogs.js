import React from 'react'
import HeartShareIcons from './HeartShareIcons.js'
import { Box, Center, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons'

const RelatedBlogs = () => {
    return (
        <div bgColor="white">
            <Center>
                <Box maxW='sm' boxShadow='2xl' borderRadius='lg' pb={5} bgColor="white">
                    <Box maxW='sm'
                        backgroundImage="url('/images/cauvery-calling-blog-planting-trees-in-the-minds-of-farmers.jpg')"
                        bgSize="cover"
                        mw='300'
                        h='220'
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        borderTopLeftRadius='lg'
                        borderTopRightRadius='lg'
                        borderBottomRadius='0'>

                        <HStack>
                            <Text color='white' pos="absolute" top="3" left="530">Events</Text>

                            <Box pos="absolute" top="2" left="730">
                                <HeartShareIcons />
                            </Box>
                        </HStack>
                    </Box>

                    <Stack mt='6' spacing='3' pl={5} pr={5} pb={10}>
                        <a href="https://www.ishaoutreach.org/en/cauvery-calling/blog/isha-has-nurtured-idea-of-planting-trees-minds-of-farmers" target='_blank' rel="noreferrer">
                            <Heading size='md'>Isha has nurtured the idea of planting trees in the minds of Farmers</Heading>
                        </a>
                        <Text>
                            <CalendarIcon />&nbsp;&nbsp;27 Oct, 2023&nbsp;&nbsp;<TimeIcon />&nbsp;&nbsp;08:41 am <br /><br />
                            Isha’s Cauvery Calling movement today conducted a tree-based agriculture seminar titled...<br />
                        </Text>
                    </Stack>

                    <Center>
                        <Box

                            as='button'
                            width='330px'
                            height='50px'
                            lineHeight='1.2'
                            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            border='1px'
                            px='8px'
                            borderRadius='5px'
                            fontSize='14px'
                            fontWeight='semibold'
                            bg='#fff'
                            borderColor='#0b0c7c'
                            color='#0b0c7c'
                            _hover={{ bg: '#0b0c7c', color: '#fff' }}

                        >
                            READ MORE
                        </Box>
                    </Center>
                </Box>
            </Center>
        </div >
    )
}

export default RelatedBlogs
