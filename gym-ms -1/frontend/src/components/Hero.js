import { useContext } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HeroLayout from "./HeroLayout";
import AuthenticationContext from "../context/AuthenticationContext";

export default function Hero({ title, subtitle, bgImg }) {
  const { user } = useContext(AuthenticationContext);

  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${bgImg})`,
        backgroundColor: "#FFA500", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} src={bgImg} alt="increase priority" />
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        {title}
      </Typography>
      {!user ? (
        <Button
          color="primary"
          variant="contained"
          size="large"
          component="a"
          href="/account/sign-up/"
          sx={{ minWidth: 200 }}
        >
          Register
        </Button>
      ) : null}
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        {subtitle}
      </Typography>
    </HeroLayout>
  );
}
