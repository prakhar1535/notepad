import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { colorConstants } from "@/theme/colorConstants";

interface ConfirmationModalProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  handleClose,
  handleConfirm,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        border: "none",
        "& :focus-visible": {
          outline: "none",
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "20px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Confirm Action
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Do you want to find relevant links for the title?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            onClick={handleConfirm}
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
              Yes
            </Typography>
          </Button>
          <Button
            onClick={handleClose}
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
              No
            </Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
