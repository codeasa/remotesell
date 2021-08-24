import SignatureCanvas from "react-signature-canvas";

export const Sign = () => {
  return (
    <div className="cardContainer  ">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-gray h-full py-3 rounded text-center">
              <h1 className="text-2xl font-bold">Signauture</h1>
              <div>
                <h1 className="p-5">Policy Owner</h1>
                <SignatureCanvas
                  penColor="gray"
                  canvasProps={{
                    width: 400,
                    height: 300,
                    className: "bg-white",
                  }}
                />
              </div>
              <div>
                <h1 className="p-5">Insured</h1>
                <SignatureCanvas
                  penColor="gray"
                  canvasProps={{
                    width: 400,
                    height: 300,
                    className: "bg-white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
