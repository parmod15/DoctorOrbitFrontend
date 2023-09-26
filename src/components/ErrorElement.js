import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();
  return (
    <div className="bg-lime-800 w-full h-[100vh] flex items-center justify-center ">
      <div>
        <h1 className="text-center text-4xl text-white font-bold ">
          Something went wrong
        </h1>
        <h1 className="text-center text-white text-4xl">{err.error.message}</h1>
        <h1 className="text-center text-white text-4xl">
          {err.status + err.statusText}
        </h1>
      </div>
    </div>
  );
};

export default ErrorElement;
