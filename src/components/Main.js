import React, { useState, useEffect } from "react";

import ReactJson from "react-json-view";

import { Sign } from "./Sign";
import { Summary } from "./Summary";
import { Upload } from "./Upload";
import { Review } from "./Review";
import { Login } from "./Login";

import { Button } from "@material-ui/core";

function Main({ screen, meta }) {
  const [step, setStep] = useState(0);
  useEffect(() => {});

  const key = Object.keys(meta.steps);

  const next = () => {
    setStep(step + 1);
    console.log(key[step]);
  };
  return (
    <div className="content">
      <div className="overflow-auto">
        {key[step] === "login" && <Login></Login>}
        {key[step] === "summary" && (
          <Summary content={meta.steps.summary}></Summary>
        )}
        {key[step] === "review" && <Review docs={meta.steps.review}></Review>}
        {key[step] === "upload" && <Upload></Upload>}
        {key[step] === "sign" && <Sign></Sign>}
      </div>
      <div>
        <ReactJson src={{ meta }} theme="monokai" collapsed="true" />
        <ReactJson src={{ step }} theme="monokai" collapsed="true" />
      </div>
      <div className="w-full flex h-16 bg-black flex-row-reverse">
        <button
          className="bg-fwd rounded text-white w-100 px-10 my-2 mx-2 hover:opacity-90"
          onClick={next}
          color="primary"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Main;
