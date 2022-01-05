import React from "react";
import { Button, Typography } from "@mui/material";
import vanKampenJson from "../json/VanKampen.json";
import vanKampenExplainJson from "../json/VanKampenExplain.json";
import { Link } from "react-router-dom";
import "./tex.css";

export default function VanKampen() {
  const vanKampen = vanKampenJson.tex;
  const vanKampenExplain = vanKampenExplainJson.tex;
  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Van Kampen Theorem and Applications
      </Typography>
      <div className="theorem"> (Van Kampen's Theorem) {vanKampen}</div>
      <div className="tex">{vanKampenExplain}</div>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
}
