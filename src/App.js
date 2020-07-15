import React, { useState } from "react";
import { Box, Button, Collapsible, Heading, Grommet } from "grommet";
import { Notification } from "grommet-icons";

import Header from "./components/Header";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Header>
          <Heading level="3" margin="none">
            My App
          </Heading>
          <Button
            icon={<Notification />}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </Header>
        <Box direction="row" flex>
          <Box flex align="center" justify="center">
            app body
          </Box>
          <Collapsible direction="horizontal" open={showSidebar}>
            <Box
              flex
              width="medium"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
            >
              sidebar
            </Box>
          </Collapsible>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
