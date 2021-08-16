export const Upload = ({ files }) => {
  const getFileList = files.map((f) => {
    return (
      <div className="mb-5">
        <h2>{f}</h2>
        <input type="file" />
      </div>
    );
  });
 
  return (
    <div className="w-full    h-full p-10 bg-gray-50">
      <div className="place-content-center flex-col mb-4">
        <div className="text-xl mb-4">Upload Supporting Documents</div>
        <p className="py-5 text-sm"></p>
      </div>

      <div className="mb-6">
        <div>{getFileList}</div>
      </div>
    </div>
  );
};
