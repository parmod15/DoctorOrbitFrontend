const useGetDoctors = (setDoctor, setFilteredDoctor) => {
  async function getDoctors() {
    try {
      const response = await fetch("http://localhost:3000/api/v1/doctors");
      const result = await response.json();
      setDoctor(result.data);
      setFilteredDoctor(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  getDoctors();
};

export default useGetDoctors;
