
import React from "react";
import { Box } from "@chakra-ui/react";
function Sidebar_Button({ img, name }) {
  return (
    <Box className="Sidebar_Button" w={'-moz-min-content'}>
      <img src={img} alt="img" width="40px" height="40px" />
      <span>{name}</span>
    </Box>
  );
}

export default Sidebar_Button;