function Selfie() {
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
      <div className="hidden">
        <div>
          <input
            type="file"
            accept="image/*"
            capture="user"
            id="capture"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Selfie;
