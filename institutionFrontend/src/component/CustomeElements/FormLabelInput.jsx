// Common label styles
export const getInputLabelProps = {
  sx: {
    "&.Mui-focused, &.MuiInputLabel-shrink": {
      fontSize: "0.8rem", // When the label is focused or shrunk
      transform: "translate(0.9rem, -0.6rem)", // Adjust the position when shrunk
    },
    transform: "translate(0.9rem, 0.6rem)", // Vertically center the label
    fontSize: "0.9rem",
  },
};

// Common input styles
export const getInputProps = (isEditing) => ({
  readOnly: !isEditing,
  sx: {
    pointerEvents: !isEditing ? "none" : "auto",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: !isEditing ? "transparent" : "initial",
    },
    "& .MuiInputBase-input": {
      padding: "10px 10px",
      fontSize: 13,
    },
  },
});

