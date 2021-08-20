export const OTP = () => {
  const getOTP = () => (
    <div class="mb-6 text-center">
      <div id="otp" class="flex justify-center">
        <input type="text" id="field-name" name="field-name" maxlength="4" />
      </div>
    </div>
  );
  return (
    <div className="cardContainer  ">
      <div className="">
        <div className="title">OTP</div>
        <p className="description w-full"></p>
      </div>
      <div className="justify-content bg-gray">
        <h2>key in the OTP</h2>
        <div className=""> {getOTP()}</div>
      </div>
    </div>
  );
};
