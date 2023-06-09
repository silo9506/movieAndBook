import { Card, CardMedia, Container, Grid, Skeleton, CardContent, Typography } from "@mui/material";
import BookCard from "components/atoms/BookCard";
import useNaverBook from "hooks/useNaverBook";
import { naverBookSliceAction } from "modules/naverBookSlice";
import { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
export default function BookPage() {
  const [books, loading, error, maxPage, start, isLastPage] = useNaverBook();
  const [display, setDisplay] = useState(40);
  const dispatch = useDispatch();
  const { changeStart } = naverBookSliceAction;
  const { setLastPage } = naverBookSliceAction;
  const observer = useRef<IntersectionObserver>();
  const lastBook = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entris) => {
        if (entris[0].isIntersecting && !isLastPage) {
          console.log("무한스크롤 실행");
          console.log(start);
          console.log(maxPage);
          if (maxPage - display < start) {
            // setIsLastPage(true);
            dispatch(setLastPage(true));
          } else {
            dispatch(changeStart(start + display));
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, maxPage]
  );
  console.log(books);

  return (
    <Container>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={5}>
        {books.map((items: any, index: number) => {
          if (books.length === index + 1) {
            return (
              <Grid ref={lastBook} xs={12} sm={6} md={4} key={items.isbn} item>
                <BookCard
                  discount={items.discount}
                  image={items.image}
                  isbn={items.isbn}
                  description={items.description}
                  publisher={items.publisher}
                  author={items.author}
                  title={items.title}
                />
              </Grid>
            );
          } else {
            return (
              <Grid xs={12} sm={6} md={4} key={items.isbn} item>
                <BookCard
                  discount={items.discount}
                  image={items.image}
                  isbn={items.isbn}
                  description={items.description}
                  publisher={items.publisher}
                  author={items.author}
                  title={items.title}
                />
              </Grid>
            );
          }
        })}
        {loading &&
          [...Array(10)].map((_, index) => (
            <Grid xs={12} sm={6} md={4} key={index} item>
              <Card sx={{ display: "flex" }}>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: 250,
                    height: 250,
                    borderRadius: 1,
                    marginRight: 2,
                  }}
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
                    <Skeleton width={120} />
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
                    <Skeleton width={80} />
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
                    <Skeleton height={120} />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
