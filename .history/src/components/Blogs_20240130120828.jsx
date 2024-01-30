import React from "react";

const Blogs = () => {
  return (
    <div className="w-full bg-[#f9f9f9] py-[-50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
          <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
            <img
              className="h-56 w-full object-cover"
              src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
