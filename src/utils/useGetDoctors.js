const useGetDoctors = (setDoctor, setFilteredDoctor) => {
  async function getDoctors() {
    const response = await fetch("http://localhost:3000/api/v1/doctors");
    const result = await response.json();
    setDoctor(result.data);
    setFilteredDoctor(result.data);
  }
  getDoctors();
};

export default useGetDoctors;
