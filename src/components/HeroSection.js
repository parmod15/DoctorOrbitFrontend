import { Link } from "react-router-dom";

import fieldsLogo1 from "../assets/images/doctors-fields-logo.png";
import fieldsLogo2 from "../assets/images/doctors-fields-logo-2.png";
import buildingLogo from "../assets/images/building.png";
import computerPersonLogo from "../assets/images/computer-boy.jpeg";
import bookingDoctorLogo from "../assets/images/booking-doctor.jpeg";
import check from "../assets/images/tick-logo.png";

const HeroSection = () => {
  return (
    <>
      <div className="overflow-x-hidden w-full  relative font-poppins py-32 ">
        <div className=" w-10/12 mx-auto flex flex-col items-center justify-center ">
          {/* HEADING LINE */}
          <div className=" text-center flex flex-col gap-2">
            <h1 className="text-5xl  ">Book n Meet a Doctor</h1>
            <h3 className="text-xl ">
              Best Online Appointment Scheduling Platform
            </h3>
          </div>
          {/* DOCTORS LOGO */}
          <div className="flex  py-12">
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

              <Link to={"/book-now"}>
                <button
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:bg-green-500 my-8 hover:text-white transition-all duration-500  text-green-500 border  px-8 py-4 font-bold rounded-md  border-green-500  "
                >
                  Find Doctors Now
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[100vw] h-1 bg-slate-300"></div>

          {/* GUIDE FOR ONLINE APPOINTMENT */}
          <div className="py-16 w-screen flex flex-col bg-slate-100">
            {/* HEADING */}
            <div className=" py-12 gap-4 flex flex-col mx-auto text-center">
              <h1 className="text-5xl"> Discover Online Appointment</h1>
              <p className="text-xl">
                A step-by-step guide to build an on-demand appointment for
                patients
              </p>
            </div>
            {/* HELPERS CARDS */}
            <div className="w-11/12  gap-10 mx-auto flex justify-between ">
              <div className=" hover:scale-90 transition-all duration-800 bg-white  w-5/12 flex flex-col  items-center justify-between justify-items-center">
                <img className="w-44" src={buildingLogo}></img>
                <div className="h-32 text-center">
                  <h1 className="text-xl font-bold">Find A Doctor</h1>
                  <p className="text-lg w-80">
                    With more than 20+ doctors and on mission to provide best
                    care Health Care Service
                  </p>
                </div>
              </div>
              <div className="hover:scale-90 transition-all duration-800 bg-white w-5/12 flex flex-col items-center justify-between justify-items-center">
                <img className="w-36 pt-4" src={computerPersonLogo}></img>
                <div className="h-32 text-center ">
                  <h1 className="text-xl font-bold">View Doctor</h1>
                  <p className="text-lg w-80">
                    Share your health concern here and we shall assign you a top
                    doctor across the Country
                  </p>
                </div>
              </div>
              <div className="hover:scale-90 transition-all duration-800 bg-white w-5/12 flex flex-col  items-center justify-between justify-items-center  ">
                <img className="w-52 pt-4" src={bookingDoctorLogo}></img>
                <div className="h-32  text-center">
                  <h1 className="text-xl font-bold">Book A Visit</h1>
                  <p className="text-lg w-80">
                    Book your time slot with doctor from your comfort zone at
                    very reasonable prices
                  </p>
                </div>
              </div>
            </div>
            <Link className="mx-auto" to={"/book-now"}>
              <button
                className="text-center mt-12 mx-auto bg-blue-600 py-4 px-8
              hover:bg-blue-200 hover:text-blue-600 transition-all duration-400 text-white"
              >
                Find Doctor
              </button>
            </Link>
          </div>

          {/*  TESTIMONIALS SECTION */}
          <div className="w-full ">
            <div className="text-5xl font-semiBold">Testimonials</div>
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
