import Header from '../components/Header'
import Navbar from '../components/Navbar'
import PropertyItem from '../components/PropertyItem'
import SearchBox from '../components/SearchBox'
import data from '../utils/data.json'

interface DataType {
  id: number,
  name: string,
  price: number,
  location: string,
  images: string[],
  description: string
}

function Home() {
  const properties: DataType[] = data;

  return (
    <>
      <Navbar />
      <Header />
      <div className='flex justify-center mt-5'>
          <div className="w-full max-w-5xl flex gap-5 flex-wrap flex-col lg:flex-row">
              <SearchBox />
              <div className='flex flex-col flex-wrap w-full lg:w-auto'>
                {
                  properties.map((d) => (
                    <PropertyItem  {...d} image={d.images[0]} key={d.id+d.name} />
                  ))
                }
              </div>
          </div>
      </div>
    </>
  )
}

export default Home