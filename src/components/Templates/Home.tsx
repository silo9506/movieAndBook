import { Box, AppBar, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import SkewBox from "components/atoms/SkewBox";
import { cloneElement } from "react";
import Logo from "assets/img/Logo.png";
import Carousel from "components/molecules/Carousel";
import { RootState } from "modules/store";
import { useSelector } from "react-redux";
import { bookCarouselSliceAction, movieCarouselSliceAction } from "modules/carouselSlice";

// interface Props {
//   children: React.ReactElement;
// }

// function ElevationScroll(props: Props) {
//   const { children } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

const Home = () => {
  const { movie, movieStartX, movieCurrentX, movieCurrentIndex } = useSelector(
    (state: RootState) => state.movieCarouselSlice
  );
  const { book, bookStartX, bookCurrentX, bookCurrentIndex } = useSelector(
    (state: RootState) => state.bookCarouselSlice
  );

  const { movieDragStart, movieDrag, movieDragEnd } = movieCarouselSliceAction;
  const { bookDragStart, bookDrag, bookDragEnd } = bookCarouselSliceAction;

  return (
    <Box sx={{ backgroundColor: "#003", color: "white" }}>
      {/*  */}
      {/* <ElevationScroll>
        <AppBar>
          <Toolbar
            sx={{
              display: "flex",
              alignContent: "center",
              flexDirection: "column",
              backgroundColor: "#CBD7E2",
              color: "black",
            }}
          >
            <Typography variant="h6" component="span">
              M&B
            </Typography>
            <Typography variant="button" component="span">
              영화와 책
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar /> */}
      {/*  */}
      <Box
        sx={{
          marginBottom: "calc((var(--skewend-padding) * -1) - 2px)",
          paddingBottom: "calc((var(--skewend-padding) * 2))",
          fontSize: "30px",
        }}
      >
        <Box sx={{ maxWidth: "50vw", margin: "0 auto", wordBreak: "keep-all", textAlign: "center" }}>
          <img height={150} src={Logo}></img>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            background: "#fff",
            color: "#003",
            fontWeight: "900",
            padding: "0px 16px",
            margin: "0 auto",
            maxWidth: "50vw",
            wordBreak: "keep-all",
          }}
        >
          <Typography variant="h6" sx={{ paddingY: "20px", paddingLeft: "8px", fontWeight: "inherit" }}>
            지금은 영상예술인 영화와 활자예술인 문학이 과거 그 어느 때보다도 더 밀접한 연관을 맺고 서로의 가능성을
            탐색하고 있는 시대이다. 물론 그 두 쟝르가 하나로 합쳐질 수는 없을 것이다. 그러나 모든 것이 화면으로 이해되고
            처리되는 이 영상시대에 살아 남기 위해서는 활자문화 역시 혁명적인 변화를 겪지 않을 수 없을 것이다. 다만
            걱정스러운 것은 활자문화의 {"<"}상상모드{">"}가 영화의 {"<"}영상모드{">"}로 바뀌면서 상상력이 현저하게
            쇠퇴해갈지도 모른다는 점이다. 바로 그러한 의미에서 앞으로 문학비평가들이 맡아야 될 주요 임무 가운데 하나는
            {"<"}영상모드{">"}속에 감추어진 숨겨진 코드와 기호들을 찾아내어 해독하는 일이 될지도 모른다. 왜냐하면 그러한
            탐색작업이 계속되는 한, 영상모드 속에서도 인간의 문학적 상상력은 계속될 것이기 때문이다."
            <p style={{ textAlign: "right" }}>-문학과 영화-</p>
          </Typography>
        </Box>
      </Box>
      <SkewBox skew={1} gradient="linear-gradient(45deg, #654ea3, #eaafc8)">
        Movie
        <Carousel
          index={movieCurrentIndex}
          items={movie}
          startX={movieStartX}
          currentX={movieCurrentX}
          dragStart={movieDragStart}
          dragEnd={movieDragEnd}
          drag={movieDrag}
        />
      </SkewBox>
      <SkewBox skew={1} gradient="linear-gradient(-135deg, #ff0084, #33001b)">
        Book
        <Carousel
          index={bookCurrentIndex}
          items={book}
          startX={bookStartX}
          currentX={bookCurrentX}
          dragStart={bookDragStart}
          dragEnd={bookDragEnd}
          drag={bookDrag}
        />
      </SkewBox>
      <SkewBox color="black" end={1} gradient="linear-gradient(rgba(0,0,0,0.05) 50%, 0, transparent 100%">
        <></>
      </SkewBox>
    </Box>
  );
};

export default Home;
