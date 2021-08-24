import React, { useState, useEffect } from "react";
import Compressor from "compressorjs";

function Selfie() {
  const [img, setImg] = useState({
    originalImage: null,
    compressedImage: null,
    originalSize: 0,
    compressedSize: 0,
  });

  useEffect(() => {
    console.log({ img });
  }, [img]);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    console.log({ image });

    new Compressor(image, {
      quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
      success: (res) => {
        setImg({
          originalImage: URL.createObjectURL(image),
          compressedImage: URL.createObjectURL(res),
          originalSize: image.size,
          compressedSize: res.size,
        });
      },
    });
  };
  return (
    <div className="cardContainer  ">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-white h-full py-3 rounded text-center">
              <h1 className="text-2xl font-bold">Selfie</h1>
              <div className="flex justify-content">
                <button className="w-40 border-2 flex justify-center">
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/selfie.png"}
                    onClick={() => {
                      document.getElementById("capture").click();
                    }}
                  ></img>
                </button>
              </div>
              {img.compressedImage && (
                <div className="border-2">
                  <h2>Original {img.originalSize}</h2>
                  <img
                    src={img.originalImage}
                    className="w-100 border-red-200 h-200"
                    alt=""
                  />
                  <h2>Compressed {img.compressedSize}</h2>
                  <img
                    src={img.compressedImage}
                    className="w-100 border-red-200 h-200"
                    alt=""
                  />
                </div>
              )}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selfie;
