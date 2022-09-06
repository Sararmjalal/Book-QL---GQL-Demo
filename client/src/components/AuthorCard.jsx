import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useMutation, gql} from "@apollo/client";

const AuthorCard = ({author, id, refetch}) => {
  const [editMode, setEditMode] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const location = useLocation();

  const handleEdit = () => {
    setEditMode(!editMode);
    // console.log(editMode);
  };

  const EDIT_AUTHOR = gql`
    mutation Mutation($id: ID!, $name: String!) {
      editAuthor(_id: $id, name: $name) {
        msg
      }
    }
  `;

  const [editAuthor] = useMutation(EDIT_AUTHOR);

  const edit = async () => {
    if (!authorName) return setErrorMessage("Field can not be empty!");
    const x = await editAuthor({
      variables: {
        id: id,
        name: authorName,
      },
    });
    handleEdit();
    if (x.data.editAuthor.msg === "ok") {
      setSuccessMessage("Author edited successfully!");
      refetch()
    }
  };

  return (
    <div
      key={id}
      className='m-5 max-w-sm bg-blue-100 rounded-lg border border-gray-200 shadow-md hover:scale-105 transition-all'>
      <img className='rounded-t-lg' src={"/assets/images/author.webp"} alt='' />
      <div className='p-5'>
        <p
          className={
            successMessage
              ? "text-xs mt-3 text-green-900"
              : "text-xs mt-3 text-red-900"
          }>
          {successMessage ? successMessage : errorMessage}
        </p>
        {!editMode ? (
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
            {author.title === "" ? "-No Title!-" : author.name}
          </h5>
        ) : (
          <div className='mb-1'>
            <input
              className='py-1 rounded-md'
              type='text'
              defaultValue={author.title}
              onChange={(e) => setAuthorName(e.target.value)}
            />
            <button
              onClick={edit}
              className='inline-flex items-center py-1 px-3 ml-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
              Save
            </button>
          </div>
        )}
        <p className='mb-3 font-normal text-gray-700'>
          Created at {author.createdAt.slice(0, 4)}/
          {author.createdAt.slice(5, 7)}/{author.createdAt.slice(8, 10)}
        </p>
        <p className='mb-3 font-light text-xs text-gray-700'>{`Author ID: ${author._id}`}</p>
        <div className='flex justify-between'>
          {!author.books ? (
            ""
          ) : (
            <>
              <p className='font-bold text-blue-900'>
                Books written by {author.name}:
              </p>
              {author.books.length ? (
                author.books.map((book) => {
                  return (
                    <ul>
                      <li className='hover:text-blue-600 transition-all'>
                        <Link to={`/books/${book._id}`}>{book.title}</Link>
                      </li>
                    </ul>
                  );
                })
              ) : (
                <p className='text-red-800'>{author.name} has no books yet!</p>
              )}
            </>
          )}
          {location.pathname !== "/authors" ? (
            ""
          ) : (
            <Link
              to={`/authors/${id}`}
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
          )}
          <button
            onClick={handleEdit}
            className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
