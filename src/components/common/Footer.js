import React from "react";
import { Container, Typography } from "@mui/material";
import "../../assets/styles.css";

const Footer = () => (
  <footer className="footer">
    <Container>
      <Typography>
        &copy; {new Date().getFullYear()} ScitForte All rights
        reserved.
      </Typography>
    </Container>
  </footer>
);

export default Footer;
