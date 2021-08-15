import React, { useState, useEffect } from "react";

import ReactJson from "react-json-view";
 
import { Sign } from "./Sign";
import { Summary } from "./Summary";
import { Upload } from "./Upload";
import { Review } from "./Review";
import { Login } from "./Login";

function Main({ screen }) {
  const [step, setStep] = useState(0);
  useEffect(() => {});

  var meta = {
    steps: {
      login: {
        fields: ["name", "birthday"],
      },

      summary: { premium: 10000, suminsured: 100000, base: "Set for Health" },

      review: [],
      upload: [],
      sign: {},
    },
  };
  const key = Object.keys(meta.steps);

  const next = () => {
    setStep(step + 1);
    console.log(key[step]);
  };
  return (
    <div className="content">
      <div className="">
        {key[step] === "login" && <Login></Login>}
        {key[step] === "summary" && (
          <Summary content={meta.steps.summary}></Summary>
        )}
        {key[step] === "review" && <Review></Review>}
        {key[step] === "upload" && <Upload></Upload>}
        {key[step] === "sign" && <Sign></Sign>}
      </div>
      <div>
        <ReactJson src={{ step }} theme="monokai" collapsed="true" />
      </div>
      <div className="w-full flex h-16 bg-black flex-row-reverse">
        <button
          className="bg-fwd rounded text-white w-100 px-4 my-2 mx-2 hover:opacity-90"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Main;
