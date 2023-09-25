import titleLogo from "../assets/images/title-logo.png";

const Header = () => {
  return (
    <div className="w-full relative font-poppins shadow-xl">
      <div className="w-10/12 mx-auto  flex justify-between">
        <img className="w-1/5 h-16 " src={titleLogo}></img>
        <ul className="pt-5 w-2/5 flex justify-between text-xl">
          <li>Home</li>
          <li>Doctor</li>
          <li>Surgery</li>
          <li>sms Booking</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
