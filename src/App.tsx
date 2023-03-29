import Layout from "components/Templates/Layout";
import Home from "components/Templates/Home";
import ThemeProvider from "ThemeProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookPage from "components/Templates/BookPage";
import MoviePage from "components/Templates/MoviePage";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search/:params" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
