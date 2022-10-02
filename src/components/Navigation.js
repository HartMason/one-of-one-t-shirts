import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import TransitionsModal from "./TransitionsModal";

export default function Navigation(props) {
  const dispatch = useDispatch();
  const { user } = props;

  const handleClick = () => {
    console.log("logout");
    dispatch(props.logOut());
  };

  useEffect(() => {
    console.log(user, user.online, "effect");
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#ccdee2" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="primary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ONE OF ONE TSHIRTS
          </Typography>
          {user.online === true ? (
            <Button onClick={handleClick} color="primary">
              Logout
            </Button>
          ) : (
            // <Button component={Link} to={"/"} color="inherit">
            <TransitionsModal />
            // </Button>
          )}
          <Button component={Link} to={"/"} color="primary" font-size="bold">
            HOME
          </Button>
          <Button component={Link} to={"/about"} color="primary">
            ABOUT
          </Button>
          <Button component={Link} to={"/shirts"} color="primary">
            SHIRTS
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
