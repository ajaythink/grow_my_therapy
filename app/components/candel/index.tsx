import { Pacifico } from "next/font/google";
import Image from "next/image";
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const Candel = () => {
  return (
    <>
      <div className="flex items-center justify-center p-24 bg-[rgb(245,247,251)]">
        <div className="w-1/2">
          <Image
            src="/candel.png"
            alt="candel photo"
            height={500}
            width={500}
          />
        </div>

        <div
          className={`${pacifico.className} text-4xl text-[rgb(45,89,94)] w-1/2 text-center font-bold`}
        >
          <h1>
            “Come to me, all who labor and are heavy laden, and I will give you
            rest.” — Matthew 11:28
          </h1>
        </div>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6323.878940376831!2d-77.496478!3d37.580043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b115005220c3d9%3A0xb06ccc09591d2e07!2sEllie%20Shumaker%2C%20LCSW%20Counseling!5e0!3m2!1sen!2sus!4v1751816946386!5m2!1sen!2sus"
          width="600"
          height="450"
          // style="border:0;"
          className="border-0 w-full  "
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Candel;
