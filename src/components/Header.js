import logo from "../assets/logo.png";
export const Header = ({ summary }) => {
  return (
    <div className="bg-fwd  ">
      <div className="h-20 px-4 py-4 flex justify-between ">
        <img src={logo} className="h-full"></img>
        <div className="flex px-10">
          <h1 className="px-10 text-xl">
            {summary.policyno ? "Confirm Application" : "Review SI"}
          </h1>
          <div>
            <h2>  {summary.policyno ? "Polciy No." : "SI Ref."}</h2>
            {summary.policyno ? summary.policyno : summary.refid}
          </div>
        </div>
      </div>
    </div>
  );
};
