import { z } from "zod";

export const SignInSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export default SignInSchema;

export const SignUpSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  email: z.string().email(),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
