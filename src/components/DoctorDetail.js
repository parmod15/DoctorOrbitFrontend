import { useParams } from "react-router-dom";
import { useState } from "react";

import useGetDoctorDetail from "../utils/useGetDoctorDetail";

import doctorThumbnail from "../assets/images/doctor-image-thumbnail.jpg";

const DoctorDetail = () => {
  const params = useParams();
  const id = params.id;
  const doctor = useGetDoctorDetail(id);

  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);
  const [bookingResponse, setBookingResponse] = useState("");

  async function getBooking(firstName, age, mobileNo, id) {
    const data = await fetch("http://localhost:3002/api/v1/create-bookings", {
      method: "POST",
      body: JSON.stringify({
        patientName: firstName,
        patientAge: age,
        patientMobile: mobileNo,
        doctorId: id,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });

    const response = await data.json();
    setBookingResponse(response.message);
    // console.log("api post req. ", response);
  }

  return (
    <div className="w-full  font-poppins relative">
      {/*  BOOKING RESPONSE  */}
      <div className=" w-full responseWindow flex relative scale-0 justify-between scale transition-all duration-500 py-4 bg-green-300 text-white">
        {bookingResponse}

        {/* CLOSE WINDOW BTN */}
        <div
          onClick={() => {
            document.querySelector(".responseWindow").classList.add("scale-0");
          }}
          className="cursor-pointer   font-extrabold px-2  text-red-500 text-lg "
        >
          CLOSE
        </div>
      </div>

      {/* DOCTOR CARD  */}
      <div className=" doctor-card relative py-12 w-10/12 mx-auto  flex justify-between gap-4 transition-all duration-500">
        {/* DOCTOR DETAILS */}
        <div className="w-7/12  flex flex-col gap-5 p-8">
          <button
            onClick={() => {
              document
                .querySelector(".form-window")
                .classList.remove("scale-0");
              document.querySelector(".doctor-card").classList.add("blur-lg");
              document.querySelector(".close-btn").classList.remove("scale-0");
            }}
            className="w-32 py-2 text-white bg-green-500 hover:text-green-500 hover:bg-white transition-all duration-500"
          >
            Book Now
          </button>
          <h1 className="text-2xl">{doctor.name}</h1>
          <h1 className="text-xl bg-green-200 w-40">{doctor.speciality}</h1>
          <h1 className="text-xl">Feess - {doctor.fees}</h1>
          <h1 className="w-10/12 text-lg">{doctor.description}</h1>
          <h1 className="text-xl">{doctor.rating} Avg. Ratings</h1>
          <h1 className="text-xl">Clinic - {doctor.address}</h1>
        </div>

        {/*  DOCTOR IMAGE */}
        <div className=" w-4/12 ">
          <img className="w-full h-full" src={doctorThumbnail}></img>
        </div>
      </div>

      {/* FORM FOR BOOKING */}
      <div className=" w-5/12  mx-auto form-window  scale-0 absolute top-20  left-20 transition-all duration-500  ">
        {/* CLOSE FORM WINDOW BTN  */}
        <div
          onClick={() => {
            document.querySelector(".close-btn").classList.add("scale-0");
            document.querySelector(".doctor-card").classList.remove("blur-lg");
            document.querySelector(".form-window").classList.add("scale-0");
          }}
          className="cursor-pointer close-btn scale-0 font-bold px-2 text-white bg-red-500 text-lg absolute top-0 right-0"
        >
          X
        </div>

        <form className="  p-8 bg-white rounded-xl flex flex-col justify-between gap-4 ">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            className="py-2 border border-emerald-500 rounded-md"
            type="text"
            placeholder="Enter Your First Name"
          ></input>

          <input
            className="py-2 border border-emerald-500 rounded-md"
            type="text"
            placeholder="Enter your Last Name"
          ></input>

          <input
            onChange={(e) => setAge(e.target.value)}
            className="py-2 border border-emerald-500 rounded-md"
            type="text"
            placeholder="Enter Your Age"
          ></input>

          <input
            onChange={(e) => setMobileNo(e.target.value)}
            className="  py-2 border border-emerald-500 rounded-md"
            type="text"
            placeholder="Enter Your Mobile no."
          ></input>

          {/* GENDER */}
          <div className="flex gap-5 py-2 border border-emerald-500 rounded-md">
            <label className="text-gray-400">Gender</label>
            <h1>M</h1>
            <input type="checkbox"></input>
            <h1>F</h1>
            <input type="checkbox"></input>
          </div>

          <div>Your Total Cost - {doctor.fees}Rs</div>

          {/* SUBMIT BUTTON */}
          <button
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(".close-btn").classList.add("scale-0");
              document
                .querySelector(".doctor-card")
                .classList.remove("blur-lg");
              document.querySelector(".form-window").classList.add("scale-0");
              document
                .querySelector(".responseWindow")
                .classList.remove("scale-0");

              getBooking(firstName, age, mobileNo, id);
            }}
            className="bg-green-500 w-32 py-2 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorDetail;
