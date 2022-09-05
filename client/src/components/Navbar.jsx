import {NavLink} from "react-router-dom";

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
    </nav>
  );
};

export default Navbar;
