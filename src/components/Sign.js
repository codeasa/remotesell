import SignatureCanvas from "react-signature-canvas";

export const Sign = () => {
  return (
    <div>
      <h2 className="p-4">Signature</h2>
      <div className="bg-gray-50">
        <SignatureCanvas
          penColor="green"
          canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
        />
      </div>
    </div>
  );
};
