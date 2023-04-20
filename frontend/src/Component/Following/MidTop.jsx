import React from "react";
import { Box, Image, Input,Button } from "@chakra-ui/react";
function MidTop(props) {
  return (
    <div>
      <Box>
        <Box
          w={"100%"}
          bg={"white"}
          display={"flex"}
          border={"1px solid black"}
          mb={"30px"}
          mt={"20px"}>
          <Image
            borderRadius={"25px"}
            w={"40px"}
            h={"40px"}
            src="https://picsum.photos/200/300"
            alt=""
          />
          <Input placeholder="What do you want to ask or share?" />
        </Box>
        <Box display={"flex"} justifyContent={"space-evenly"}>
          <Button bg={"white"}>Ask</Button>|<Button bg={"white"}>Answer</Button>
          |<Button bg={"white"}>Post</Button>
        </Box>
      </Box>
    </div>
  );
}

export default MidTop;
