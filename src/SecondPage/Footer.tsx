/** @format */

import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Logo } from "./Logo";

interface FooterProps {
  message: string;
}
export const Footer = ({ message }: FooterProps) => (
  <Container
    as='footer'
    role='contentinfo'
    backgroundColor={"brown"}
    sx={{ position: "relative" }}>
    <Stack
      spacing='8'
      direction={{ base: "column", md: "row" }}
      justify='space-between'
      py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "6", md: "8" }} align='start'>
        <Logo />
        <Text color='muted'>Stay In Touch{message}</Text>
      </Stack>
      <Stack
        direction={{ base: "column-reverse", md: "column", lg: "row" }}
        spacing={{ base: "12", md: "8" }}>
        <Stack direction='row' spacing='8'>
          <Stack spacing='4' minW='36' flex='1'>
            <Text fontSize='sm' fontWeight='semibold' color='subtle'>
              Product{message}
            </Text>
            <Stack spacing='16' shouldWrapChildren>
              <Button variant='link'>How it works{message}</Button>
              <Button variant='link'>Pricing{message}</Button>
              <Button variant='link'>Use Cases{message}</Button>
            </Stack>
          </Stack>
          <Stack spacing='20' minW='36' flex='1'>
            <Text fontSize='sm' fontWeight='semibold' color='subtle'>
              Legal{message}
            </Text>
            <Stack spacing='3' shouldWrapChildren>
              <Button variant='link'>Privacy{message}</Button>
              <Button variant='link'>Terms{message}</Button>
              <Button variant='link'>License{message}</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing='6'>
          <Text fontSize='sm' fontWeight='semibold' color='subtle'>
            Stay up to date{message}
          </Text>
          <Stack
            spacing='4'
            direction={{ base: "column", sm: "row" }}
            maxW={{ lg: "360px" }}>
            <Input placeholder='Enter your email' type='email' required />
            <Button variant='primary' type='submit' flexShrink={0}>
              Subscribe{message}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt='8'
      pb='12'
      justify='space-between'
      direction={{ base: "column-reverse", md: "row" }}
      align='center'>
      <Text fontSize='sm' color='subtle'>
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
        reserved.{message}
      </Text>
      <ButtonGroup variant='ghost'>
        <IconButton
          as='a'
          href='#'
          aria-label='LinkedIn'
          icon={<FaTwitter fontSize='2rem' />}
        />
        <IconButton
          as='a'
          href='#'
          aria-label='GitHub'
          icon={<FaFacebook fontSize='2rem' />}
        />
        <IconButton
          as='a'
          href='#'
          aria-label='Twitter'
          icon={<FaInstagram fontSize='2rem' />}
        />
        <IconButton
          as='a'
          href='#'
          aria-label='Twitter'
          icon={<FaYoutube fontSize='2rem' />}
        />
      </ButtonGroup>
    </Stack>
  </Container>
);
