import fieldsLogo1 from "../assets/images/doctors-fields-logo.png";
import fieldsLogo2 from "../assets/images/doctors-fields-logo-2.png";

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
      </div>
    </div>
  );
};

export default HeroSection;
