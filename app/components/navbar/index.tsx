import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="bg-orange-100 flex justify-between p-2 border-b border-gray-600 px-24">
          <p className="text-gray-800 flex gap-2 items-center">
            <IoCallOutline /> (757) 474-5262
          </p>
          <p className="text-gray-800 flex gap-2 items-center">
            <IoLocationSharp /> 4913 Fitzhugh Avenue, Suite 102, Richmond, VA
            23230
          </p>
        </div>
        <div className="flex justify-between items-center bg-blue-50 px-24 py-4 position-sticky  ">
          <div>
            <Image src="/image.webp" alt="logo" width={200} height={100} />
          </div>
          <div>
            <ul className="flex justify-center gap-8 text-gray-700 text-lg p-4">
              <li>Services</li>
              <li>About</li>
              <li>Testimonials</li>
              <li>Rates & FAQs</li>
              <li>Areas Served</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
