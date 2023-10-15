import titleLogo from "../assets/images/title-logo.png";

const Footer = () => {
  return (
    <div className="  bg-gradient-to-r from-blue-500 to-green-300 py-12 w-full font-poppins px-4 flex justify-between ">
      <div className="bg-white w-3/12">
        <img className="w-56" src={titleLogo}></img>
        <p className="py-2">
          DoctorOrbit is a registered start up company empanelled with 20 plus
          doctors and 100's patients lives touched.
        </p>
        <div>----social logos here</div>
      </div>

      <div className="bg-white w-3/12">
        <h1 className="py-3 text-2xl font-bold">For Information</h1>
        <div className="flex flex-col gap-2">
          <p>About Us</p>
          <p>Bookig Guide</p>
          <p>Pharmacy</p>
          <p>Careers</p>
          <p>Press Release</p>
          <p>FAQs</p>
        </div>
      </div>

      <div className="bg-white w-3/12">
        <h1 className="py-3 text-2xl font-bold">Helpfull Links</h1>
        <div className="flex flex-col gap-2">
          <p>Book Appointment Us</p>
          <p>Franchise Register </p>
          <p>SMS Booking</p>
          <p>Services</p>
        </div>
      </div>

      <div className="bg-white w-3/12">
        <h1 className="py-3 text-2xl font-bold">Contact Us</h1>
        <div className="flex flex-col gap-2">
          <p>DoctorOrbit Consultancy Pvt. Ltd. Jammu , Jammu And Kashmir</p>
          <p>+91 2343332333</p>
          <p>Contact Support</p>
          <p>support@gmail.com</p>
          <p>Official Queries </p>
          <p>support@doctororbit.com</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
