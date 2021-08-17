import SignatureCanvas from "react-signature-canvas";

export const Sign = () => {
  return (
    <div className="cardContainer">
      <div>
        <div className="title">Signature</div>
        <p className="description"></p>
      </div>
      <div className="bg-gray flex justify-center" >
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
  );
};
