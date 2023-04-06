import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

type CarouselProps = {
  items: { name: string; url: string }[];
};

export default function Carousel({ items }: CarouselProps) {
  const [onDrag, setOnDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(10);

  const handleDragStart = (e: React.MouseEvent) => {
    setOnDrag(true);
    setStartX(e.pageX);
  };

  const handleDrag = (e: React.MouseEvent) => {
    if (onDrag) {
      const transX = translateX + (e.pageX - startX) / 100;
      setTranslateX(() => {
        if (transX < -10) {
          return -10;
        }
        if (transX > 120) {
          return 120;
        }
        return transX;
      });
    }
  };

  const handleDragEnd = (e: React.MouseEvent) => {
    if (onDrag) {
      setOnDrag(false);
      setTranslateX((prev) => {
        if (prev < 10) {
          return 10;
        }
        if (prev > 100) {
          return 110;
        }
        return prev;
      });
    }
  };

  return (
    <Container>
      <Wrapper
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        translatex={translateX}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", flexDirection: "column", width: "calc(80vw / 5)", flexShrink: 0, padding: "8px" }}
          >
            <img draggable={false} style={{ width: "100%", height: "100%" }} src={item.url}></img>
            <Typography
              sx={{ textAlign: "center", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled(Box)(({ theme }) => ({
  width: "80vw",
  height: "100%",
  overflow: "hidden",
  margin: "0 auto",
  position: "relative",
  backgroundColor: "#003",
}));

const Wrapper = styled(Box)<{ translatex: number }>(({ theme, translatex }) => ({
  cursor: "grab",
  width: "100%",
  height: "100%",
  display: "flex",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
  flexShrink: "0",
  transform: `translate(-${translatex}%)`,
  transition: "all ease-in-out",
  paddingLeft: "10%",
}));

// const Container = styled(Box)(
//   ({ theme }) =>
//     css`
//       width: 80vw;
//       height: 100%;
//       overflow: hidden;
//       margin: 0 auto;
//       position: relative;
//       background-color: #003;
//     `
// );

// const Wrapper = styled(Box)(
//   ({ theme }) =>
//     css`
//       width: 100%;
//       height: 100%;
//       display: flex;
//       -webkit-user-select: none;
//       -moz-user-select: none;
//       -ms-user-select: none;
//       user-select: none;
//     `
// );

// const Container = styled(Box)(
//   ({ theme }) => `
//   width:80vw;
//   height: 100%;
//   overflow: hidden;
//   margin: 0 auto;
//   position: relative;
//   background-color:#003;
// `
// );

// const Wrapper = styled(Box)(
//   ({ theme }) => `
// width:100%;
// height:100%;
// display:flex;
// -webkit-user-select:none;
// -moz-user-select:none;
// -ms-user-select:none;
// user-select:none
// `
// );
