import {useQuery, gql} from "@apollo/client";
import {useParams} from "react-router-dom";
import BookCard from "../components/BookCard";

const Book = () => {
  const params = useParams();
  const GET_BOOK = gql`
    query GetBook($id: ID!) {
      getBook(_id: $id) {
        _id
        title
        createdAt
        author {
          name
        }
      }
    }
  `;
  const {data, loading, error, refetch} = useQuery(GET_BOOK, {
    variables: {
      id: params.id,
    },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong...</h1>;
  const book = data.getBook;
  // console.log(book);
  return (
    <div className='p-20'>
      <BookCard book={book} />
    </div>
  );
};

export default Book;
