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
    <div className="w-full  place-content-center flex h-full">
      <div className="p-10 w-full flex-row  place-content-center">
      <div className="text-xl py-5">Summary</div>
        <div className="rounded overflow-hidden shadow-lg p-5">
          <div className="flex-column">{table}</div>
        </div>
      </div>
    </div>
  );
};
