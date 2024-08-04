"use client";
import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import { colorConstants } from "@/theme/colorConstants";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string(),
});
//@ts-ignore
const CreateCard = ({ setTitle }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box
      display="flex"
      paddingTop={"35px"}
      gap={"20px"}
      flexDirection="column"
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <Typography
          sx={{
            fontSize: "18px",
            color: colorConstants.black,
            fontWeight: "600",
          }}
        >
          Title
        </Typography>
        <TextField
          fullWidth
          id="title"
          name="title"
          value={formik.values.title}
          onChange={(e) => {
            formik.handleChange(e);
            setTitle(e.target.value); // Update the title state in CreateNote
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <Typography
          sx={{
            fontSize: "18px",
            color: colorConstants.black,
            fontWeight: "600",
          }}
        >
          Note
        </Typography>
        <ReactQuill
          style={{
            borderRadius: "10px",
            height: "150px",
          }}
          theme="snow"
          value={formik.values.description}
          onChange={(value) => formik.setFieldValue("description", value)}
          onBlur={() => formik.setFieldTouched("description", true)}
        />
      </Box>

      <Button
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
          },
          marginTop: "50px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            letterSpacing: ".8px",
          }}
        >
          Save
        </Typography>
      </Button>
    </Box>
  );
};

export default CreateCard;
