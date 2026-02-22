"use client"

import { Box, Button, CloseButton, Drawer, Flex, IconButton, Image, Link, List, Portal } from "@chakra-ui/react"
import Logo from "../../assets/logo.svg"
import { useState } from "react"
import { MdOutlineMenu } from "react-icons/md";
const navItems = [
  { name: "Home", href: "#" },
  { name: "New", href: "#" },
  { name: "Popular", href: "#" },
  { name: "Trending", href: "#" },
  { name: "Categories", href: "#" },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <Flex as="header" justifyContent="space-between" alignItems="center" p={6} fontFamily="inter">
      <Image src={Logo} alt="Logo"/>
      <Box as="nav" display={{ base: "none", md: "block" }}>
        <List.Root as="ul" gap={8} listStyleType="none" flexDirection="row" display="flex">
          {navItems.map((item) => (
            <List.Item key={item.name}>
              <Link href={item.href} color="gray.600" _hover={{ color: "orange.500", textDecoration: "none" }}>
                {item.name}
              </Link>
            </List.Item>
          ))}
        </List.Root>
      </Box>

      <Flex display={{ base: "flex", md: "none" }}>
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Drawer.Trigger asChild>
            <IconButton variant="ghost" aria-label="Menu" onClick={() => setOpen(true)} p={0}>
              <MdOutlineMenu size="40px" color="black" />
            </IconButton>
          </Drawer.Trigger>
          
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner justify="flex-end">
              <Drawer.Content bg="bg" maxW="70vw" h="100vh" p={6}>
                <Flex justifyContent="flex-end" mb={20}>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="xl" border="none" />
                  </Drawer.CloseTrigger>
                </Flex>
                <Drawer.Body p={0}>
                  <Box as="nav">
                    <List.Root as="ul" gap={8} listStyleType="none" flexDirection="column" display="flex">
                      {navItems.map((item) => (
                        <List.Item key={item.name}>
                          <Link 
                            href={item.href} 
                            fontSize="xl" 
                            color="black" 
                            _hover={{ color: "danger", textDecoration: "none" }}
                          >
                            {item.name}
                          </Link>
                        </List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Flex>
    </Flex>
  )
}


export default Header


/* 
<Box as="nav" role="navigation">
        <List.Root as="ul"
          gap={8}
          listStyleType="none"
          flexDirection="row"
          color="textSecondary"

        >
          {navItems.map((item) => (
            <List.Item key={item.name}>
              <Link href={item.href} color="inherit" _hover={{ color: "accent" }}>{item.name}</Link>
            </List.Item>
          ))}
        </List.Root>
      </Box>

      <Drawer.Trigger asChild>
          <IconButton size="lg" variant="ghost" aria-label="MdOutlineMenu" onClick={() => setOpen(true)}>
            <MdOutlineMenu />
          </IconButton>
        </Drawer.Trigger>
*/