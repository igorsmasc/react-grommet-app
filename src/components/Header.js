import React from "react";
import { Box, Button, Heading, Grommet } from "grommet";
import { Notification } from "grommet-icons";

const Header = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

export default Header;
