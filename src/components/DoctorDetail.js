import { useParams } from "react-router-dom";
import useGetDoctorDetail from "../utils/useGetDoctorDetail";

const DoctorDetail = () => {
  const params = useParams();
  const id = params.id;
  const doctor = useGetDoctorDetail(id);

  return (
    <div className="w-full">
      <div>
        <h1>{doctor.name}</h1>
        <h1>{doctor.speciality}</h1>
        <h1>{doctor.fees}</h1>
        <h1>{doctor.description}</h1>
        <h1>{doctor.rating}</h1>
        <h1>{doctor.address}</h1>
      </div>

      {/* FORM FOR BOOKING */}
      <div className="w-5/12 mx-auto   border border-red-500 ">
        <form className="flex flex-col justify-between gap-4 border border-green-500">
          <input type="text" placeholder="enter your first name"></input>
          <input type="text" placeholder="enter your last name"></input>
          <input type="number" placeholder="enter your last name"></input>
        </form>
      </div>
    </div>
  );
};

export default DoctorDetail;
