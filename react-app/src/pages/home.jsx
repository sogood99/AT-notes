import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" style={{ marginBottom: "20px" }}>
        Table Of Contents
      </Typography>
      <Link to={"/cattheory"} style={{ marginBottom: "20px" }}>
        <Button variant="outlined">Category Theory</Button>
      </Link>
      <Link to={"/vankampen"} style={{ marginBottom: "20px" }}>
        <Button variant="outlined">Van Kampen Theorem</Button>
      </Link>
      <Link to={"/singularhom"}>
        <Button variant="outlined">Singular Homology</Button>
      </Link>
    </div>
  );
}
