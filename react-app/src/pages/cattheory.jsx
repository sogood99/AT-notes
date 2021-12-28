import React from "react";
import { Button, Typography } from "@mui/material";
import jsonTex from "../json/test.json";
import { Link } from "react-router-dom";

export default function CatTheory() {
  const { tex } = jsonTex;
  return (
    <div>
      <Typography variant="h3">Category Theory</Typography>
      <div className="tex">{tex}</div>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
}
