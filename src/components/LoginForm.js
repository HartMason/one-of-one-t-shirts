import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userNameInput = useRef("");
  const passwordInput = useRef("");

  const handleSubmit = async () => {
    const userLogin = {
      user_email: userNameInput.current.value,
      user_password: passwordInput.current.value,
    };
    console.log(userLogin, "USER LOGIN INFOOOOOOOOOO");
    props.fetchLogin(userLogin);

    dispatch(
      props.login({
        username: userNameInput.current.value,
        password: passwordInput.current.value,
      })
    );
    // navigate("/Listings")
  };

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
            inputref={userNameInput}
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            // pass down to FormLabel as children
            label="Email"
          />
          <TextField
            inputref={passwordInput}
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
          <Button
            sx={{
              mt: 1, // margin top
            }}
          >
            Log in
          </Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
