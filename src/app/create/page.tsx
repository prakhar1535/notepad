"use client";
import { colorConstants } from "@/theme/colorConstants";
import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateCard from "./CreateCard";
import ConfirmationModal from "./Resources/ResourceModal";
import LinkIcon from "@mui/icons-material/Link";
import Image from "next/image";
import { YouTube } from "@mui/icons-material";
interface ResourceResponse {
  link: string | null;
  source: string | null;
  title: string | null;
  video_title?: string | null;
  video_link?: string | null;
}
const CreateNote = () => {
  const [title, setTitle] = useState("Create Note");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const [link, setLink] = useState<ResourceResponse>({
    link: null,
    source: null,
    title: null,
    video_title: null,
    video_link: null,
  });
  useEffect(() => {
    if (title === "") {
      setTitle("Create Note");
    }
  }, [title]);

  const handleSaveClick = () => {
    setIsModalOpen(true);
  };

  const fetchLink = async () => {
    try {
      const response = await fetch("/api/getBrowserLinks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      const data = await response.json();
      setLink({
        link: data.link,
        title: data.title,
        source: data.source,
        video_title: data.video_title,
        video_link: data.video_link,
      });
      console.log(link);
    } catch (error) {
      console.error("Error fetching link:", error);
    }
  };

  const handleConfirm = async () => {
    setIsModalOpen(false);
    setShowResources(true);
    fetchLink();
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

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
                fontSize: { md: "60px", xs: "28px" },
                lineHeight: { md: "80px", xs: "34px" },
                color: colorConstants.black,
              }}
            >
              /{title}
            </Typography>
            <Button
              onClick={handleSaveClick}
              sx={{
                textTransform: "none",
                padding: { md: "6px 24px", xs: "4px 14px" },
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: colorConstants.black,
                color: colorConstants.white,
                "&:hover": {
                  backgroundColor: colorConstants.fontGray,
                },
                display: { md: "block", xs: "none" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "18px", xs: "14px" },
                  fontWeight: "500",
                  letterSpacing: ".8px",
                }}
              >
                Save Note
              </Typography>
            </Button>
          </Box>
          <Typography
            sx={{
              fontSize: { md: "18px", xs: "14px" },
              lineHeight: "24px",
              color: colorConstants.fontGray,
              fontWeight: "600",
            }}
          >
            Not your ordinary notepad
          </Typography>
        </Box>
        <CreateCard setTitle={setTitle} />
        {showResources && (
          <Box marginTop={{ md: "30px", xs: "90px" }}>
            <Box display={"flex"} flexDirection={"column"}>
              {" "}
              <Typography
                sx={{
                  fontSize: { md: "18px", xs: "14px" },
                  fontWeight: "600",
                }}
              >
                Resources
              </Typography>
              <Box
                display={"flex"}
                marginTop={"10px"}
                alignItems={"center"}
                gap={"15px"}
                onClick={() => {
                  if (link.link) window.location.href = link.link;
                }}
                sx={{
                  cursor: "pointer",
                }}
              >
                <LinkIcon />

                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  {link.title} by{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {link.source}
                  </span>
                </Typography>
              </Box>
              <Box
                display={"flex"}
                marginTop={"10px"}
                alignItems={"center"}
                gap={"15px"}
                onClick={() => {
                  if (link.video_link) window.location.href = link.video_link;
                }}
                sx={{
                  cursor: "pointer",
                }}
              >
                <YouTube />

                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  {link.video_title}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
        <Button
          onClick={handleSaveClick}
          sx={{
            textTransform: "none",
            padding: { md: "6px 24px", xs: "4px 14px" },
            borderRadius: "10px",
            cursor: "pointer",
            backgroundColor: colorConstants.black,
            color: colorConstants.white,
            "&:hover": {
              backgroundColor: colorConstants.fontGray,
            },
            marginTop: "20px",
            display: { md: "none", xs: "block" },
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "18px", xs: "14px" },
              fontWeight: "500",
              letterSpacing: ".8px",
            }}
          >
            Save Note
          </Typography>
        </Button>
      </Box>

      <ConfirmationModal
        open={isModalOpen}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      />
    </>
  );
};

export default CreateNote;
