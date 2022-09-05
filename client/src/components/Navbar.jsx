import {NavLink, Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='fixed w-screen bg-gray-900 lg:px-40 px-10  flex justify-between items-center border-b-1 border-gray-600 z-10'>
      <ul className='flex cursor-pointer' id='navContent'>
        <li className='py-4 px-6  hover:text-blue-300 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent text-white '>
          <NavLink
            to={"/"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "lightBlue",
                  }
                : {color: "#FFFFFF"}
            }>
            Home
          </NavLink>
        </li>
        <li className='text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent'>
          <NavLink
            to={"/books"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "lightBlue",
                  }
                : {color: "#FFFFFF"}
            }>
            Books
          </NavLink>
        </li>
        <li className='text-white py-4 px-6 sm:border-b-2 border-transparent hover:border-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent'>
          <NavLink
            to={"/authors"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "lightBlue",
                  }
                : {color: "#FFFFFF"}
            }>
            Authors
          </NavLink>
        </li>
      </ul>
      <div className='flex gap-2'>
        <div className='rounded-md shadow'>
          <Link
            to={"/createbook"}
            className='p-1 w-full flex items-center justify-center border border-transparent text-sm leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out '>
            Create new book!
          </Link>
        </div>
        <div className='mt-3 sm:mt-0 sm:ml-3'>
          <Link
            to={"/createauthor"}
            className='p-1 w-full flex items-center justify-center border border-transparent text-sm leading-6 font-regular rounded-md text-indigo-700 bg-indigo-200 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out '>
            Create new author!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
