const Latest_Blogs = () => {
  return (
    <>
      <div className="p-24 bg-[rgb(245,247,250)] ">
        <div className="border-b-1 border-gray-300 pb-4 mb-8">
          <h1 className="text-6xl font-bold text-[rgb(30,65,69)] ">
            Latest Blogs
          </h1>
          <p className="text-lg pt-3 pb-7">
            Discover helpful insights and strategies from Ellie Shumaker to
            improve your relationships and personal well-being.
          </p>
        </div>
        <div className="text-center text-lg bg-[rgb(245,247,250)] h-20 w-full flex items-center justify-center">
          <h1 className="text-gray-600">No posts available at the moment.</h1>
        </div>
      </div>
    </>
  );
};
export default Latest_Blogs;
