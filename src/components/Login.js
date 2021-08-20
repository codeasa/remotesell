import TextField from "@material-ui/core/TextField";

export const Login = ({ fields }) => {
  const showFields = fields.map((field) => {
    return (
      <div className="mb-4">
        <TextField id="standard-basic" label={field} className="w-full" />
      </div>
    );
  });

  return (
    <div className="cardContainer">
      <div>
        <div className="title">Remote Authentication</div>
        <p className="description">
          Please enter your Date of Birth, and the last 4 characters of
          ID/Passport number:
        </p>
      </div>
      {showFields}
    </div>
  );
};
