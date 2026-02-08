import { Link } from "react-router";

type PropertyItemProps = {
  id: number;
  name: string;
  price: number;
  location: string;
  image: string;
  description: string;
}

const PropertyItem = ({id, image, description, location, name, price}:PropertyItemProps) => {
  return (
    <Link className="border flex-col lg:flex-row border-gray-300 p-2.5 rounded flex justify-between gap-5 mb-5" to={'/property/'+id}>

      {/* Image */}
      <img
        src={image}
        alt={name}
        className="h-44 w-full md:w-50 md:h-50 object-cover rounded"
      />

      <div className="flex flex-col lg:flex-row">

      {/* Description */}
      <div className="flex flex-col gap-2.5 flex-2">

        <h1 className="text-sm lg:text-[20px] text-property-light-blue font-semibold">
          {name}
        </h1>

        <span className="text-[10px] lg:text-xs text-gray-600">
          500m from destination
        </span>

        <span className="text-xs bg-green-600 text-white w-fit px-1 py-0.5 rounded hidden lg:block">
          Free packing
        </span>

        <span className="text-[10px] lg:text-xs font-semibold">
          {description.slice(0, 20)}
        </span>

        <span className="text-xs text-gray-600">
          {location}
        </span>

        <span className="text-xs text-green-600 font-semibold">
          Free cancellation
        </span>

        <span className="text-xs text-green-600 hidden lg:block">
          You can cancel later, so lock in this great price today!
        </span>

      </div>

      {/* Details */}
      <div className="flex flex-col justify-between flex-1">

        {/* Rating */}
        <div className="flex justify-between items-center">

          <span className="font-medium capitalize">
            Excellent
          </span>

          <button className="bg-green-600 text-white px-2 py-1 font-bold rounded">
            8.9
          </button>

        </div>

        {/* Price and Button */}
        <div className="flex flex-col gap-1 text-right">

          <span className="text-xl font-semibold">
            ₦{price.toLocaleString("en-NG")}
          </span>

          <span className="text-xs text-gray-500">
            Includes fees
          </span>

          <button className="bg-property-light-blue hover:bg-blue-700 text-white font-bold px-2 py-2 rounded cursor-pointer transition">
            See availability
          </button>

        </div>

      </div>

      </div>

    </Link>
  );
};

export default PropertyItem;
