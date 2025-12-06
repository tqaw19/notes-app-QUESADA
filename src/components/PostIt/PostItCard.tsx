import React, { useMemo } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router";
import {
  postItCardActionsSX,
  postItCardContainerSX,
  postItCardSaveButtonSX,
} from "./styles/PostItCard";
import { formatPostItDate } from "@utils/formatPostItDate";

interface PostItCardProps {
  id: string;
  body: string;
  bgColor: string;
  createdAt: string;
}

export const PostItCard: React.FC<PostItCardProps> = ({
  id,
  body,
  bgColor,
  createdAt,
}) => {
  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    navigate(`/notes/${id ?? "123"}/edit`);
  };

  const formattedDate = useMemo(() => formatPostItDate(createdAt), [createdAt]);

  const card = (
    <>
      <CardContent>
        <Typography sx={{ color: "text.primary" }}>{body}</Typography>
      </CardContent>
      <CardActions sx={postItCardActionsSX}>
        <Typography className="postitcard-date">{formattedDate}</Typography>
        <Button
          variant="contained"
          disableElevation
          sx={postItCardSaveButtonSX}
          onClick={() => handleEdit(id)}
        >
          <CreateIcon />
        </Button>
      </CardActions>
    </>
  );

  return (
    <Box>
      <Card variant="outlined" sx={postItCardContainerSX(bgColor)}>
        {card}
      </Card>
    </Box>
  );
};
