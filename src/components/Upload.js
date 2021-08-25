export const Upload = ({ files }) => {
  const getFileList = files.map((f) => {
    return (
      <div className="mb-2">
        <h2>{f}</h2>

        <input type="file" accept="image/*" capture="user"></input>
      </div>
    );
  });

  return (
    <div className="cardContainer  ">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-white h-full py-3 rounded text-center">
              <h1 className="text-2xl font-bold">File Upload</h1>

              <div>{getFileList}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
