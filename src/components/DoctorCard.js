import { BrowserRouter, Link } from "react-router-dom";

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
  city.push(addressArray[addressArray.length - 1]);

  return (
    <div className=" shadow-lg   bg-white   py-4   font-poppins">
      <img className="w-40 mx-auto" src={doctorThumbnail}></img>
      <div className=" w-40  mx-auto flex flex-col items-start ">
        <h1 className=" w-44">{name}</h1>
        <h1 className="text-sm">{speciality}</h1>
        <div className="flex">
          <img className="-ml-2 w-8 h-6" src={starLogo}></img>
          <h1>{rating}</h1>
        </div>
        <div className="flex  ">
          <img className="-ml-2 w-8 h-6" src={locationLogo}></img>
          <h1 className="h-12">{city}</h1>
        </div>

        {/*  VIEW PROFILE BTN */}
        <Link className="py-4" to={"/doctor/" + id}>
          <button className="bg-green-500 text-white  hover:bg-green-50 hover:text-green-500 transition-all duration-500  px-8 py-2 rounded-sm">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
