import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
  Skeleton,
} from "@mui/material";
import { colorConstants } from "@/theme/colorConstants";

interface QuestionModalProps {
  open: boolean;
  handleClose: () => void;
}

const AskNoty: React.FC<QuestionModalProps> = ({ open, handleClose }) => {
  const [question, setQuestion] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/askNoty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: question }],
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response from OpenAI");
      }

      const data = await res.json();
      setResponse(data.choices[0].message.content);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
        setQuestion("");
        setResponse("");
        setError(null);
      }}
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
          Ask a question!
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            label="Question"
            value={question}
            onChange={handleQuestionChange}
            disabled={loading}
            margin="normal"
          />
          <Button
            type="submit"
            sx={{
              textTransform: "none",
              padding: "6px 24px",
              width: "fit-content",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor: colorConstants.black,
              color: colorConstants.white,
              "&:hover": {
                backgroundColor: colorConstants.fontGray,
                color: colorConstants.white,
              },
              marginTop: "10px",
            }}
            disabled={loading}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                letterSpacing: ".8px",
              }}
            >
              {loading ? "Noty is thinking..." : "Ask Noty"}
            </Typography>
          </Button>
        </form>
        {loading ? (
          <Box mt={"35px"}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              sx={{ mt: 2 }}
              animation="wave"
            />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : response ? (
          <Box mt={"35px"}>
            <Typography variant="body1">{response}</Typography>
          </Box>
        ) : null}
      </Box>
    </Modal>
  );
};

export default AskNoty;
