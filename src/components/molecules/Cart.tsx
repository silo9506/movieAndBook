import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import { Action, ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

type cartProps = { isOpen: boolean; cartOpen: ActionCreatorWithoutPayload; cartClose: ActionCreatorWithoutPayload };

const Cart = ({ isOpen, cartOpen, cartClose }: cartProps) => {
  //   const { toggleDrawer, cartItems, cartQuantity } = useShoppingCart();
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Drawer anchor={"right"} open={isOpen} onClose={() => dispatch(cartClose())}>
        <Box role="presentation" sx={{ width: "400px" }}>
          <List>
            <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
              Cart
              <IconButton onClick={() => dispatch(cartClose())}>
                <CloseIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <Stack direction="column" justifyContent="center" alignItems="center" spacing={1} sx={{ width: "100%" }}>
                {/* {cartItems.map((item) => (
              <CartItems key={item.id} {...item} />
            ))} */}
              </Stack>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Cart;
