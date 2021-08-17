export const Upload = ({ files }) => {
  const getFileList = files.map((f) => {
    return (
      <div className="mb-2">
        <h2>{f}</h2>
        <input type="file" />
      </div>
    );
  });

  return (
    <div className="cardContainer">
      <div>
        <div className="title">Upload Documents</div>
        <p className="description"></p>
      </div>
      <div>
        <div>{getFileList}</div>
      </div>
    </div>
  );
};
