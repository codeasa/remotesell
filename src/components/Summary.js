export const Summary = ({ content }) => {
  const table = Object.keys(content).map((k) => {
    return (
      <div className="flex justify-around">
        <div>{k}</div>
        <div>{content[k]}</div>
      </div>
    );
  });
  return (
    <div className="w-full place-content-center h-full p-10">
      <h2>Summary</h2>
      <div className="flex-column">{table}</div>
    </div>
  );
};
