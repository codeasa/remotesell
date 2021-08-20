import React, { useState, useEffect } from "react";
import Compressor from "compressorjs";

function Selfie() {
  const [compressedFile, setCompressedFile] = useState(null);
  const [img, setImg] = useState({
    originalImage: null,
    compressedImage: null,
    originalSize: 0,
    compressedSize: 0
  });

  useEffect(() => {
    console.log({ img });
  }, [img]);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    console.log({image});

    new Compressor(image, {
      quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
      success: (res) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.
        setCompressedFile(res);
        setImg({
          originalImage: URL.createObjectURL(image),
          compressedImage: URL.createObjectURL(res),
          originalSize: image.size,
          compressedSize: res.size
        });
      },
    });
  };
  return (
    <div className="cardContainer  ">
      <div className="">
        <div className="title">Selfie</div>
        <p className="description w-full"></p>
      </div>
      <div className="flex justify-content">
        <button className="w-40 border-2 flex justify-center">
          <img
            src={process.env.PUBLIC_URL + "/selfie.png"}
            onClick={() => {
              document.getElementById("capture").click();
            }}
          ></img>
        </button>
      </div>
      <div className="border-2">
        <h2>Original {img.originalSize}</h2>
        <img src={img.originalImage} className="w-100 border-red-200 h-200" />
        <h2>Compressed {img.compressedSize}</h2>
        <img src={img.compressedImage} className="w-100 border-red-200 h-200" />
      </div>
      <div className="hidden">
        <div>
          <input
            id="capture"
            accept="image/*,capture=camera"
            capture="”camera"
            type="file"
            onChange={(event) => handleCompressedUpload(event)}
          />
        </div>
      </div>
    </div>
  );
}

export default Selfie;
