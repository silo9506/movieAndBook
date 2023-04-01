import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import noPost from "assets/img/noposter.png";

export default function MovieCard({ movie }: any) {
  return (
    <Card sx={{ display: "flex", marginY: "16px", position: "relative", height: "250px" }}>
      <Box sx={{ position: "absolute", top: "4px", right: "4px" }}>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </Box>
      {movie.poster_path === null ? (
        <CardMedia component="img" image={noPost} sx={{ width: "150px" }}></CardMedia>
      ) : (
        <CardMedia
          component="img"
          image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          sx={{ width: "150px" }}
        ></CardMedia>
      )}
      <CardContent>
        <Typography sx={{ fontSize: "20px" }}>{movie.title}</Typography>
        <Typography sx={{}} variant="button">
          개봉 {movie.release_date} / 평점 {movie.vote_average !== 0 ? movie.vote_average : "평점없음"}
        </Typography>
        <Typography
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            fontSize: "16px",
          }}
        >
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
