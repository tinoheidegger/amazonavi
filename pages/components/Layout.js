import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";

export default function Layouts({ children }) {
  return (
    <div>
      <Head>
        <title>Amazonavi</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>amazonavi</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Amazonavi.</Typography>
      </footer>
    </div>
  );
}
