import React from "react";
import { Button, Typography } from "@mui/material";
import singularHomDefJson from "../json/SingularHomDef.json";
import { Link } from "react-router-dom";

export default function SingularHom() {
  const singularHomDef = singularHomDefJson.tex;
  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Singular Homology
      </Typography>
      <div className="tex">{singularHomDef}</div>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
}
