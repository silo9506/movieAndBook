import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import CloseIcon from "@mui/icons-material/Close";

type BookProps = {
  author: string;
  description: string;
  image: string;
  isbn: number;
  publisher: string;
  title: string;
};

export default function Book({ image, publisher, description, author, isbn, title }: BookProps) {
  return (
    <Card>
      <CardMedia
        sx={{
          height: "400px",
          backgroundSize: "100% 100%",
        }}
        image={image}
        src="img"
      />
      <CardContent>
        <Box>
          <Typography sx={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{title}</Typography>
          <Typography sx={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
            {publisher}
          </Typography>
          <Typography sx={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{author}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
