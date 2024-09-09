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
  verifyPassword: z.string().min(1, {
    message: "Verify Password is required",
  }),
  email: z.string().email("Not format email"),
});
