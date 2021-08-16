import logo from "../assets/logo.png";
export const Header = ({ summary }) => {
  return (
    <div className="bg-fwd  ">
      <div className="h-20 px-4 py-4 flex justify-between ">
        <img src={logo} className="h-full"></img>
        <div>
          <h2>Policy No</h2>
          {summary.policyno}
        </div>
      </div>
    </div>
  );
};
