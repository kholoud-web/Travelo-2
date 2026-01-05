import React from "react";
import { Link } from "react-router-dom";

const LatestBlog = () => {
  const blogs = [
    {
      id: 1,
      img: "/assets/images/Food/unsplash_MRHyv-hHxgk.png",
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
      link: "/cities/:cityId/restaurant/blog",
    },
    {
      id: 2,
      img: "/assets/images/Food/unsplash_q54Oxq44MZs.png",
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
      link: "/cities/:cityId/restaurant/blog",
    },
    {
      id: 3,
      img: "/assets/images/Food/unsplash_lP5MCM6nZ5A (2).png",
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
      link: "/cities/:cityId/restaurant/blog",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-24 bg-white">
      <div className="text-center mb-12">
        <h3
          style={{ fontFamily: "'Great Vibes', cursive", color: "#27A599" }}
          className="text-[32px] font-normal leading-tight"
        >
          Blog Post
        </h3>

        <h2 className="text-4xl lg:text-5xl font-bold text-black mt-2">
          <span className="text-[#27A599]">La</span>test News & Blog
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300 group"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={item.img}
                alt="Blog Cover"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <p className="text-[#27A599] text-sm font-medium mb-3">
                {item.date}
              </p>

              <h3 className="text-xl font-bold text-black mb-6 leading-snug group-hover:text-[#27A599] transition-colors">
                {item.title}
              </h3>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <Link
                  to={item.link}
                  className="text-gray-600 font-medium hover:text-[#27A599] transition-colors text-sm"
                >
                  View Blogs
                </Link>

                <div className="flex gap-4 text-gray-500">
                  <span className="cursor-pointer hover:text-[#27A599] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </span>
                  <span className="cursor-pointer hover:text-[#27A599] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <span className="cursor-pointer hover:text-[#27A599] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
