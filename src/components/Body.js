import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useGetDoctors from "../utils/useGetDoctors";
import useDoctorFilter from "../utils/useDoctorFilter";

import DoctorCard from "./DoctorCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [doctorSearch, setDoctorSearch] = useState([]);
  const [allDoctors, setDoctor] = useState([]);
  const [filteredDoctor, setFilteredDoctor] = useState([]);

  useEffect(() => {
    useGetDoctors(setDoctor, setFilteredDoctor);
  }, []);

  if (!filteredDoctor) return;

  return filteredDoctor.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="overflow-x-hidden w-full relative font-poppins pt-32">
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
          <div className="py-12 w-10/12 mx-auto justify-between flex flex-wrap gap-10 ">
            {filteredDoctor.map((doc) => (
              <Link className=" w-3/12" to={"/doctor/" + doc.id}>
                <DoctorCard {...doc} key={doc.id} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
