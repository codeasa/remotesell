export const Declaration = () => {
  return (
    <div className="cardContainer  ">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-white h-64 py-3 rounded text-center">
              <h1 className="text-2xl font-bold">Declaration</h1>
              <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div>
                  <p className="mt-2 text-gray-600 my-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!
                  </p>

                  <p className="mt-2 text-gray-600 my-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox fwd" />
                    <span className="ml-2">
                      I agree to the{" "}
                      <span className="underline">privacy policy</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
