import { ReactNode } from "react";
import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider as Provider } from "@mui/material";
import { useSelector } from "react-redux";
import GlobalStyle from "styles/GlobalStyle";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { darkTheme } = useSelector((state: any) => state.themeSlice);
  const theme = createTheme({
    palette: {
      mode: darkTheme ? "dark" : "light",
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <Provider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        {children}
      </Provider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
