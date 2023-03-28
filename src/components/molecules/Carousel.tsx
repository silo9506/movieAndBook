import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PayloadAction } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

type CarouselProps = {
  items: { name: string; url: string }[];
  currentX: number;
  startX: number;
  index: number;
  dragStart: (index: number) => PayloadAction<number>;
  dragEnd: (index: number) => PayloadAction<number>;
  drag: (index: number) => PayloadAction<number>;
};

export default function Carousel({ items, currentX, startX, dragStart, dragEnd, drag, index }: CarouselProps) {
  const dispatch = useDispatch();
  const [max, setMax] = useState(Math.floor(items.length / 3));

  const handleDragStart = (e: React.MouseEvent) => {
    dispatch(dragStart(e.clientX));
  };

  const handleDrag = (e: React.MouseEvent) => {
    if (startX) {
      let clientX = e.clientX - startX;
      dispatch(drag(clientX));
    }
  };

  const handleDragEnd = (e: React.MouseEvent) => {
    if (startX) {
      dispatch(dragEnd(e.clientX));
    }
  };

  return (
    <Container>
      <Wrapper
        index={index}
        currentx={currentX}
        max={max}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
      >
        {items.map((item, index) => (
          <Box key={index} sx={{ height: "400px", width: "calc(80vw / 5)", flexShrink: 0, padding: "8px" }}>
            <img draggable={false} style={{ width: "100%", height: "100%", maxHeight: "350px" }} src={item.url}></img>
            <Typography sx={{ display: "inline-block" }}>{item.name}</Typography>
          </Box>
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled(Box)(
  ({ theme }) => `
  width:80vw;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  background-color:#003;

`
);

const Wrapper = styled(Box)<{ index: number; currentx: number; max: number }>(
  ({ theme, index, currentx, max }) => `
width:100%;
height:100%;
display:flex;
transform:translateX(calc(-${(index + max) * 20}% + ${currentx}px));
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none
`
);

// transform: translateX(calc(5px + 20px);
// transform: translateX(calc(${currentindex + max} * 100% + ${transx})px);
// transform:translateX(-${currentindex + transx}px);
// transform:translateX(${-currentIndex * 100}%);
