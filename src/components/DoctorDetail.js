import { useParams } from "react-router-dom";
import useGetDoctorDetail from "../utils/useGetDoctorDetail";

const DoctorDetail = () => {
  const params = useParams();
  const id = params.id;
  const doctor = useGetDoctorDetail(id);

  return (
    <div>
      <div>
        <h1>{doctor.name}</h1>
        <h1>{doctor.speciality}</h1>
        <h1>{doctor.fees}</h1>
        <h1>{doctor.description}</h1>
        <h1>{doctor.rating}</h1>
        <h1>{doctor.address}</h1>
      </div>
    </div>
  );
};

export default DoctorDetail;
