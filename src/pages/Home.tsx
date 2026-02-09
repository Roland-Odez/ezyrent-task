import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import PropertyItem from '../components/PropertyItem'
import SearchBox from '../components/SearchBox'
import data from '../utils/data.json'


function Home() {
  const properties: DataType[] = data;
  const [property, setProperty] = useState<DataType[] | null>(null)

  const sortRef = useRef<HTMLInputElement | null>(null)
  const orderRef = useRef<HTMLSelectElement | null>(null)
  
  useEffect(() => {
    setProperty(properties)
  },[])

  const handleSearch = (text: string) => {
    const terms = text.toLowerCase().trim().split(/\s+/);;

    const search: DataType[] = [
      ...new Map(
        properties
          .filter(p =>
            terms.some(term =>
              p.name.toLowerCase().includes(term) ||
              p.location.toLowerCase().includes(term)
            )
          )
          .map(item => [item.id, item])
      ).values()
    ];
    setProperty(search)
  }

  const handleSort = () => {
  const order = orderRef.current?.value.toUpperCase()
  const sort = sortRef.current?.value.toUpperCase()

  if (!property) return

  let sorted = [...property]

  if (sort === 'PRICE') {
    if (order === 'ASCENDING') {
      sorted.sort((a, b) => a.price - b.price)
    }

    if (order === 'DESCENDING') {
      sorted.sort((a, b) => b.price - a.price)
    }
  }

  setProperty(sorted)
}

  

  return (
    <>
      <Navbar />
      <Header />
      <div className='flex justify-center mt-5'>
          <div className="w-full max-w-5xl flex gap-5 flex-wrap flex-col lg:flex-row">
              <SearchBox handleSearch={handleSearch} handleSort={handleSort} sortRef={sortRef} orderRef={orderRef} />
              <div className='flex flex-col flex-wrap w-full lg:w-auto'>
                {
                  property &&
                  property?.map((d) => (
                    <PropertyItem  {...d} image={d.images[0]} key={d.id+d.name} />
                  ))
                }

                {
                  property?.length === 0 && <p className='text-gray-600 text-xl text-center'>No results</p>
                }
              </div>
          </div>
      </div>
    </>
  )
}

export default Home