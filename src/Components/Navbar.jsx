import { Link as ChakraLink, Flex } from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";

import { AuthContext } from "../Context/AuthContextProvider";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";

const Navbar = () => {
  const links = [
    {
      to: "/",
      label: "Home",
    },

    {
      to: "/about",
      label: "About",
    },
    {
      to: "/contact",
      label: "Contact",
    },
    {
      to: "/tickets",
      label: "Tickets",
    },
  ];

  const { logout, authDetail } = useContext(AuthContext);
  const { isLoggedIn } = authDetail;

  return (
    <Flex
      align="center"
      justify="space-around"
      background="gray.300"
      padding={5}
    >
      {links.map((link) => (
        <ChakraLink
          as={ReactRouterLink}
          key={link.to}
          to={link.to}
          color="blue.800"
          _hover={{ textDecor: "none" }}
        >
          {link.label}
        </ChakraLink>
      ))}

      {isLoggedIn ? (
        <Button colorScheme="red" onClick={logout}>
          Logout
        </Button>
      ) : (
        <ChakraLink as={ReactRouterLink} to="/login">
          <Button>Login</Button>
        </ChakraLink>
      )}
    </Flex>
  );
};

export default Navbar;
