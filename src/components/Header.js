import { Link } from "react-router-dom";

import titleLogo from "../assets/images/title-logo.png";

const Header = () => {
  return (
    <div className="w-full relative font-poppins shadow-xl">
      <div className="w-10/12 mx-auto  flex justify-between">
        {/*  HEADER LOGO */}
        <Link className="w-9/12" to={"/"}>
          {" "}
          <img className="w-1/5 h-16 " src={titleLogo}></img>
        </Link>
        <ul className="pt-5 w-7/12 flex justify-between text-xl ">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/book-now"}>
            <li>Doctors</li>
          </Link>
          <li>Surgery</li>
          <li>sms Booking</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
