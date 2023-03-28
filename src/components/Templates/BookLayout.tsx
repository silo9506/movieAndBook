import { Container, Grid } from "@mui/material";
import Card from "components/atoms/Card";
import useNaverBook from "hooks/useNaverBook";
// import type { BookInitialState } from "modules/naverBookSlice";
export default function BookLayout() {
  const [books, loading, error, maxPage] = useNaverBook();
  console.log(books);
  return (
    <Container>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={1}>
        {/* {books.map((items) => {
          return (
            <Grid xs={12} sm={6} md={4} key={items.id} item>
              <Card />
            </Grid>
          );
        })} */}
      </Grid>
    </Container>
  );
}
