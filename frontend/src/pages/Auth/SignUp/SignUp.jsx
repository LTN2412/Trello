import TextFields from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState, useTransition } from "react";
import { SignUpSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserAPI } from "@/apis";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { userLogout } from "@/features/user/usersSlice";
import { useNavigate } from "react-router-dom";

const errorText = {
  color: "red",
  width: "100%",
  textAlign: "left",
  fontSize: 12,
};

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      verifyPassword: "",
      email: "",
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (formData) => {
    startTransition(async () => {
      if (formData.password !== formData.verifyPassword) {
        setError("verifyPassword", {
          message: "Password didn't match",
        });
      } else {
        delete formData["verifyPassword"];
        await CreateUserAPI(formData).then((err) => {
          setError("root", { message: err?.error });
        });
        dispatch(userLogout());
        navigate("/board");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          mt: 7,
        }}
      >
        <TextFields
          variant="outlined"
          label="Username"
          name="username"
          InputProps={register("username")}
        />
        <Typography sx={errorText}>{errors.username?.message}</Typography>
        <FormControl sx={{ width: "25ch" }} variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            inputProps={register("password")}
          />
        </FormControl>
        <Typography sx={errorText}>{errors.password?.message}</Typography>
        <FormControl sx={{ width: "25ch" }} variant="outlined">
          <InputLabel>Verify Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Verify Password"
            inputProps={register("verifyPassword")}
          />
        </FormControl>
        <Typography sx={errorText}>{errors.verifyPassword?.message}</Typography>
        <TextFields
          variant="outlined"
          label="Email"
          name="email"
          InputProps={register("email")}
        />
        <Typography sx={errorText}>{errors.email?.message}</Typography>
        <Typography sx={errorText}>{errors.root?.message}</Typography>
        <Button variant="outlined" type="submit" disabled={isPending}>
          Sign Up
        </Button>
      </Box>
    </form>
  );
}
