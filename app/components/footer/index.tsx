import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-[rgb(30,65,69)] text-[rgb(181,219,223)] p-24  flex justify-between ">
          <div>
            <Image
              src="/image.webp"
              alt="logo"
              width={200}
              height={100}
              className="bg-white rounded-r-full rounded-l-full p-2"
            />
            <div className="flex gap-2 mt-2 !text-white">
              <p>
                <span className="text-yellow-400">&#9733; </span>Top Rated
              </p>
              <li className="hover:underline cursor-pointer">Testimonials</li>
              <li className="hover:underline cursor-pointer">Media Mentions</li>
            </div>
            <div>
              <p className="py-2">
                4913 Fitzhugh Avenue, Suite 102, Richmond, VA 23230
              </p>
              <p className="py-2">&#9742; (757) 474-5262</p>
            </div>
            <Image
              src="/PsychologyToday.webp"
              alt="PsychologyToday"
              width={250}
              height={100}
              className="bg-white rounded-r-full rounded-l-full p-2"
            />
          </div>
          <div>
            <h1 className="text-lg uppercase">Links</h1>
            <ul>
              <li className="py-2 hover:underline cursor-pointer">
                Get In Touch
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Testimonials
              </li>
              <li className="py-2 hover:underline cursor-pointer">About Me</li>
              <li className="py-2 hover:underline cursor-pointer">FAQ&#39;s</li>
              <li className="py-2 hover:underline cursor-pointer">Therapies</li>
              <li className="py-2 hover:underline cursor-pointer">Blogs</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg uppercase">Areas Served</h1>
            <ul>
              <li className="py-2 hover:underline cursor-pointer">
                Richmond, VA
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Ashland, VA
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Mechanicsville, VA
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Lakeside, VA
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                East Highland Park, VA
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Short Pump, VA
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Highland Springs, VA
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Glen Allen, VA
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Sandston, VA
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Bon Air, VA
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg uppercase">Services</h1>
            <ul>
              <li className="py-2 hover:underline cursor-pointer">
                Christian Individual
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Counseling in Richmond,VA
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Christian Couples
              </li>
              <li className="py-2 hover:underline cursor-pointer">
                Counseling in Richmond, VA
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-24 py-10 bg-[rgb(30,65,69)] text-[rgb(181,219,223)]">
          <div className="border-t border-[rgb(181,219,223)] text-center p-4">
            <p>Ellie Shumaker © Copyright 2024. All Rights Reserved.</p>
            <p className="text-sm">
              Credits to freepik for media www.freepik.com People illustrations
              by Storyset
            </p>
            <p>Privacy Policy & Terms of Service</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
