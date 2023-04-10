import { Box, Typography, useTheme } from "@mui/material";
import SkewBox from "components/molecules/SkewBox";
import Logo from "assets/img/Logo.png";
import Carousel from "components/molecules/Carousel";
import { Link } from "react-router-dom";
import { samples } from "data/samples";

const Home = () => {
  const { books, movies } = samples;
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: "#003", color: "white" }}>
      <Box
        sx={{
          marginBottom: "calc((var(--skewend-padding) * -1) - 2px)",
          paddingBottom: "calc((var(--skewend-padding) * 2))",
          fontSize: "30px",
        }}
      >
        <Box sx={{ maxWidth: "50vw", margin: "0 auto", wordBreak: "keep-all", textAlign: "center" }}>
          <img height={125} style={{ width: "50%" }} src={Logo}></img>
        </Box>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              maxWidth: "90vw",
            },
            textAlign: "center",
            background: "#fff",
            color: "#003",
            fontWeight: "900",
            padding: "0px 16px",
            margin: "0 auto",
            maxWidth: "50vw",
            wordBreak: "keep-all",
          })}
        >
          <Typography
            variant="h6"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: "16px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "13px",
              },
              fontSize: "20px",
              paddingY: "20px",
              paddingLeft: "8px",
              fontWeight: "inherit",
            })}
          >
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            component={Link}
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                fontSize: "16px",
              },
              textDecoration: "unset",
              background: "linear-gradient(to right, #fff 50%,#f56465 50%)",
              backgroundSize: "200%",
              transition: "ease-in-out 0.5s",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              "&:hover": { backgroundPosition: "-100%" },
            })}
            to={"/movies"}
            variant="h2"
          >
            Movie
          </Typography>
          <Carousel items={movies} />
        </Box>
        <Box sx={{ marginTop: "8px", display: "flex", justifyContent: "flex-end" }}>
          <Typography
            component={Link}
            to={"/movies"}
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
              },
              textDecoration: "unset",
              color: "#0f0042",
              marginTop: "8px",
              fontWeight: "bold",
              fontSize: "20px",
            })}
            variant="h5"
          >
            영화검색으로 이동
          </Typography>
        </Box>
      </SkewBox>
      <SkewBox skew={1} gradient="linear-gradient(-135deg, #ff0084, #33001b)">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            component={Link}
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                fontSize: "16px",
              },
              textDecoration: "unset",
              background: "linear-gradient(to right, #fff 50%,#f56465 50%)",
              backgroundSize: "200%",
              transition: "ease-in-out 0.5s",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              "&:hover": { backgroundPosition: "-100%" },
            })}
            to={"/books"}
            variant="h2"
          >
            Book
          </Typography>
          <Carousel items={books} />
        </Box>
        <Box sx={{ marginTop: "8px", display: "flex", justifyContent: "flex-end" }}>
          <Typography
            component={Link}
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
              },
              textDecoration: "unset",
              color: "#0f0042",
              marginTop: "8px",
              fontWeight: "bold",
              fontSize: "20px",
            })}
            variant="h5"
            to={"/books"}
          >
            도서검색으로 이동
          </Typography>
        </Box>
      </SkewBox>
      <SkewBox color="black" end={1} gradient="linear-gradient(rgba(0,0,0,0.05) 50%, 0, transparent 100%">
        <></>
      </SkewBox>
    </Box>
  );
};

export default Home;
