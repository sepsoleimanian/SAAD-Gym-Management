import * as React from "react";
import Container from "@mui/material/Container";
import Hero from "../src/components/Hero";
import Categories from "../src/components/Categories";
import HowItWorks from "../src/components/HowItWorks";
import Navigation from "../src/components/Navigation";

export default function Index() {
  return (
    <Container maxWidth="false" disableGutters>
      <Navigation />
      <Hero
        title={"Enjoy your online exercises!"}
        subtitle={"Discover the experience"}
        bgImg={
          "https://source.unsplash.com/gJtDg6WfMlQ?auto=format&fit=crop&w=1400"
        }
      />
      <Categories />
      <HowItWorks />
    </Container>
  );
}
