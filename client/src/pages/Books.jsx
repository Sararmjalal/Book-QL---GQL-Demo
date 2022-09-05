import useDocTitle from "../config/customHooks";
import {useQuery, gql} from "@apollo/client";
import BookCard from "../components/BookCard";

const Books = () => {
  useDocTitle("Book QL | Books");
  const GET_BOOKS = gql`
    query GetBooks {
      getBooks {
        _id
        title
        author {
          name
        }
        createdAt
      }
    }
  `;

  const {data, loading, error} = useQuery(GET_BOOKS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong...</h1>;
  const books = data.getBooks;
  // console.log(books);
  return (
    <>
      {books.length == 0 ? (
        "There are no books yet!"
      ) : (
        <div className='p-20 flex flex-wrap justify-center'>
          {books.map((book) => {
            return <BookCard book={book} id={book._id} />;
          })}
        </div>
      )}
    </>
  );
};

export default Books;
