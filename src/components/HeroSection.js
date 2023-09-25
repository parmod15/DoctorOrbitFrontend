import fieldsLogo1 from "../assets/images/doctors-fields-logo.png";
import fieldsLogo2 from "../assets/images/doctors-fields-logo-2.png";
import check from "../assets/images/tick-logo.png";

const HeroSection = () => {
  return (
    <div className="w-full  relative font-poppins py-32 ">
      <div className=" w-10/12 mx-auto flex flex-col items-center justify-center ">
        {/* HEADING LINE */}
        <div className=" text-center flex flex-col gap-2">
          <h1 className="text-5xl font-thin ">Book n Meet a Doctor</h1>
          <h3 className="text-xl ">
            Best Online Appointment Scheduling Platform
          </h3>
        </div>
        {/* SEARCH BOX */}
        <div className=" mt-16 flex gap-4">
          <input
            className="w-96 py-2 rounded-md border border-green-500 bg-slate-50"
            type="text"
            placeholder="Search for Doctors"
          ></input>
          <button className="bg-green-500 px-8 text-white ">Search</button>
        </div>
        {/* DOCTORS LOGO */}
        <div className="flex  mt-12">
          <img className="w-96" src={fieldsLogo1}></img>
          <img className="w-96" src={fieldsLogo2}></img>
        </div>
        <div className="w-[100vw] h-1 bg-slate-300"></div>
        {/* TAGLINE COMPONENT */}
        <div className="px-4 mt-16 shadow-xl rounded-md">
          <h1 className="text-5xl ">
            Skip the waiting Room. Consult with a Doctor
          </h1>
          {/* LIST ITMES */}
          <div className="flex flex-col gap-5 w-6/12 mx-auto my-12">
            <ul className=" flex flex-col gap-4 text-2xl">
              <li className="flex font- ">
                <img className="w-8" src={check}></img>
                Fees starting at 500rs
              </li>
              <li className="flex ">
                <img className="w-8" src={check}></img>
                Verified Doctors Respond in 5 min.
              </li>
              <li className="flex ">
                <img className="w-8" src={check}></img>
                100% Private and Confidentail
              </li>
            </ul>
            <button className="mt-4 text-green-500 border w-32 py-2 rounded-full px-4  border-green-500  ">
              Consult now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
