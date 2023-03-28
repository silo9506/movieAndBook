import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --skewbox-width: 100vw;
  --skew:6deg;
  --keynumber:0.09719;
  --skew-padding: calc(var(--skewbox-width) * var(--keynumber));
  --skewend-padding: calc(var(--skewbox-width) * var(--keynumber));
  }
`;

export default GlobalStyle;
