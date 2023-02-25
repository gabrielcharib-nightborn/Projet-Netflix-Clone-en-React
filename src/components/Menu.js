import { Box, Flex, IconButton, Image, Link } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, BellIcon } from "@chakra-ui/icons";

function Menu() {
  return (
    <Flex justify="space-between" align="center" px={5} py={3}>
      <Box>
        <Link href="#home">
          <Image
            src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
            alt="Logo Image"
          />
        </Link>
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        <Link href="#home" mr={4}>
          Home
        </Link>
        <Link href="#tvShows" mr={4}>
          TV Shows
        </Link>
        <Link href="#movies" mr={4}>
          Movies
        </Link>
        <Link href="#originals" mr={4}>
          Originals
        </Link>
        <Link href="#">Recently Added</Link>
      </Box>

      <Box display={{ md: "none" }}>
        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon />}
          variant="ghost"
        />
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        <Flex align="center">
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            mr={4}
            variant="ghost"
          />
          <IconButton
            aria-label="Notifications"
            icon={<BellIcon />}
            variant="ghost"
          />
        </Flex>
      </Box>
    </Flex>
  );
}

export default Menu;
