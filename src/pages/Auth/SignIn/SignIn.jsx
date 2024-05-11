import Typography from "@mui/material/Typography";
import OAuthLogin from "./OAuthLogin/OAuthLogin";
import CredentialLogin from "./CredentialLogin/CredentialLogin";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Log In
      </Typography>
      <OAuthLogin />
      <CredentialLogin />
      <Typography sx={{ mt: 2 }}>
        {"Not a member? "}
        <Link
          to={"/auth/signup"}
          style={{ color: "black", textDecoration: "none", fontWeight: "bold" }}
        >
          Sign up
        </Link>
        {" now"}
      </Typography>
    </>
  );
}
