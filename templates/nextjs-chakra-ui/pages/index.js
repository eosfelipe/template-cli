import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DarkModeSwitch from '../components/DarkModeSwitch'
import { Flex, Text, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Stack as="main" align="center">
      <Flex flexDirection="row" w="full" p={4} justify="space-between">
        <DarkModeSwitch />
        <Text as="span" fontWeight="normal">
          Hello World!
        </Text>
      </Flex>
    </Stack>
  )
}
