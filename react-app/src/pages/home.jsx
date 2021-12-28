import React from "react";
import { Link } from "react-router-dom";
import testJson from "../json/test.json";

export default function Home() {
  const { tex } = testJson;
  return (
    <div>
      <Link to={"/test"}>Link</Link>
      {tex}
    </div>
  );
}
