import { Container, AppBar, Toolbar, Tabs, Tab, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
//   import { flexbox } from 'styles/mixins';
//   import { useShoppingCart } from 'modules/ShoppingCartContext';

const Navbar = ({ params }: any) => {
  // const { cartQuantity, toggleDrawer } = useShoppingCart();
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  console.log(params);
  return (
    <>
      <AppBar color="default" position="sticky" sx={{ boxShadow: 1, backgroundColor: "white", paddingY: "5px" }}>
        <Container>
          <Toolbar disableGutters={true} variant="dense">
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
                <Tab component={RouterLink} to="/search/movies" label="Movie" />
                <Tab component={RouterLink} to="/" label="Home" />
                <Tab component={RouterLink} to="/search/books" label="Books" disabled />
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
                <Tab component={RouterLink} to="/search/books" label="Books" />
                <Tab component={RouterLink} to="/" label="Home" />
                <Tab component={RouterLink} to="/search/movies" label="Movie" disabled />
              </Tabs>
            )}
            {/* <CartBtn sx={{ backgroundColor: "transparent" }} onClick={toggleDrawer(true)}>
              <ShoppingCartIcon color="info" />
              <div className="alert-circle">{cartQuantity}</div>
            </CartBtn> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

const CartBtn = styled(IconButton)`
  border: 1px solid var(--primary);
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
  }
  svg {
    fill: var(--primary);
  }
  &:hover {
    background-color: var(--primary);
    svg {
      fill: white;
    }
  }
`;

export default Navbar;
