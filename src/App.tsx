import Layout from "components/Templates/Layout";
import Home from "components/Templates/Home";
import ThemeProvider from "ThemeProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookPage from "components/Templates/BookPage";
import MoviePage from "components/Templates/MoviePage";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:params" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
