import prfileImg from "../../../assets/img/blog/profile.jpg";
import d1 from "../../../assets/img/details/d1.jpg";
import d2 from "../../../assets/img/details/d2.jpg";
import d3 from "../../../assets/img/details/d3.jpg";
import d4 from "../../../assets/img/details/d4.jpg";

import d5 from "../../../assets/img/details/d5.jpg";
import d6 from "../../../assets/img/details/d6.jpg";
import e1 from "../../../assets/img/eates/e1.jpg";
import e2 from "../../../assets/img/eates/e2.jpg";
import e3 from "../../../assets/img/eates/e3.jpg";
import e4 from "../../../assets/img/eates/e4.jpg";
import e5 from "../../../assets/img/eates/e5.jpg";

import {
  Facebook,
  Twitter,
  Instagram,
  Dribbble,
  Search,
  Youtube,
  Eye,
} from "lucide-react";

function BlogProfile() {
  const recentPosts = [
    {
      img: d1,
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
    },
    {
      img: d2,
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
    },
    {
      img: d3,
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
    },
    {
      img: d4,
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
    },
  ];

  const filterMenu = [
    {
      img: e1,
      title: "Chicken Fry",
      count: 26,
    },
    {
      img: e2,
      title: "Burger Food",
      count: 46,
    },
    {
      img: e3,
      title: "Pizza",
      count: 16,
    },
    {
      img: e4,
      title: "Fresh Fruits",
      count: 36,
    },
    {
      img: e5,
      title: "Vegetables",
      count: 16,
    },
  ];
  const popularTags = [
    "Sandwich",
    "Tikka",
    "Bbq",
    "Restaurant",
    "Chicken Sharma",
    "Health",
    "Fastfood",
    "Food",
    "Pizza",
    "Burger",
    "Chicken",
  ];

  const galleryImages = [d1, d2, d3, d4, d5, d6];

  return (
    <div className="py-7 space-y-8">
      {/* Search */}
      <div className="bg-white border border-gray-200 rounded-md flex overflow-hidden">
        <input
          type="text"
          placeholder="Search Your Keyword.."
          className="p-4 w-[75%] outline-none text-sm"
        />
        <button className="bg-orange-400 w-[25%] flex justify-center items-center text-white">
          <Search />
        </button>
      </div>

      {/* Profile */}
      <div className="bg-white border border-gray-200 rounded-md p-8 text-center">
        <div className="flex justify-center mb-4">
          <img
            src={prfileImg}
            alt="Prince Miyako"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-800">Prince Miyako</h3>
        <p className="text-gray-500 text-sm mb-3">Blogger/Photographer</p>

        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-orange-400 text-lg">
              ★
            </span>
          ))}
          <span className="text-gray-400 text-sm ml-1">(1 Review)</span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis
          distinctio, odio eligendi suscipit reprehenderit atque
        </p>

        <div className="flex justify-center gap-4 text-gray-600">
          <Facebook size={18} />
          <Twitter size={18} />
          <Instagram size={18} />
          <Dribbble size={18} />
        </div>
      </div>

      {/* Recent Post */}
      <div className="bg-white border border-gray-200 rounded-md p-6 mb-8">
        <h3 className="text-lg font-semibold mb-6">Recent Post</h3>

        <div className="space-y-5">
          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="flex gap-4 pb-5 border-b border-gray-400/55 last:border-b-0"
            >
              <img
                src={post.img}
                alt="post"
                className="w-20 h-20 rounded-md object-cover"
              />

              <div>
                <span className="text-sm text-gray-400">{post.date}</span>
                <h4 className="text-sm font-medium text-gray-500 leading-snug mt-1 hover:text-orange-500 cursor-pointer">
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter By Menu */}
      <div className="bg-white border border-gray-200 rounded-md p-6">
        <h3 className="text-lg font-semibold mb-6">Filter By Menu</h3>

        <div className="space-y-5">
          {filterMenu.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <h4 className="text-sm font-medium text-gray-600 group-hover:text-orange-500 transition">
                  {item.title}
                </h4>
              </div>

              <span className="text-sm text-gray-500">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white border border-gray-200 rounded-md p-6 mb-8">
        <h3 className="text-lg font-semibold mb-6">Populer Tags</h3>

        <div className="flex flex-wrap gap-3">
          {popularTags.map((tag, index) => (
            <button
              key={index}
              className="px-5 py-2 text-sm text-gray-600 border border-gray-200 rounded-md
                   hover:bg-orange-400 hover:text-white hover:border-orange-400
                   transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="bg-white border border-gray-200 rounded-md p-6">
        <h3 className="text-lg font-semibold mb-6">Photo Gallery</h3>

        <div className="grid grid-cols-3 gap-3">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md cursor-pointer"
            >
              <img
                src={img}
                alt="gallery"
                className="w-[110px] h-[70px] object-cover"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/50 flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition"
              >
                <span className="text-white text-xl"><Eye/></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Follow Us */}
      <div className="bg-white border border-gray-200 rounded-md p-6">
        <h3 className="text-lg font-semibold mb-6">Follow Us</h3>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center bg-gray-100
                 hover:bg-orange-400 hover:text-white transition"
          >
            <Twitter size={18} />
          </a>

          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center bg-gray-100
                 hover:bg-orange-400 hover:text-white transition"
          >
            <Youtube size={18} />
          </a>

          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center bg-gray-100
                 hover:bg-orange-400 hover:text-white transition"
          >
            <Instagram size={18} />
          </a>

          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center bg-gray-100
                 hover:bg-orange-400 hover:text-white transition"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogProfile;
