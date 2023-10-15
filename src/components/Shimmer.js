const Shimmer = () => {
  return (
    <div className="w-full border border-red-500">
      {/* LOADING BOUNCERS */}
      <h1 className="pt-12 font-poppins text-lg text-center">LOADING...</h1>
      <div className="flex justify-around w-2/12 mx-auto">
        <div className="mx-auto my-12 bg-blue-400 animate-bounce w-8 h-8 rounded-full"></div>
        <div className="mx-auto my-12 bg-red-400  animate-bounce w-8 h-8 rounded-full"></div>
        <div className="mx-auto my-12 bg-violet-400 animate-bounce w-8 h-8 rounded-full"></div>
        <div className="mx-auto my-12 bg-yellow-300 animate-bounce w-8 h-8 rounded-full"></div>
      </div>

      {/* SHIMMER CARDS */}
      <div className="animate-pulse w-11/12 gap-2   mx-auto  flex flex-wrap justify-between ">
        <div className="w-3/12 h-72 bg-slate-200"></div>
        <div className="w-3/12 h-72 bg-slate-200"></div>
        <div className="w-3/12 h-72 bg-slate-200"></div>
        <div className="w-3/12 h-72 bg-slate-200"></div>
        <div className="w-3/12 h-72 bg-slate-200"></div>
        <div className="w-3/12 h-72 bg-slate-200"></div>
        <div className="w-3/12 h-72 bg-slate-200"></div>
        <div className="w-3/12 h-72 bg-slate-200"></div>
        <div className="w-3/12 h-72 bg-slate-200"></div>
      </div>
    </div>
  );
};

export default Shimmer;
