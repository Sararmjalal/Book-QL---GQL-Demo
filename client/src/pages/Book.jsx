import {useQuery, gql} from "@apollo/client";
import {useParams} from "react-router-dom";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";

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

  if (loading) return <Loading />;
  if (error) return <h1>Something went wrong...</h1>;
  const book = data.getBook;
  // console.log(book);
  return (
    <div className='p-20 flex flex-wrap justify-center'>
      <BookCard book={book} />
    </div>
  );
};

export default Book;
