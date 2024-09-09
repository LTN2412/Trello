import TextFields from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { SignInSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useTransition } from "react";
import { AuthenticateAPI } from "@/apis";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/features/user/usersSlice";
import storage from "redux-persist/lib/storage";

export default function CredentialLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) navigate("/board");
  }, [isLoggedIn]);

  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = (data) => {
    startTransition(async () => {
      try {
        await storage.removeItem("persist:root");
        await AuthenticateAPI(data);
        dispatch(fetchUser());
        navigate("/board");
      } catch (err) {
        setError("root", {
          message: err?.err,
        });
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
          mt: 2,
          gap: 1.2,
        }}
      >
        <TextFields
          variant="outlined"
          label="Username"
          InputProps={register("username")}
          onFocus={() => clearErrors("root")}
          sx={{
            ".Mui-focused": {
              borderColor: "secondary.main",
              color: "text.main",
            },
            ".Mui-focused .MuiOutlinedInput-notchedOutline ": {
              borderColor: "secondary.main",
            },
          }}
        />
        {errors.username && (
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              textAlign: "left",
              color: "red",
              fontSize: "13px",
            }}
          >
            {errors.username.message}
          </Typography>
        )}
        <TextFields
          variant="outlined"
          label="Password"
          type="password"
          InputProps={register("password")}
          onFocus={() => clearErrors("root")}
          sx={{
            ".Mui-focused": {
              color: "text.main",
              borderColor: "secondary.main",
            },
            ".Mui-focused .MuiOutlinedInput-notchedOutline ": {
              borderColor: "secondary.main",
            },
          }}
        />
        {errors.password && (
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              textAlign: "left",
              color: "red",
              fontSize: "13px",
            }}
          >
            {errors.password.message}
          </Typography>
        )}
        <Button
          variant="outlined"
          type="submit"
          disabled={isPending}
          sx={{
            color: "secondary.main",
            borderColor: "secondary.main",
            "&:hover": {
              borderColor: "secondary.main",
              opacity: "0.8",
            },
          }}
        >
          Login
        </Button>
        <Typography
          variant="body1"
          sx={{
            width: "100%",
            textAlign: "left",
            color: "red",
            fontSize: "13px",
          }}
        >
          {errors.root?.message}
        </Typography>
      </Box>
    </form>
  );
}
