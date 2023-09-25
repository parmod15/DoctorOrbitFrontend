import { useEffect, useState } from "react";

import { getAllDoctors } from "../utils/helpers";
import DoctorCard from "./DoctorCard";

const Body = () => {
  const [doctor, setDoctor] = useState([]);
  const [filteredDoctor, setFilteredDoctor] = useState([]);

  useEffect(() => {
    getAllDoctors(setDoctor, setFilteredDoctor);
  }, []);
  console.log("filtered doctor", filteredDoctor);

  return doctor.length == 0 ? (
    <h1>loading.... </h1>
  ) : (
    <div className="overflow-x-hidden border border-green-500 w-full relative font-poppins pt-32">
      <div className="w-10/12 mx-auto flex flex-col ">
        <h1 className="text-5xl text-center">Book Our Doctor</h1>
        <h3 className="text-3xl text-center mt-4">
          Quick Appointment with Doctors
        </h3>
        {/* ALL DOCTORS HERE */}
        <div className="w-full bg-slate-100">
          <div className="w-10/12 mx-auto justify-between flex flex-wrap gap-10 ">
            {doctor.map((doc) => (
              <DoctorCard {...doc} key={doc.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
