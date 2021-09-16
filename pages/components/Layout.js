import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import useStyles from "../../utils/Styles";

export default function Layouts({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Amazonavi</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazonavi</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Amazonavi.</Typography>
      </footer>
    </div>
  );
}
