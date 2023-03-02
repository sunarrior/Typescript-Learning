export default function LoginForm() {
  return (
    <div className="py-44 container max-h-screen max-w-2xl mx-auto">
      <div className="box-border h-auto w-auto p-4 border-4 rounded-xl bg-orange-400">
        <p className="text-center text-4xl font-bold text-neutral-500 mt-4 mb-8">Login Form</p>
        <form className="w-full max-w-md mx-auto my-6">
          <div className="mb-6">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Account" />
          </div>
          <div className="mb-6">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="Password" />
          </div>
          <div className="flex px-4 mb-4 items-center">
            <input className="w-4 h-4 leading-tight rounded-lg" type="checkbox" />
            <label className="ml-2 text-gray-500 text-sm font-medium">
              Remenber me
            </label>
          </div>
          <div className="grid justify-items-center">
            <button className="shadow w-1/4 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}