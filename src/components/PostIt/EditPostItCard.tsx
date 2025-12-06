import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { postItCardActionsSX } from "./styles/PostItCard";

export const EditPostItCard = () => {
  const card = (
    <>
      <CardContent sx={{ padding: 0 }}>
        <TextField fullWidth />
      </CardContent>
      <CardActions sx={postItCardActionsSX}>
        <Typography className="postitcard-date">{"adsf--asdf-asdf"}</Typography>
      </CardActions>
    </>
  );
  return <Card sx={{ padding: 0 }}>{card}</Card>;
};
