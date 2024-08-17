import { Link } from 'react-router-dom';
// import { SearchIcon } from '@heroicons/react/solid';
import { CiSearch } from "react-icons/ci";

const MainContainer = () => {
  return (
    <div className="bg-cover bg-center h-16 flex flex-col justify-center items-center w-full">
      <SearchContainer />
    </div>
  );
};

const SearchContainer = () => {
  return (
    <div className="flex items-center">
      <SearchBox />
      <Link to="/view" className="text-blue-700 font-bold hover:underline ml-2">
        <CiSearch className="h-10 w-10" />
      </Link>
    </div>
  );
};

const SearchBox = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="p-2 border border-gray-300 rounded-lg w-full min-w-[30rem] max-w-[60rem] h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    />
  );
};

export default function SearchBar(): JSX.Element {
  return (
    <MainContainer>
      <SearchContainer />
    </MainContainer>
  );
}