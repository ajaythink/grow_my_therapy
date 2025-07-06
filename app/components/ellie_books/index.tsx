import Image from "next/image";
import Link from "next/link";

const Ellie_Books = () => {
  const booksData = [
    {
      image: "/baby_dolls.jpg",
      title: "Baby Dolls & Ninja Swords: 6 True Tales of Play Therapy",
      subtitle: "Available on Amazon",
      format: "Formats: Kindle & Paperback",
      url: "https://www.amazon.com/Baby-Dolls-Ninja-Swords-Therapy/dp/B0BPGJPSCL",
      cursor: "cursor-pointer bg-[rgb(181,219,223)]",
    },
    {
      image: "/15Stories.jpg",
      title: "Frozen Tears: 15 Stories of Blindness & Hope after Abortion",
      subtitle: "Available on Amazon",
      format: "Formats: Kindle & Paperback",
      url: "https://www.amazon.com/Frozen-Tears-Stories-Blindness-Abortion/dp/B0CNKPVJJS",
      cursor: "cursor-pointer bg-[rgb(181,219,223)]",
    },
    {
      image: "/99Devotionals.jpg",
      title: "99 Devotionals: Heart Reactions and Soul Stretches from the Book of Acts",
      subtitle: "Available on Amazon",
      format: "Formats: Kindle & Paperback",
      url: "https://www.amazon.com/99-Devotionals-Heart-Reactions-Stretches-ebook/dp/B07Z6LVHPN",
      cursor: "cursor-pointer bg-[rgb(181,219,223)]",
    },
    {
      image: "/99Devotionals.jpg",
      title: "Passion with Principle: How to Turn Romance into Lifelong Love",
      subtitle: "Available on Amazon",
      format: "Formats: Kindle & Paperback",
      url: "https://www.amazon.com/99-Devotionals-Heart-Reactions-Stretches-ebook/dp/B07Z6LVHPN",
      cursor: "cursor-not-allowed bg-[rgb(229,231,235)]",
    },
  ];
  return (
    <>
      <div className="p-24">
        <h1 className="text-6xl font-bold text-[rgb(52,84,87)]">
          Ellie&#39;s Books
        </h1>
        <div className="flex">
          {booksData.map((book, index) => (
            <div
              key={index}
              className="w-60 m-4 shadow-lg hover:shadow-2xl flex"
            >
              <div className="flex flex-col ">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={250}
                  height={250}
                  className="rounded-t-lg object-cover w-full responsive h-80"
                />
                <div className="p-4  ">
                  <p className="font-bold text-lg text-[rgb(45,89,94)]">
                    {book.title}
                  </p>
                  <p className="text-[rgb(75,85,99)] text-sm pt-2">
                    {book.subtitle}
                  </p>
                  <p className="text-[rgb(75,85,99)] text-sm">{book.format}</p>
                </div>
                <div className="p-4">
                  <Link href={book.url}>
                    <button
                      className={`p-2 w-full  text-[rgb(45,89,94)] ${book.cursor}  rounded-lg hover:bg-[rgb(135,194,221)] transition duration-300 ease-in-out`}
                    >
                      View on Amazon
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Ellie_Books;

// 7970426300
