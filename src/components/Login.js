export const Login = () => {
  return (
    <div className="w-full  place-content-center flex h-full ">
      <form className="p-20 bg-gray-50">
        <div className="place-content-center flex-col">
          <div className="text-xl">Remote Authentication</div>
          <p className="py-5 text-sm">
            Please enter your Date of Birth, and the last 4 characters of
            ID/Passport number:
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Birthday
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          ></input>
        </div>
      </form>
    </div>
  );
};
