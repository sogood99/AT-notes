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
      <div className="tex">
        {vanKampenExplain} When the there are exactly two open covers then the
        path connectedness is vacuously satisfied and it yields this nice
        commutative diagram from
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Seifert%E2%80%93Van_Kampen_theorem"
        >
          Wikipedia
        </a>
        .
      </div>
      <div>
        <img src="fig/VanKampen.png" alt="Van Kampen Commutative Diagram" />
      </div>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
}
