// API CALL FUNCTION
export async function getAllDoctors(setDoctor, setFilteredDoctor) {
  const response = await fetch("http://localhost:3000/api/v1/doctors");
  const result = await response.json();
  setDoctor(result.data);
  setFilteredDoctor(result.data);
}
