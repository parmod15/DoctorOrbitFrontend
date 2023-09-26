const useDoctorFilter = (searchedDoctor, allDoctors, setDoctor) => {
  function filterationOfDoctor() {
    allDoctors.forEach((element) => {
      return element?.name?.toLowerCase().includes(searchedDoctor.toLowerCase())
        ? setDoctor([element])
        : null;
    });
  }
  filterationOfDoctor();
};

export default useDoctorFilter;
