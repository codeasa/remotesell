import React, { useState, useEffect } from "react";
import ReactJson from "react-json-view";

import { Sign } from "./Sign";
import { Summary } from "./Summary";
import { Upload } from "./Upload";
import { Review } from "./Review";
import { Login } from "./Login";
import Selfie from "./Selfie";
import { OTP } from "./OTP";
import { Declaration } from "./Declaration";

function Main({ screen, meta }) {
  useEffect(() => {});

  const [step, setStep] = useState(0);
  const key = Object.keys(meta.steps);
  const next = () => setStep(step + 1);

  return (
    <div className="content">
      <div>
        {meta.steps[step].type === "login" && (
          <Login fields={meta.steps[step].data}></Login>
        )}
        {meta.steps[step].type === "summary" && (
          <Summary content={meta.steps[step].data}></Summary>
        )}
        {meta.steps[step].type === "review" && (
          <Review docs={meta.steps[step].data}></Review>
        )}
        {meta.steps[step].type === "upload" && (
          <Upload files={meta.steps[step].data}></Upload>
        )}
        {meta.steps[step].type === "selfie" && <Selfie></Selfie>}
        {meta.steps[step].type === "sign" && <Sign></Sign>}
        {meta.steps[step].type === "declaration" && <Declaration></Declaration>}
        {meta.steps[step].type === "otp" && <OTP></OTP>}
        {!meta.steps[step].type && (
          <div className="flex justify-center">
            <div>Complete</div>
          </div>
        )}
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
          disabled={meta.steps[step].type === undefined}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Main;
