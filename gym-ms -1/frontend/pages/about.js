import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../src/components/Link";
import Navigation from "../src/components/Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About us page
          </Typography>
          <Typography component="p" gutterBottom>
            This is a example page for about us page that you can edit it.
          </Typography>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the main page
          </Button>
        </Box>
      </Container>
    </>
  );
}
