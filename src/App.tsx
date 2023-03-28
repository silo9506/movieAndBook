import BookLayout from "components/Templates/BookLayout";
import Home from "components/Templates/Home";
import MovieLayout from "components/Templates/MovieLayout";
import ThemeProvider from "ThemeProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie" element={<MovieLayout />}></Route>
          <Route path="/books" element={<BookLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
