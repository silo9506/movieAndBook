import {
  Container,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  IconButton,
  InputBase,
  alpha,
  ButtonBase,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import { styled } from "@mui/material/styles";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import Logo from "assets/img/miniLogo.png";

type NavbarProps = {
  params?: string;
  cartOpen: ActionCreatorWithoutPayload;
  bookQueryChange: (newQuery: string) => void;
  bookStartChange: () => void;
  moviePageChange: () => void;
  movieQueryChange: (newQuery: string) => void;
  movieQuery: string;
  bookQuery: string;
};
const Navbar = ({
  params,
  cartOpen,
  bookQueryChange,
  bookStartChange,
  moviePageChange,
  movieQueryChange,
  movieQuery,
  bookQuery,
}: NavbarProps) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const onClickCart = () => {
    dispatch(cartOpen());
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (params === "books") {
      if (bookQuery === query) return;
      bookQueryChange(query);
      bookStartChange();
    } else {
      if (movieQuery === query) return;
      movieQueryChange(query);
      moviePageChange();
    }
  };

  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ boxShadow: 1, backgroundColor: "white", paddingY: "5px" }}>
      <Container>
        <Toolbar disableGutters={true} variant="dense">
          <Link to="/">
            <img src={Logo} style={{ height: "2rem", width: "100%" }}></img>
          </Link>
          <ToggleButtonGroup sx={{ flex: "1" }} size="small" color="primary" value={params} exclusive>
            <StyledToggleButton onClick={() => navigate("/movies")} value="movies">
              Movies
            </StyledToggleButton>
            <StyledToggleButton onClick={() => navigate("/books")} value="books">
              Books
            </StyledToggleButton>
          </ToggleButtonGroup>

          <Search onSubmit={(e) => onSubmit(e)} component={"form"}>
            <StyledInputBase
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              placeholder="작품명을 입력 해주세요"
              required
            ></StyledInputBase>
            <StyledSearchButton type="submit">
              <SearchIcon />
            </StyledSearchButton>
          </Search>

          {/* <CartBtn onClick={onClickCart} sx={{ backgroundColor: "transparent" }}>
            <ShoppingCartIcon color="info" />
          </CartBtn> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const CartBtn = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  marginLeft: "8px",
  borderRadius: "50%",
  position: "relative",
  ".alert-circle": {
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: "translate(25%, 25%)",
    backgroundColor: "red",
    borderRadius: "50%",
    color: "white",
    width: "1.5rem",
    height: "1.5rem",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    svg: {
      fill: "white",
    },
  },
}));

const Search = styled(Box)(({ theme }) => ({
  height: "40px",
  borderRadius: "4px",
  position: "relative",
  display: "flex",
  border: `1px solid ${theme.palette.mode === "dark" ? "white" : "black"}`,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  color: theme.palette.mode === "dark" ? "white" : "black",
  "& input::placeholder": {
    color: theme.palette.mode === "dark" ? "white" : "black",
  },
  "& .MuiInputBase-input": {
    width: "100%",
    padding: "0 8px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      padding: "0 4px",
    },
  },
}));

const StyledSearchButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  padding: "4px 8px",
  [theme.breakpoints.down("sm")]: {
    padding: "4px 4px",
  },
  backgroundColor: theme.palette.mode === "dark" ? "white" : "#0288d1",
  "& svg": {
    fill: theme.palette.mode === "dark" ? "black" : "white",
  },
  "&:hover svg": {
    fill: theme.palette.mode === "dark" ? "white" : "black",
  },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  border: "none",
  position: "relative",
  transition: "0.5s",
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    padding: "7px 2px",
  },
  "&::after": {
    position: "absolute",
    content: "''",
    bottom: "7px",
    left: "10%",
    width: "80%",
    height: "3px",
    background: "#3498db",
    transform: "scaleX(0)",
    transformOrigin: "right",
    transition: "transform 0.5s",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "left",
  },
  "&:hover": { backgroundColor: "unset" },
  "&.Mui-selected": { backgroundColor: "unset" },
  "&.Mui-selected::after": {
    position: "absolute",
    content: "''",
    bottom: "7px",
    left: "10%",
    width: "80%",
    height: "3px",
    background: "#3498db",
    transform: "scaleX(1)",
    transformOrigin: "right",
    transition: "transform 0.5s",
  },
  "&.Mui-selected:hover": { backgroundColor: "unset" },
}));

export default Navbar;
