import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();
  return (
    <div className="bg-lime-800 w-full h-[100vh] flex items-center justify-center ">
      <div>
        <h1 className="text-center text-4xl text-white font-bold ">
          Something went wrong
        </h1>
        <h1 className="text-center text-white text-4xl">
          {err?.error?.message}
        </h1>
        <h1 className="text-center text-white text-4xl">
          {err?.status + err?.statusText}
        </h1>
        <div className="w-72 mx-auto flex gap-5 py-20">
          <div className="bg-blue-400 rounded-full w-20 h-20  animate-ping "></div>
          <div className="bg-red-400 rounded-full w-20 h-20  animate-ping "></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
