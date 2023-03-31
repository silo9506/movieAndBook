import { Container, AppBar, Toolbar, Tabs, Tab, IconButton, InputBase, alpha, ButtonBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { Action, Dispatch, ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import Logo from "assets/img/miniLogo.png";
import useNaverBook from "hooks/useNaverBook";
//   import { flexbox } from 'styles/mixins';
//   import { useShoppingCart } from 'modules/ShoppingCartContext';

type NavbarProps = {
  params?: string;
  cartOpen: ActionCreatorWithoutPayload;
};
const Navbar = ({ params, cartOpen }: NavbarProps) => {
  const [value, setValue] = useState(1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const onClickCart = () => {
    dispatch(cartOpen());
  };

  return (
    <>
      <AppBar position="sticky" sx={{ boxShadow: 1, backgroundColor: "white", paddingY: "5px" }}>
        <Container>
          <Toolbar disableGutters={true} variant="dense">
            <Link to="/">
              <img src={Logo} height="50"></img>
            </Link>
            {params === "books" ? (
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                  flex: 1,
                  ".MuiTabs-indicator": {
                    backgroundColor: "unset",
                  },
                }}
              >
                <Tab component={RouterLink} to="/search/books" label="Books" disabled />
                <Tab component={RouterLink} to="/search/movies" label="Movie" />
              </Tabs>
            ) : (
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                  flex: 1,
                  ".MuiTabs-indicator": {
                    backgroundColor: "unset",
                  },
                }}
              >
                <Tab component={RouterLink} to="/search/movies" label="Movie" disabled />
                <Tab component={RouterLink} to="/search/books" label="Books" />
              </Tabs>
            )}
            {/*  */}
            <Search component={"form"}>
              <StyledInputBase placeholder="작품명을 입력 해주세요 " required></StyledInputBase>
              <StyledSearchButton type="submit">
                <SearchIcon />
              </StyledSearchButton>
            </Search>

            {/*  */}
            <CartBtn onClick={onClickCart} sx={{ backgroundColor: "transparent" }}>
              <ShoppingCartIcon color="info" />
            </CartBtn>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

const CartBtn = styled(IconButton)`
  /* border: 1px solid var(--primary); */
  border: 1px solid #0288d1;
  margin-left: 8px;
  border-radius: 50%;
  position: relative;
  .alert-circle {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(25%, 25%);
    background-color: red;
    border-radius: 50%;
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: #0288d1;
    svg {
      fill: white;
    }
  }
`;

const Search = styled(Box)(({ theme }) => ({
  height: "40px",
  borderRadius: "4px",
  position: "relative",
  display: "flex",
  border: "1px solid black",
  flex: 1,
  // "&:hover": {},
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: "inherit",
  flex: 1,
  color: "black",
  "& input::placeholder": { color: "black" },
  "& .MuiInputBase-input": {
    width: "100%",
    padding: "0 8px",
    height: "100%",
  },
}));

const StyledSearchButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  padding: "4px 8px",
  backgroundColor: "#0288d1",
  "&:hover svg": {
    fill: "black",
  },
}));

export default Navbar;
