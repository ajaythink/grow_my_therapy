import Image from "next/image";
import Link from "next/link";

const How_IHelp = () => {
  const CardData = [
    {
      id: 1,
      image: "/godprayer.webp",
      title: "Christian Individual Counseling in Richmond, VA",
      description: "Discover Peace, Purpose, and God's Truth in Richmond, VA.",
      buttonLink: "#",
    },
    {
      id: 2,
      image: "/couple.webp",
      title:
        "Greater Purpose in Your Life DirectioChristian Couples Counseling in Richmond, VA",
      description:
        "Heal Your Relationship, Grow Closer to God Together in Richmond.",
      buttonLink: "#",
    },
    {
      id: 3,
      image: "/godprayer.webp",
      title: "Christian Individual Counseling in Richmond, VA",
      description: "Discover Peace, Purpose, and God's Truth in Richmond, VA.",
      buttonLink: "#",
    },
  ];

  return (
    <>
      <div className="px-24 bg-white py-5">
        {/* <h1 className="text-4xl" style={{text-color: "rgb(30, 65, 69)"}}>How I Help</h1> */}
        <h1 className="text-6xl font-bold text-[rgb(52,84,87)]">How I Help</h1>
        <div className="flex flex-wrap gap-10 justify-center ">
          {CardData.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              subtitle={card.description}
              url={card.buttonLink}
            />
          ))}
        </div>
      </div>
      <div className="bg-[rgb(30,65,69)] h-60 w-full flex gap-4 items-center justify-center px-24">
        <h1 className="text-[rgb(181,219,223)] text-4xl font-bold">
          Schedule A Consultation
        </h1> 
        <p className="text-[rgb(181,219,223)] text-lg font-bold">
          Ellie Shumaker is currently accepting new clients. Availabile for
          online and in-person sessions.
        </p>
        <div className="px-3 py-2 border text-xl border-white rounded text-[rgb(181,219,223)] cursor-pointer hover:bg-[rgb(181,219,223)] hover:text-[rgb(30,65,69)] transition duration-300 ease-in-out text-nowrap">
          <button><span>&#x2727;</span> Start Healing</button>
        </div>
      </div> 
    </>
  );
};

export default How_IHelp;

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  url: string;
}

export const Card = ({ image, title, subtitle, url }: CardProps) => {
  return (
    <>
      <div className="mt-10 border border-cyan-800 w-80 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center bg-[rgb(181,219,223)] hover:bg-[rgb(135,194,221)] transition duration-300 ease-in-out">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={320}
          height={240}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4 text-[rgb(52,84,87)]">
          {title}
        </h1>
        <p className="text-gray-600 mt-2">{subtitle}</p>
        <Link href={url} className="w-full">
          <button className="w-full p-2 border border-cyan-800 rounded hover:bg-cyan-100 mt-2">
            Learn More
          </button>
        </Link>
      </div>
    </>
  );
};
