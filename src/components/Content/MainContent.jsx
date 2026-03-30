import { Box, Button, Container, Flex, Grid, GridItem, Image, Separator, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import ImagemMobile from "../../assets/image-web-3-mobile.jpg";
import ImagemDesktop from "../../assets/image-web-3-desktop.jpg";
import retroImg from "../../assets/image-retro-pcs.jpg";
import laptopImg from "../../assets/image-top-laptops.jpg";
import gamingImg from "../../assets/image-gaming-growth.jpg";


function MainContent() {
  const src = useBreakpointValue({
    base: ImagemMobile,
    md: ImagemDesktop
  })

  return (
    <Grid as="main" templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={10} p={5}>
      <Container p={0}>
        <Image src={src} alt="Web 3.0" mb={5} />
        <Grid as="section" templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" mb={3} lineHeight={1.1}>The Bright Future of Web 3.0?</Text>
          <Box>
            <Text fontSize="sm" lineHeight="taller" color="textSecondary" pb={3}>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</Text>
            <Button mt={3} color="textPrimary" fontWeight="bold" backgroundColor="danger" borderRadius="none" px={8} py={6} letterSpacing={3} _hover={{ backgroundColor: "textPrimary", color: "bg" }}>READ MORE</Button>
          </Box>

        </Grid>
      </Container>

      <Container as="section" backgroundColor="textPrimary" color="white" p={4} alignItems="stretch">
        <Text color="accent" p={2} fontSize="xx-large" fontWeight="bold">New</Text>

        <Stack as="aside" flexDirection="column" gap={10}>
          <Box px={2}>
            <Text fontWeight="bold" fontSize="xl" _hover={{ color: "accent" }} cursor="pointer">
              Hydrogen VS Electric Cars
            </Text>
            <Text opacity={0.6} fontWeight="light">
              Will hydrogen-fueled cars ever catch up to EVs?
            </Text>
          </Box>
          <Separator />
          <Box px={2}>
            <Text fontWeight="bold" fontSize="xl" _hover={{ color: "accent" }} cursor="pointer">
              The Downsides of AI Artistry
            </Text>
            <Text opacity={0.6} fontWeight="light">
              What are the possible adverse effects of on-demand AI image generation??
            </Text>
          </Box>
          <Separator />
          <Box px={2}>
            <Text fontWeight="bold" fontSize="xl" _hover={{ color: "accent" }} cursor="pointer">
              Is VC Funding Drying Up?
            </Text>
            <Text opacity={0.6} fontWeight="light">
              Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </Text>
          </Box>
        </Stack>
      </Container>


      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Grid
          as="section"
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={{ base: 8, md: 6 }}
          mt={12}
          fontWeight="bold"
        >

          <Flex gap={4}>
            <Image
              src={retroImg}
              h={{ base: "120px", md: "155px" }}
              minW={{ base: "100px", md: "120px" }}
              objectFit="cover"
              alt="Retro PCs"
            />
            <Flex direction="column" gap={1} justifyContent={{ base: "space-between", md: "center" }}>
              <Text color="danger" fontSize="3xl" lineHeight="none">01</Text>
              <Text fontSize="md" color="textPrimary" _hover={{ color: "danger", cursor: "pointer" }} lineHeight="tight">
                Reviving Retro PCs
              </Text>
              <Text fontWeight="normal" color="textSecondary" fontSize="sm" lineHeight="shorter">
                What happens when old PCs are given modern upgrades?
              </Text>
            </Flex>
          </Flex>

          <Flex gap={4}>
            <Image
              src={laptopImg}
              h={{ base: "120px", md: "155px" }}
              minW={{ base: "100px", md: "120px" }}
              objectFit="cover"
              alt="Laptops"
            />
            <Flex direction="column" gap={1} justifyContent={{ base: "space-between", md: "center" }}>
              <Text color="danger" fontSize="3xl" lineHeight="none">02</Text>
              <Text fontSize="md" color="textPrimary" _hover={{ color: "danger", cursor: "pointer" }} lineHeight="tight">
                Top 10 Laptops of 2022
              </Text>
              <Text fontWeight="normal" color="textSecondary" fontSize="sm" lineHeight="shorter">
                Our best picks for various needs and budgets.
              </Text>
            </Flex>
          </Flex>

          <Flex gap={4}>
            <Image
              src={gamingImg}
              h={{ base: "120px", md: "155px" }}
              minW={{ base: "100px", md: "120px" }}
              objectFit="cover"
              alt="Gaming"
            />
            <Flex direction="column" gap={1} justifyContent={{ base: "space-between", md: "center" }}>
              <Text color="danger" fontSize="3xl" lineHeight="none">03</Text>
              <Text fontSize="md" color="textPrimary" _hover={{ color: "danger", cursor: "pointer" }} lineHeight="tight">
                The Growth of Gaming
              </Text>
              <Text fontWeight="normal" color="textSecondary" fontSize="sm" lineHeight="shorter">
                How the pandemic has sparked fresh opportunities.
              </Text>
            </Flex>
          </Flex>

        </Grid>
      </GridItem>
    </Grid>
  )
}


export default MainContent;