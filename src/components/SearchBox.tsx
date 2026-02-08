import { useState } from "react";
import { FaSort } from "react-icons/fa";

const SearchBox = () => {
  const [openDate, setOpenDate] = useState(false);

  const [destination, setDestination] = useState('');

  return (
    <div className="flex-1 bg-[#febb02] p-2.5 rounded h-max md:max-w-88.5">
      
      {/* Title */}
      <h1 className="text-[#555] text-[20px] mb-5 font-semibold">Search</h1>

      {/* Destination */}
      <div className="flex flex-col gap-1 mb-2.5">
        <label className="text-xs">Destination/property</label>

        <input
          type="text"
          placeholder={destination}
          className="border-none p-1.5 outline-none bg-white"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      {/* Order */}
      <div className="flex flex-col gap-1 mb-2.5 relative">
        <label className="text-xs">Order:</label>

        <span
          onClick={() => setOpenDate(!openDate)}
          className="p-1.5 bg-white cursor-pointer flex items-center"
        >
          <FaSort
            size={18}
            className="mx-1 text-[#888]"
          />

          <select name="sort" id="" className="w-full">
            <option value="ascending">Ascending</option>
            <option value="discending">Discending</option>
          </select>
        </span>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-1 mb-2.5">

        <label className="text-xs">Sort By:</label>

        <div className="p-2.5 bg-white">

          <select name="sort-type" id="" className="w-full ">
            <option value="price">Price</option>
            <option value="date">Date Added</option>
          </select>

        </div>
      </div>

      {/* Button */}
      <button className="p-2.5 bg-[#0071c2] text-white w-full font-medium cursor-pointer hover:bg-[#005999] transition">
        Search
      </button>

    </div>
  );
};

export default SearchBox;
