import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import GlobalStyle from "styles/GlobalStyle";
import { createTheme, ThemeProvider as Provider } from "@mui/material/styles";
import { ThemeProvider as EmotionProvider } from "@emotion/react";
type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { darkmode } = useSelector((state: any) => state.themeSlice);

  const theme = createTheme({
    palette: {
      mode: darkmode ? "dark" : "light",
      primary: {
        main: "#003",
      },
    },
  });

  return (
    <Provider theme={theme}>
      <EmotionProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </EmotionProvider>
    </Provider>
  );
};

export default ThemeProvider;
