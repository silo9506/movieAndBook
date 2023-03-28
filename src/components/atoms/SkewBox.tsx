import React, { ReactNode } from "react";
// import styled from "@emotion/styled";
import styled from "styled-components";
import { Box } from "@mui/material";

type skewboxProps = {
  children: ReactNode;
  end?: number;
  skew?: number;
  bg?: string;
  color?: string;
  gradient?: string;
};

export default function SkewBox({ children, bg, end, color, skew, gradient }: skewboxProps) {
  return (
    <>
      {end ? (
        <EndContainer gradient={gradient} color={color}>
          <Content>{children}</Content>
        </EndContainer>
      ) : (
        <Container gradient={gradient} bg={bg} color={color}>
          <Content skew={skew}>{children}</Content>
        </Container>
      )}
    </>
  );
}

const Container = styled(Box)<{ bg?: string; gradient?: string }>(
  ({ theme, color, bg, gradient }) => `
  position: relative;
  margin-top: -1px;
  padding: var(--skew-padding) 16px;
  color: ${color ? color : "white"};
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: skewy(var(--skew));
    outline: 1px solid transparent;
    background: ${bg ? bg : "unset"};
    background-image:${gradient ? gradient : "unset"};
  }
`
);

const Content = styled(Box)<{ skew?: number }>(
  ({ theme, skew }) => `
  display:flex;
  margin:0 auto;
  align-items:center;
  position:relative;
  transform:${skew ? "skewY(var(--skew))" : "unset"};
`
);

const EndContainer = styled(Box)<{ gradient?: string }>(
  ({ theme, color, gradient }) => `
  margin-top: calc(( var(--skewend-padding) * -1) - 2px);
  padding-top: calc(( var(--skewend-padding) * 2));
  color: ${color ? color : "white"};
`
);
// padding-top: calc((100vw * var(--keynumber) * 2));

// const Content = styled(Box)(({ theme, skew }: any) => ({
//   margin: "0 auto",
//   position: "relative",
//   transform: skew ? "skewY(var(--skew))" : "unset",
// }));

// const EndContainer = styled(Box)(({ theme, color }: any) => ({
//   marginTop: "calc((100vw * var(--keynumber) * -1) - 2px)",
//   paddingTop: "calc((100vw * var(--keynumber) * 2))",
//   color: color ? color : "white",
// }));

// const Container = styled(Box)(({ theme, bg, color }: any) => ({
//   position: "relative",
//   marginTop: "-1px",
//   padding: "calc(100vw * var(--keynumber)) 16px",
//   color: color ? color : "white",
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     left: "0",
//     top: "0",
//     right: "0",
//     bottom: "0",
//     transform: "skewy(var(--skew))",
//     outline: "1px solid transparent",
//     backgroundColor: bg ? bg : "unset",
//   },
// }));
