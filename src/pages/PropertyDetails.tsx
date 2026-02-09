import { FaRegFlag, FaShareAlt } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { TbLetterP } from "react-icons/tb";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { FaHeart, FaLocationDot } from "react-icons/fa6";
import data from '../utils/data.json'
import { useParams } from "react-router";

function PropertyDetails() {

  const params = useParams()
    const id:string = params.id as string

    const properties: DataType[] = data;

    const {name, price, location, images, description} = properties[Number(id)-1]


  return (
    <>
      <Navbar />
      <Header />

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-5xl flex-col-reverse lg:flex-row flex gap-5">
          
          <div className="flex-1">
            
            <div className="flex-1 m-2.5">

              <div className="bg-blue-50 p-4 rounded">

                <b>Property Highlights</b>

                <Highlight Icon={<FaHeartbeat size={18} />} text="Top-rated location" />
                <Highlight Icon={<TbLetterP size={18} />} text="Free Private Parking" />

                <button
                  className="w-full bg-property-light-blue text-white p-2.5 hover:bg-blue-700 transition"
                >
                  Reserve Booking
                </button>

              </div>

            </div>
          </div>

          <div className="flex-2 px-4 lg:px-0">
            <div className="w-full flex flex-col justify-center">

              <div className="flex justify-between mb-2.5 flex-col lg:flex-row">

                <div className="flex flex-col gap-1 mx-1">

                  <h1 className="text-2xl flex items-start gap-1 mb-2">

                    <span>{name}</span>

                  </h1>

                  <div className="flex items-center text-[0.8rem]">
                    <FaLocationDot
                      size={18}
                      className="text-property-light-blue mr-1"
                    />
                    <span>{location}</span>
                  </div>
                  <span className="text-xl font-semibold">
                    ₦{price.toLocaleString('en-En')}
                  </span>

                  <span className="text-[0.8rem]">
                    Excellent location - 500m from center
                  </span>

                </div>

                <div className="flex flex-col items-start lg:items-end">

                  <div className="flex mb-4 items-center mt-2 lg:mt-0">

                    <FaHeart
                      size={18}
                      className="mr-5 text-[1.3rem] text-property-light-blue cursor-pointer"
                    />

                    <FaShareAlt
                      size={18}
                      className="mr-5 text-[1.3rem] text-property-light-blue cursor-pointer"
                    />

                    <span className="bg-property-light-blue text-white px-2 py-1 text-[0.8rem]">
                      Rent your desired apartment
                    </span>

                  </div>

                  <div className="hidden lg:flex items-center">

                    <FaRegFlag
                      size={18}
                      className="mr-2 text-property-light-blue"
                    />

                    <span className="font-bold text-[11px]">
                      we price tag
                    </span>

                  </div>

                </div>

              </div>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2.5">

                {images.map((photo, idx) => (
                  <div
                    key={idx}
                    className={`
                      ${idx === 0 ? "col-span-1 row-span-1" : ""}
                      ${idx === 1 ? "col-span-1 row-span-1" : ""}
                    `}
                    style={{
                      display: idx > 7 ? "none" : "block",
                    }}
                  >
                    <img
                      src={photo}
                      alt=""
                      className="w-full h-full object-fill shadow"
                    />
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto my-3">

        <div className="flex">

          <div className="flex-2 m-2.5 text-[14px]">
            {description}
          </div>


        </div>

      </div>
    </>
  );
}

export default PropertyDetails;


function Highlight({ Icon, text }: {Icon:  React.ReactElement, text: string}) {
  return (
    <p className="flex items-center text-xs my-6">
      {Icon}
      {text}
    </p>
  );
}
