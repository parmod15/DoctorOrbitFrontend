import { useEffect, useState } from "react";

import useGetDoctors from "../utils/useGetDoctors";
import useDoctorFilter from "../utils/useDoctorFilter";

import DoctorCard from "./DoctorCard";

const Body = () => {
  const [doctorSearch, setDoctorSearch] = useState([]);
  const [allDoctors, setDoctor] = useState([]);
  const [filteredDoctor, setFilteredDoctor] = useState([]);

  useEffect(() => {
    useGetDoctors(setDoctor, setFilteredDoctor);
  }, []);

  if (!filteredDoctor) return;

  return filteredDoctor.length == 0 ? (
    <h1>loading.... </h1>
  ) : (
    <div className="overflow-x-hidden border border-green-500 w-full relative font-poppins pt-32">
      <div className="w-10/12 mx-auto flex flex-col ">
        <h1 className="text-5xl text-center">Book Our Doctor</h1>
        <h3 className="text-3xl text-center mt-4">
          Quick Appointment with Doctors
        </h3>

        {/* INPPUT SEARCH */}
        <div className=" my-16 flex gap-4 mx-auto">
          <input
            onChange={(e) => {
              setDoctorSearch(e.target.value);
            }}
            className="w-96 py-2 rounded-md border border-green-500 bg-slate-50"
            type="text"
            placeholder="Search for Doctors"
          ></input>
          <button
            onClick={() =>
              useDoctorFilter(doctorSearch, allDoctors, setFilteredDoctor)
            }
            className="bg-green-500 px-8 text-white hover:bg-green-50 hover:text-green-500 transition-all duration-500   "
          >
            Search
          </button>
        </div>

        {/* ALL DOCTORS HERE */}
        <div className="w-full bg-slate-100">
          <div className="w-10/12 mx-auto justify-between flex flex-wrap gap-10 ">
            {filteredDoctor.map((doc) => (
              <DoctorCard {...doc} key={doc.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
