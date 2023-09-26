import { useEffect, useState } from "react";

const useGetDoctorDetail = (doctorId) => {
  const [doctor, setDoctor] = useState("");

  useEffect(() => {
    getDoctorDetail();
  }, []);

  async function getDoctorDetail() {
    const response = await fetch(
      "http://localhost:3000/api/v1/doctors/" + doctorId
    );
    const result = await response.json();
    setDoctor(result.data);
  }
  return doctor;
};

export default useGetDoctorDetail;
