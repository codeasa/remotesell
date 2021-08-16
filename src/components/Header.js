import logo from "../assets/logo.png";
export const Header = ({ summary }) => {
  return (
    <div className="bg-fwd h-20 px-4 py-4 flex justify-between flex-auto">
      <img src={logo} className="h-full"></img>
      <div>
        <h2>Policy No</h2>
        {summary.policyno}
      </div>
    </div>
  );
};
