import Link from "next/link";


const GetInTouch = () => {
  return (
    <>
      <div className="flex justify-between p-24 bg-[rgb(181,219,223)]">
        <div className="w-1/2">
          <div>
            <h1 className="text-[rgb(30,65,69)] text-3xl font-bold">
              Our Office
            </h1>
            <p className="text-[rgb(30,65,69)] text-lg pb-2">
              4913 Fitzhugh Avenue <br /> Suite 102 <br />
              Richmond <br />
              VA 23230 <br /> Richmond, VA
            </p>
            <Link
              href="https://main.d1hiqvipguwtuq.amplifyapp.com/google-maps"
              className="p-3 bg-[rgb(30,65,69)] text-white rounded hover:bg-[rgb(30,65,69)] transition duration-300 ease-in-out"
            >
              <button>Google Maps</button>
            </Link>
          </div>
          <div>
            <h1 className="text-[rgb(30,65,69)] text-3xl font-bold pt-10 pb-2">
              Hours
            </h1>
            <p className="text-[rgb(30,65,69)] text-lg">
              Tuesday: 12:00 PM - 8:00 PM
            </p>
            <p className="text-[rgb(30,65,69)] text-lg">
              Monday: 12:00 PM - 8:00 PM
            </p>
            <p className="text-[rgb(30,65,69)] text-lg">
              Wednesday: 9:00 AM - 6:00 PM
            </p>
          </div>
          <div>
            <h1 className="text-[rgb(30,65,69)] text-3xl font-bold pt-10 pb-2">
              Contact
            </h1>
            <p className="text-[rgb(30,65,69)] text-lg">
              Phone: (757) 474-5262
            </p>
          </div>
        </div>
        <div className="w-1/2 ">
          <div className="bg-white border border-[rgb(30,65,69)] rounded-2xl p-6 right-0">
            <h1 className="text-[rgb(30,65,69)] text-2xl font-bold text-center">
              Get In Touch
            </h1>
            <p className="text-[rgb(30,65,69)] py-4 text-center text-sm">
              Simply fill out the brief fields below and Ellie will be in touch
              with you soon, usually within one business day. This form is safe,
              private, and completely free.
            </p>
            <div>
              <label htmlFor="name" className="text-[rgb(30,65,69)]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-[rgb(30,65,69)] rounded w-full p-2 mb-4"
                placeholder="Name"
              />
              <label htmlFor="email" className="text-[rgb(30,65,69)]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-[rgb(30,65,69)] rounded w-full p-2 mb-4"
                placeholder="you@example.com"
              />
              <label htmlFor="phone" className="text-[rgb(30,65,69)]">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border border-[rgb(30,65,69)] rounded w-full p-2 mb-4"
                placeholder="(555) 234-5678"
              />
              <label htmlFor="message" className="text-[rgb(30,65,69)]">
                Message
              </label>
              <input
                type="text"
                id="message"
                name="message"
                className="border border-[rgb(30,65,69)] rounded w-full p-2 mb-4"
                placeholder="How can I help you?"
              />

              <button className="bg-[rgb(30,65,69)] text-white rounded p-2 hover:bg-[rgb(30,65,69)] transition duration-300 ease-in-out w-full">
                Submit
              </button>
              <p className="text-sm text-[rgb(30,65,69)] pt-4 text-center">
                &#9432; By submitting, you confirm you are 18+ and agree to our
                <span className="underline"> Privacy Policy & TOS</span> and to
                receive emails & texts from Ellie Shumaker.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-24 bg-[rgb(181,219,223)] p-3">
        <div className=" border border-[rgb(30,65,69)] bg-white rounded-2xl p-6 ">
          <h1 className="text-red-700 font-bold">&#9432; Please Note:</h1>
          <p className="text-[rgb(30,64,175)] text-lg">
            I do not take insurance directly. However, I can provide you with a
            billing sheet with the necessary facts and codes so you can file for
            <span className="font-bold"> out-of-network benefits</span> with your insurance company.
          </p>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
// rgb(30, 64, 175)