"use client";
import { colorConstants } from "@/theme/colorConstants";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateCard from "./CreateCard";

const CreateNote = () => {
  const [title, setTitle] = useState("Create Note");
  useEffect(() => {
    if (title === "") {
      setTitle("Create Note");
    }
  }, [title]);
  return (
    <>
      <Box display={"flex"} marginTop={"50px"} flexDirection={"column"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontSize: "60px",
                lineHeight: "80px",
                color: colorConstants.black,
              }}
            >
              /{title}
            </Typography>
            <Box
              sx={{
                textTransform: "none",
                padding: "6px 24px",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: colorConstants.black,
                color: colorConstants.white,
                "&:hover": {
                  backgroundColor: colorConstants.fontGray,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  letterSpacing: ".8px",
                }}
              >
                Save Note
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "24px",
              color: colorConstants.fontGray,
              fontWeight: "600",
            }}
          >
            Not your ordinary notepad
          </Typography>
        </Box>
        <CreateCard setTitle={setTitle} />
      </Box>
    </>
  );
};

export default CreateNote;
