import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

export const Login = () => {
  const cButton = styled(Button)`
    color: red;
  `;
  return (
    <div className="w-full    h-full p-10 bg-gray-50">
      <div className="place-content-center flex-col mb-4">
        <div className="text-xl mb-4">Remote Authentication</div>
        <p className="py-5 text-sm">
          Please enter your Date of Birth, and the last 4 characters of
          ID/Passport number:
        </p>
      </div>
      <div className="mb-4">
        <TextField id="standard-basic" label="Username" className="w-full" />
      </div>
      <div className="mb-6">
        <TextField id="standard-basic" label="Birthday" className="w-full" />
      </div>
    </div>
  );
};
