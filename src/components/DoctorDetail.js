import { useParams } from "react-router-dom";
import { useState } from "react";

import useGetDoctorDetail from "../utils/useGetDoctorDetail";

const DoctorDetail = () => {
  const params = useParams();
  const id = params.id;
  const doctor = useGetDoctorDetail(id);

  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);

  async function getBooking(firstName, age, mobileNo, id) {
    const data = await fetch("http://localhost:3002/api/v1/create-booking", {
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
    console.log("api post req. ", response);
  }

  return (
    <div className="w-full bg-slate-200 font-poppins">
      {/* DOCTOR CARD  */}
      <div>
        <h1>{doctor.name}</h1>
        <h1>{doctor.speciality}</h1>
        <h1>{doctor.fees}</h1>
        <h1>{doctor.description}</h1>
        <h1>{doctor.rating}</h1>
        <h1>{doctor.address}</h1>
        <button
          onClick={() => {
            document.querySelector(".form-window").classList.remove("scale-0");
            document.querySelector(".close-btn").classList.remove("scale-0");
          }}
          className="w-32 py-2 text-white bg-green-500"
        >
          Book Now
        </button>
      </div>

      {/* FORM FOR BOOKING */}
      <div className="w-5/12 relative mx-auto ">
        {/* CLOSE FORM WINDOW BTN  */}
        <div
          onClick={() => {
            console.log("click");
            document.querySelector(".close-btn").classList.add("scale-0");
            document.querySelector(".form-window").classList.add("scale-0");
          }}
          className="close-btn font-bold px-2 text-white bg-red-500 text-lg absolute top-0 right-0"
        >
          X
        </div>

        <form className=" form-window transition-all duration-500 p-8 bg-white rounded-xl flex flex-col justify-between gap-4 ">
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
              getBooking(firstName, age, mobileNo, id);
            }}
            className="bg-green-500 w-32 py-2 text-white"
          >
            Submit
          </button>
        </form>
      </div>

      {/*  */}
    </div>
  );
};

export default DoctorDetail;
