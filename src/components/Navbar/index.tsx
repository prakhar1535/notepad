"use client";
import { colorConstants } from "@/theme/colorConstants";
import { Logo } from "@assets/icons";
import { AppBar, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import AskNoty from "../AskNoty";

const Navbar = () => {
  const NavOptions = [
    { name: "Ask Noty?", link: "/" },
    { name: "My Notes", link: "/" },
  ];
  console.log(process.env.NEXT_PUBLIC_OPEN_AI);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <AskNoty open={modalOpen} handleClose={handleCloseModal} />
      <AppBar
        sx={{
          display: "flex",
          position: "fixed",
          flexDirection: { md: "row", xs: "row" },
          width: "100%",
          paddingY: { xs: "20px", md: "70px" },
          paddingX: { md: "200px", xs: "24px" },
          backgroundColor: "transparent",
          color: colorConstants.black,
          boxShadow: "none",
          justifyContent: "space-between",
        }}
      >
        <Image src={Logo.src} alt="" width={70} height={45} />
        <Box
          display={"flex"}
          padding={"10px"}
          sx={{
            border: `1px solid ${colorConstants.black}`,
            borderRadius: "20px",
            "& :hover": {
              backgroundColor: colorConstants.black,
              color: colorConstants.white,
            },
          }}
        >
          {NavOptions.map((option, index) => (
            <Box
              key={index}
              onClick={() => {
                if (index === 0) {
                  handleOpenModal();
                }
              }}
              sx={{
                textTransform: "none",
                padding: "6px 24px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  letterSpacing: ".8px",
                }}
              >
                {" "}
                {option.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;