import useDocTitle from "../config/customHooks";
import {useQuery, gql} from "@apollo/client";
import AuthorCard from "../components/AuthorCard";

const Authors = () => {
  useDocTitle("Book QL | Authors");
  const GET_AUTHORS = gql`
    query GetAuthors {
      getAuthors {
        _id
        name
        createdAt
      }
    }
  `;
  const {data, loading, error} = useQuery(GET_AUTHORS);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Something went wrong....</h1>;
  const authors = data.getAuthors;
  // console.log(authors);
  return (
    <>
      {authors.length == 0 ? (
        "There are no authors yet!"
      ) : (
        <div className='p-20 flex flex-wrap justify-center'>
          {authors.map((author) => {
            return <AuthorCard author={author} id={author._id} />;
          })}
        </div>
      )}
    </>
  );
};

export default Authors;
