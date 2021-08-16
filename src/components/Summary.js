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
    <div className="w-full    h-full p-10 bg-gray-50">
      <div className="place-content-center flex-col mb-4">
        <div className="text-xl mb-4">Policy Summary</div>
        <p className="py-5 text-sm"></p>
      </div>

      <div className="mb-6">
        <div className="rounded overflow-hidden shadow-lg p-5">
          <div className="flex-column">{table}</div>
        </div>
      </div>
    </div>
  );
};
