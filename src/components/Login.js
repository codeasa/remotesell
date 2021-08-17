import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

export const Login = ({ fields }) => {
 
  const showFields = fields.map((field) => {
    return (
      <div className="mb-4">
        <TextField id="standard-basic" label={field} className="w-full" />
      </div>
    );
  });

  return (
    <div className="w-full h-full p-10 bg-gray-50">
      <div className="place-content-center flex-col mb-4">
        <div className="text-xl mb-4">Remote Authentication</div>
        <p className="py-5 text-sm">
          Please enter your Date of Birth, and the last 4 characters of
          ID/Passport number:
        </p>
      </div>
      {showFields}
    </div>
  );
};
