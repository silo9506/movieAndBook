import { Container, Grid } from "@mui/material";
import BookCard from "components/atoms/BookCard";
import useNaverBook from "hooks/useNaverBook";
import { useState, useRef, useCallback, useEffect } from "react";
export default function BookPage() {
  const [query, setQuery] = useState();
  const [start, setStart] = useState(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [books, loading, error, maxPage] = useNaverBook({ query, start });
  const observer = useRef<IntersectionObserver>();

  const lastBook = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entris) => {
        if (entris[0].isIntersecting && !isLastPage) {
          console.log("무한스크롤 실행");
          console.log(start);
          if (maxPage - 40 < start) {
            setIsLastPage(true);
          } else
            setStart((prev) => {
              return prev + 40;
            });
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
        {books.map((items, index) => {
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
      </Grid>
      )
    </Container>
  );
}
