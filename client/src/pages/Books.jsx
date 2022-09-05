import useDocTitle from "../config/customHooks";
import {useQuery, gql} from "@apollo/client";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";

const Books = () => {
  useDocTitle("Book QL | Books");
  const GET_BOOKS = gql`
    query GetBooks {
      getBooks {
        _id
        title
        author {
          name
          _id
        }
        createdAt
      }
    }
  `;

  const {data, loading, error} = useQuery(GET_BOOKS);

  if (loading) return <Loading />;
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
