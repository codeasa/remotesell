import SignatureCanvas from "react-signature-canvas";

export const Sign = () => {
  return (
    <div className="w-full    h-full p-10 bg-gray-50">
      <div className="place-content-center flex-col mb-4">
        <div className="text-xl mb-4">Signature</div>
        <p className="py-5 text-sm"></p>
      </div>
      <div className="mb-6 bg-white">
        <SignatureCanvas
          penColor="gray"
          canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
        />
      </div>
    </div>
  );
};
