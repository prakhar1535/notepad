import { colorConstants } from "@/theme/colorConstants";
import { Box, Typography } from "@mui/material";
import React from "react";

const CreateNote = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            color: colorConstants.black,
          }}
        >
          Create Note
        </Typography>
      </Box>
    </>
  );
};

export default CreateNote;
