import { colorConstants } from "@/theme/colorConstants";
import { Box, Typography } from "@mui/material";
import React from "react";

const Resources = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginTop={{ md: "0", xs: "50px" }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            color: colorConstants.black,
            fontWeight: "600",
          }}
        >
          Resources
        </Typography>
      </Box>
    </>
  );
};

export default Resources;
