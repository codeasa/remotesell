import React, { useState, useEffect } from "react";
import ReactJson from "react-json-view";

import { Sign } from "./Sign";
import { Summary } from "./Summary";
import { Upload } from "./Upload";
import { Review } from "./Review";
import { Login } from "./Login";

function Main({ screen, meta }) {
  useEffect(() => {});

  const [step, setStep] = useState(0);
  const key = Object.keys(meta.steps);
  const next = () => setStep(step + 1);

  return (
    <div className="content">
      <div>
        {key[step] === "login" && <Login fields={meta.steps.login}></Login>}
        {key[step]=== "summary" && (
          <Summary content={meta.steps.summary}></Summary>
        )}
        {key[step]=== "review" && <Review docs={meta.steps.review}></Review>}
        {key[step] === "upload" && <Upload files={meta.steps.upload}></Upload>}
        {key[step] === "upload_2" && <Upload files={meta.steps.upload_2}></Upload>}
        {key[step] === "sign" && <Sign></Sign>}
      </div>
      <div>
        <ReactJson src={{ meta }} theme="monokai" collapsed="true" />
        <ReactJson src={{ step }} theme="monokai" collapsed="true" />
      </div>
      <div className="w-full flex h-16 bg-black flex-row-reverse">
        <button
          className="bg-fwd rounded text-white w-100 px-10 m-2 hover:opacity-90"
          onClick={next}
          color="primary"
          disabled={key[step] === undefined}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Main;
