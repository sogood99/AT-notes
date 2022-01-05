import React from "react";
import { Button, Typography } from "@mui/material";
import CatDef from "../json/CatDef.json";
import { Link } from "react-router-dom";

export default function CatTheory() {
  const catDefTex = CatDef.tex;
  return (
    <div>
      <Typography variant="h3" style={{ marginBottom: "20px" }}>
        Category Theory
      </Typography>
      <div className="tex">{catDefTex}</div>
      <Link to="/" style={{ marginTop: "20px" }}>
        <Button>Back</Button>
      </Link>
    </div>
  );
}
