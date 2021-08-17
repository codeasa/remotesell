export const Summary = ({ content }) => {
  const table = Object.keys(content).map((k) => {
    return (
      <div className="flex justify-around">
        <div className="text-right   w-1/2 mx-5">{k}</div>
        <div className="text-left w-1/2">{content[k]}</div>
      </div>
    );
  });
  return (
    <div className="cardContainer">
      <div>
        <div className="title">Summary</div>
        <p className="description"></p>
      </div>

      <div className="mb-6">
        <div className="rounded overflow-hidden shadow-lg p-5">
          <div className="flex-column">{table}</div>
        </div>
      </div>
    </div>
  );
};
