type SortType = 'PRICE' | 'NONE';
type OrderType = 'ASCENDING' | 'DESCENDING';

interface DataType {
  id: number,
  name: string,
  price: number,
  location: string,
  images: string[],
  description: string
}
type PropertyItemProps = {
  id: number;
  name: string;
  price: number;
  location: string;
  image: string;
  description: string;
}

interface SearchBoxprops {
  handleSearch: (text: string) => void
  handleSort: () => void
  sortRef: RefObject<HTMLInputElement>
  orderRef: RefObject<HTMLSelectElement>
}