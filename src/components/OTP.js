export const OTP = () => {
  const getOTP = () => (
    <div className="">
      <input className="w-8 m-2" />
      <input className="w-8 m-2" />
      <input className="w-8 m-2" />
      <input className="w-8 m-2" />
      <input className="w-8 m-2" />
      <input className="w-8 m-2" />
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
