import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Link to={"/cattheory"}>
        <Button variant="outlined">Category Theory</Button>
      </Link>
    </div>
  );
}
