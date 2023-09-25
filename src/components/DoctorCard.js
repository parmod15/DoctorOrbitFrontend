import doctorThumbnail from "../assets/images/doctor-image-thumbnail.jpg";
import starLogo from "../assets/images/rating-star.jpg";
import locationLogo from "../assets/images/location-logo.png";

const DoctorCard = ({
  id,
  name,
  speciality,
  fees,
  description,
  rating,
  address,
}) => {
  const addressArray = String(address).split(",");
  let city = [];
  city.push(
    addressArray[addressArray.length - 1],
    addressArray[addressArray.length - 2]
  );

  return (
    <div className="shadow-lg mx-2  bg-white border  py-4  w-3/12 font-poppins">
      <img className="w-40" src={doctorThumbnail}></img>
      <div className=" w-40 h-40 mx-auto">
        <h1>{name}</h1>
        <h1>{speciality}</h1>
        <h1 className="flex">
          <img className="w-8 h-6" src={starLogo}></img>
          {rating}
        </h1>
        <h1 className="flex ">
          <img className="w-8 h-6" src={locationLogo}></img>
          {city}
        </h1>
      </div>
      <button className="bg-green-500 text-white px-8 py-2 rounded-sm">
        View Profile
      </button>
    </div>
  );
};

export default DoctorCard;
