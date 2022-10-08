import * as React from "react";
import axios from "axios";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
};

export default function LoginForm(props) {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const body = { user_email: input.email, user_password: input.password };
      const { data } = await axios.post(
        "https://one-of-one-t-shirts.vercel.app/users/login",
        body
      );
      console.log("data", data);
      props.handleClose() 
    } catch (error) {
      console.error("error handling login", error);
    }
  };

  // const dispatch = useDispatch();
  // const userNameInput = useRef("");
  // const passwordInput = useRef("");

  // const handleSubmit = async () => {
  //   const userLogin = {
  //     user_email: userNameInput.current.value,
  //     user_password: passwordInput.current.value,
  //   };
  //   console.log(userLogin, "USER LOGIN INFOOOOOOOOOO");
  //   props.fetchLogin(userLogin);

  //   dispatch(
  //     props.login({
  //       username: userNameInput.current.value,
  //       password: passwordInput.current.value,
  //     })
  //   );
  //   // navigate("/Listings")
  // };
  console.log("input", input);
  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            maxWidth: 400,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <TextField
            value={input.email}
            onChange={handleChange}
            // inputref={userNameInput}
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            // pass down to FormLabel as children
            label="Email"
          />
          <TextField
            value={input.password}
            onChange={handleChange}
            // inputref={passwordInput}
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
          <Button
            onClick={handleSubmit}
            sx={{
              mt: 1, // margin top
            }}
          >
            Log in
          </Button>
          <Typography
            fontSize="sm"
            sx={{ alignSelf: "center" }}
            >
            Don&apos;t have an account?
            <Link to="/sign-up">Sign up</Link>
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
