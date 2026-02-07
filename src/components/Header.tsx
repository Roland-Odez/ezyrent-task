import { FaBuilding } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { HiBuildingStorefront } from "react-icons/hi2";
import { PiBuildingApartmentFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="bg-property-dark-blue text-white flex justify-center sticky -top-62.5 z-3 pt-0">
      <div className='w-full max-w-5xl mt-5 justify-center mb-0'>
        <div className="flex gap-10 mb-5 flex-wrap px-5 lg:px-0">
          
            <div className="flex items-center gap-2.5 cursor-pointer border border-white p-2.5 rounded-[20px]">
                <FaBuilding size={18} />
                <span>Properties</span>
            </div>

            <div className="flex items-center gap-2.5 cursor-pointer">
                <FaHome size={18} />
                <span>Apartments</span>
            </div>

            <div className="flex items-center gap-2.5 cursor-pointer">
                <BiSolidBuildingHouse size={18} />
                <span>Duplexes</span>
            </div>

            <div className="flex items-center gap-2.5 cursor-pointer">
                <HiBuildingStorefront size={18} />
                <span>Commercial</span>
            </div>

            <div className="flex items-center gap-2.5 cursor-pointer">
                <PiBuildingApartmentFill size={18} />
                <span>Short Lets</span>
            </div>

        </div>

      </div>

    </div>
  );
};

export default Header
