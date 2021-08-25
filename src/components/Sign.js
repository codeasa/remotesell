import SignatureCanvas from "react-signature-canvas";

export const Sign = ({ roles }) => {

  const signBoard = (role) => {
    return (
      <div>
        <h1 className="p-5">{role}</h1>
        <SignatureCanvas
          penColor="gray"
          canvasProps={{
            width: 400,
            height: 300,
            className: "bg-white",
          }}
        />
      </div>
    );
  };
  const signBoards = () => roles.map((r) => signBoard(r));

  return (
    <div className="cardContainer  ">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-gray h-full py-3 rounded text-center">
              <h1 className="text-2xl font-bold">Signauture</h1>
              {signBoards()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
