import {Link} from "react-router-dom";

const AuthorCard = ({author, id}) => {
  return (
    <div
      key={id}
      className='m-5 max-w-sm bg-blue-100 rounded-lg border border-gray-200 shadow-md hover:scale-105 transition-all'>
      <img className='rounded-t-lg' src={"/assets/images/author.webp"} alt='' />
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
          {author.title === "" ? "-No Title!-" : author.name}
        </h5>
        <p className='mb-3 font-normal text-gray-700'>
          Created at {author.createdAt.slice(0, 4)}/
          {author.createdAt.slice(5, 7)}/{author.createdAt.slice(8, 10)}
        </p>
        <Link
          to={`/books/${id}`}
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Read more
          <svg
            aria-hidden='true'
            className='ml-2 -mr-1 w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default AuthorCard;
