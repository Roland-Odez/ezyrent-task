import { FaSort } from "react-icons/fa";


const SearchBox = ({handleSearch, handleSort, orderRef, sortRef}: SearchBoxprops) => {

  return (
    <div className="flex-1 bg-[#febb02] p-2.5 rounded h-max md:max-w-88.5">
      <h1 className="text-[#555] text-[20px] mb-5 font-semibold">Search</h1>

      <div className="flex flex-col gap-1 mb-2.5">
        <label className="text-xs">Destination/property</label>

        <input
          type="text"
          placeholder="search properties"
          className="border-none p-1.5 outline-none bg-white"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1 mb-2.5 relative">
        <label className="text-xs">Order:</label>

        <span
          className="p-1.5 bg-white cursor-pointer flex items-center"
        >
          <FaSort
            size={18}
            className="mx-1 text-[#888]"
          />

          <select name="order" className="w-full"  ref={orderRef} onChange={handleSort}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </span>
      </div>

      <div className="flex flex-col gap-1 mb-2.5">

        <label className="text-xs">Sort By:</label>

        <div className="p-2.5 bg-white">

          <select name="sort-type" className="w-full " ref={sortRef} onChange={handleSort}>
            <option value="NONE">-select-</option>
            <option value="PRICE">Price</option>
          </select>

        </div>
      </div>

      <button className="p-2.5 bg-[#0071c2] text-white w-full font-medium cursor-pointer hover:bg-[#005999] transition">
        Search
      </button>

    </div>
  );
};

export default SearchBox;
