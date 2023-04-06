import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
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

const Container = styled("div")<{ bg?: string; gradient?: string }>(({ theme, color, bg, gradient }) => ({
  position: "relative",
  marginTop: "-1px",
  padding: "var(--skew-padding) 16px",
  color: color || "white",
  "&:before": {
    content: "''",
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    transform: "skewy(var(--skew))",
    outline: "1px solid transparent",
    background: bg || "unset",
    backgroundImage: gradient || "unset",
  },
}));

const Content = styled("div")<{ skew?: number }>(({ theme, skew }) => ({
  margin: "0 auto",
  alignItems: "center",
  position: "relative",
  transform: skew ? "skewY(var(--skew))" : "unset",
}));

const EndContainer = styled("div")<{ gradient?: string }>(({ theme, color, gradient }) => ({
  marginTop: "calc(( var(--skewend-padding) * -1) - 2px)",
  paddingTop: "calc(( var(--skewend-padding) * 2))",
  color: color || "white",
}));
