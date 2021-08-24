import TextField from "@material-ui/core/TextField";

export const Login = ({ fields }) => {
  const showFields = fields.map((field) => {
    return (
      <div>
        <TextField id="standard-basic" label={field} />
      </div>
    );
  });

  return (
    <div className="cardContainer  ">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-white h-full py-3 rounded text-center">
              <h1 className="text-2xl font-bold">Remote Authentication</h1>
              <p className="description">
                Please enter your Date of Birth, and the last 4 characters of
                ID/Passport number:
              </p>
              {showFields}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
