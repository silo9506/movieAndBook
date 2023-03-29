import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

type BookCardProps = {
  author: string;
  description: string;
  image: string;
  isbn: number;
  publisher: string;
  title: string;
  discount: number;
};

export default function BookCard({ image, publisher, description, author, isbn, title, discount }: BookCardProps) {
  return (
    <Card sx={{ display: "flex", padding: "8px" }}>
      <CardMedia
        sx={{
          // width: "250px",
          width: "100%",
          height: "250px",
          backgroundSize: "100% 100%",
          // width: "100%",
        }}
        image={image}
        src="img"
      />
      <CardContent sx={{ width: "50%", position: "relative" }}>
        <Typography
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            color: "gray",
            fontSize: "14px",
            marginBottom: "4px",
          }}
        >
          {author} / {publisher}
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
        <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
