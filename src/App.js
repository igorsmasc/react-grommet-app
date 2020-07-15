import React from "react";
import { Button, Heading, Grommet } from "grommet";
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
  return (
    <Grommet theme={theme}>
      <Header>
        <Heading level="3" margin="none">
          My App
        </Heading>
        <Button icon={<Notification />} onClick={() => {}} />
      </Header>
    </Grommet>
  );
}

export default App;
