import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="bg-[rgb(181,219,223)] flex items-center justify-between px-24 ">
        <div className="w-1/2 p-5">
          <Image
            src="/ilah-3.jpeg"
            alt="photo"
            width={500}
            height={500}
            className="rounded border-8 border-gray-100"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold py-2 text-[rgb(30,65,69)] pt-14 pb-10">
            Hi I&#39;m Ellie Shumaker
          </h1>
          <p className="text-xl text-[rgb(30,65,69)]">
            With over
            <span className="font-bold">              
              40 years of dedicated experience
            </span>
            in individual and couples therapy, I truly enjoy working with a wide
            variety of people of different ages, capacities, backgrounds, and
            presenting problems. My goal is to help you build credibility in
            your own journey and educate you on pathways to healing.
          </p>
          <p className="text-xl text-[rgb(30,65,69)] py-4">
            My therapeutic approach is rooted in
            <span className="font-bold">Christian principles,</span> aiming to
            foster <span className="font-bold">spiritual growth,</span> the
            deepening of relationships, and a greater sense of
            <span className="font-bold"> inner peace.</span> I am passionate
            about helping clients grow in their capacity to love and in their
            trust for God&#39;s love for them
          </p>
          <p className="text-xl text-[rgb(30,65,69)] py-4">
            Whether you are seeking to heal from
            <span className="font-bold">past wounds,</span> discover your life&#39;s
            purpose, or prepare for Heaven, I offer a supportive space to
            explore these profound areas of life. Together, we can work towards
            achieving your goals for a more fulfilling and purposeful existence.
          </p>
        </div>
      </div>
      <div className="bg-[rgb(181,219,223)] flex items-center justify-center ">
        <h1 className="text-2xl font-bold text-[rgb(30,65,69)] ">
          Featured In
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-5 p-10">
          <Image
            src={"/PsychologyToday.webp"}
            alt="photo"
            width={150}
            height={50}
            className="rounded hover:scale-105 transition-transform duration-300"
          />
          <Image
            src={"/theravive.webp"}
            alt="photo"
            width={150}
            height={50}
            className="rounded hover:scale-105 transition-transform duration-300"
          />
          <Image
            src={"/Christian.webp"}
            alt="photo"
            width={150}
            height={50}
            className="rounded hover:scale-105 transition-transform duration-300"
          />
          <Image
            src={"/therapist.png"}
            alt="photo"
            width={150}
            height={50}
            className="rounded hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
