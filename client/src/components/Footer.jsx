import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className='p-4 mt-auto rounded-lg shadow md:px-6 md:py-8 bg-gray-900'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <img
          src={"/assets/images/logo.png"}
          className='mr-3 h-8'
          alt='Flowbite Logo'
        />
        <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
          Book QL
        </span>

        <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
          <li>
            <Link to={"/"} className='mr-4 hover:underline md:mr-6 '>
              Home
            </Link>
          </li>
          <li>
            <Link to={""} className='mr-4 hover:underline md:mr-6'>
              About
            </Link>
          </li>
          <li>
            <Link to={"/books"} className='mr-4 hover:underline md:mr-6 '>
              Books
            </Link>
          </li>
          <li>
            <Link to={"/authors"} className='hover:underline'>
              Authors
            </Link>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2022 HamidreZa™ . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
